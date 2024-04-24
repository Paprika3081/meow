const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

// Подключаем middleware для загрузки файлов
app.use(fileUpload());

// Разрешаем CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Обработчик POST-запроса для загрузки файла
app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('Файл не был загружен.');
  }

  // Получаем файл из запроса
  const uploadedFile = req.files.uploadedFile;

  // Перемещаем файл в папку uploads
  uploadedFile.mv(path.join(__dirname, 'uploads', uploadedFile.name), (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('Файл успешно загружен.');
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
