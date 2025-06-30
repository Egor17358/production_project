cd ~/../opt/production_project/
npm run build:prod mode=production apiUrl=https://egor17358project.ru/api

rm -rf ../../var/www/production_project/html
mv build ../../var/www/production_project/html

pm2 stop 0
pm2 start json-server/index.js
