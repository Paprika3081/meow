'use client';

import { useState } from "react";
import Select from 'react-select';

const ProductCreationForm = ({ onClose }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
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
    if (!id.trim() || !title.trim() || !selectedCategory || !price.trim() || !image) {
      setError('Все поля обязательны для заполнения');
      return;
    }

    // Ваша дополнительная логика валидации может быть добавлена здесь

    const data = {
      id,
      title,
      description: selectedCategory.value, // используем значение выбранной категории
      price,
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
      setId('');
      setTitle('');
      setSelectedCategory(null);
      setPrice('');
      setImage(null);
      onClose(); // Закрываем модальное окно после успешного создания товара
    } else {
      console.error('Ошибка при создании товара');
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Создание товара</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <input type="text" name='id' placeholder="Id" value={id} onChange={(e) => setId(e.target.value)} required className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" />
            <input type="text" name='title' placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} required className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500"/>
            <Select
              options={categoryOptions}
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="Выберите категорию"
              required
              className="mb-4"
            />
            <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} required className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" />
            <input type="text" name='price' placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)} required className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" />
            <div className="flex justify-between">
              <button type="button" onClick={onClose} className="block w-full mr-2 px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Отмена</button>
              <button type="submit" className="block w-full ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Создать товар</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreationForm;
