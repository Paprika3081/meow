'use client';

import React, { useState } from "react";
import Select from 'react-select';

const ProductCreationForm = ({ onClose }) => {
  const [sku, setSku] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState("/noname.jpg"); // Изображение по умолчанию
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const categoryOptions = [
    { value: 'мясная продукция', label: 'Мясная продукция' },
    { value: 'молочная продукция', label: 'Молочная продукция' },
    { value: 'овощи', label: 'Овощи' }
  ];

  const onSubmit = async (e) => {
    e.preventDefault();

    // Валидация всех полей
    if (!sku.trim() || !title.trim() || !category) {
      setError('Все поля обязательны для заполнения');
      return;
    }

    // Ваша дополнительная логика валидации может быть добавлена здесь

    // Составляем объект данных с сохранением порядка полей
    const data = {
      id: null, // Айдишник будет заполнен на сервере
      sku,
      title,
      category: category.value, // используем значение выбранной категории
      description,
      image
    };

    const response = await fetch('https://a4ddb814deba66b5.mokky.dev/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      setSuccess('Товар успешно создан');
      // Очистка полей после успешного создания товара
      setSku('');
      setTitle('');
      setCategory(null);
      setDescription('');
      setImage("/noname.jpg"); // Сброс изображения по умолчанию
      onClose(); // Закрываем модальное окно после успешного создания товара
    } else {
      console.error('Ошибка при создании товара');
    }
  };

  // Функция для загрузки изображения на сервер
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        // Устанавливаем полученную ссылку на изображение
        setImage(data.imagePath);
      })
      .catch(error => console.error('Ошибка при загрузке изображения:', error));
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full" role="dialog" aria-modal="true">
        <form onSubmit={onSubmit} className="p-6">
          <h2 className="text-xl font-semibold mb-4">Создание товара</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <input type="text" name='sku' placeholder="Артикул" value={sku} onChange={(e) => setSku(e.target.value)} required className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" />
          <input type="text" name='title' placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} required className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500"/>
          <Select
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            placeholder="Выберите категорию"
            required
            className="mb-4"
          />
          <textarea
            name="description"
            placeholder="Описание (до 50 символов)"
            value={description}
            onChange={(e) => setDescription(e.target.value.slice(0, 50))} // ограничение до 50 символов
            maxLength={50}
            className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <input type="file" name="image" onChange={handleImageUpload} className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="block px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Отмена</button>
            <button type="submit" className="block ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Создать товар</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCreationForm;
