/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const fs = require('node:fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken')
const path = require('path');
const https = require('node:https');

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'private-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'certificate.pem')),
};

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// задержка для имитации ответа бека
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'),
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );
    console.log('username', username);
    console.log('password', password);

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: e.message });
  }
});

// Проверяем авторизован ли пользователь
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(router);

const httpsServer = https.createServer(options, server);

const PORT = 8443;
httpsServer.listen(PORT, () => {
  console.log(`JSON Server is running ${PORT}`);
});
