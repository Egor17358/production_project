/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const fs = require('fs')
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults())
server.use(jsonServer.bodyParser)

// задержка для имитации ответа бека
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next()
})

server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'AUTH ERROR' })

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: e.message });
  }
});

// Проверяем авторизован ли пользователь
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' })
  };
  next()
})

server.use(router)

server.listen(8000, () => {
  console.log('JSON Server is running 8000')
})
