const { parse } = require('url');
const next = require('next');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

// Обработчик всех маршрутов
server.get('*', (req, res) => {
  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl).catch((err) => {
    console.error('Error handling request:', err);
    res.status(500).send('Something broke!');
  });
});

// Обработчик ошибок
server.use((err, req, res, next) => {
  console.error('Global error handler:', err.stack);
  res.status(500).send('Something broke!');
});

app.prepare().then(() => {
  const PORT = process.env.PORT || 3000;
  const HOST = 'localhost'; // Исправлено на правильный IP-адрес
  server.listen(PORT, HOST, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${HOST}:${PORT}`);
  });
});
