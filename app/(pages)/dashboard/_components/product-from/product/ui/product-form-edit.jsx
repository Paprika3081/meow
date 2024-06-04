'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';

const ProductEditForm = ({ onClose, productId }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sku, setSku] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState("/noname.jpg");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://a4ddb814deba66b5.mokky.dev/products");
        setProducts(response.data);
        // Устанавливаем выбранный товар по идентификатору, если он был передан
        if (productId) {
          const selectedProduct = response.data.find(product => product.id === productId);
          if (selectedProduct) {
            setSelectedProduct(selectedProduct);
          }
        }
      } catch (error) {
        console.error("Ошибка при получении списка товаров:", error);
      }
    };

    fetchProducts();
  }, [productId]);

  const handleProductChange = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
    // Устанавливаем значения только если выбран товар
    if (selectedProduct) {
      setSku(selectedProduct.sku);
      setTitle(selectedProduct.title);
      setCategory({ value: selectedProduct.category, label: selectedProduct.category });
      setDescription(selectedProduct.description);
      setImage(selectedProduct.image);
    }
  };

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
        setImage(data.imagePath);
      })
      .catch(error => console.error('Ошибка при загрузке изображения:', error));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!sku.trim() || !title.trim() || !category || !selectedProduct.id) {
      setError('Все поля обязательны для заполнения');
      return;
    }

    const data = {
      sku,
      title,
      category: category.value,
      description,
      image
    };

    try {
      const response = await axios.patch(`https://a4ddb814deba66b5.mokky.dev/products/${selectedProduct.id}`, data);
      if (response.status === 200) {
        setSuccess('Товар успешно отредактирован');
        onClose(); // Закрываем форму после успешного сохранения данных
      }
    } catch (error) {
      console.error('Ошибка при редактировании товара:', error);
      setError('Ошибка при редактировании товара');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Форма редактирования товара</h2>
        <form onSubmit={onSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <Select
            options={products.map(product => ({ value: product.id, label: product.title, ...product }))}
            value={selectedProduct}
            onChange={handleProductChange}
            placeholder="Выберите товар"
            required
            className="mb-4"
          />
          <div className="flex justify-end mb-4">
            <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">Закрыть</button>
          </div>
          {selectedProduct && (
            <>
              <input type="text" name='sku' placeholder="Артикул" value={sku} onChange={(e) => setSku(e.target.value)} required className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" />
              <input type="text" name='title' placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} required className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500"/>
              <Select
                options={[
                  { value: 'Мясная продукция', label: 'Мясная продукция' },
                  { value: 'Молочная продукция', label: 'Молочная продукция' },
                  { value: 'Овощи', label: 'Овощи' }
                ]}
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
                onChange={(e) => setDescription(e.target.value.slice(0, 50))}
                maxLength={50}
                className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <input type="file" name="image" onChange={handleImageUpload} className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" />
              <div className="flex justify-end">
                <button type="button" onClick={onClose} className="block px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Закрыть</button>
                <button type="submit" className="block ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Сохранить</button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductEditForm;
