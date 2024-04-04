// ProductDeletionForm.js
'use client';

import React, { useState, useEffect } from "react";

const ProductDeletionForm = ({ onClose }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Получаем список товаров при загрузке компонента
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://a4ddb814deba66b5.mokky.dev/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        setError('Ошибка при загрузке списка товаров');
      }
    } catch (error) {
      setError('Ошибка при загрузке списка товаров:', error);
    }
  };

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/products/${selectedProduct}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log(`Товар "${selectedProduct}" был успешно удален`);
        onClose(); // Закрываем модальное окно после успешного удаления товара
      } else {
        setError('Ошибка при удалении товара');
      }
    } catch (error) {
      setError('Ошибка при удалении товара:', error);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full" role="dialog" aria-modal="true">
        <form onSubmit={onDelete} className="p-6">
          <h2 className="text-xl font-semibold mb-4">Удаление товара</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Выберите товар для удаления</option>
            {products.map((product) => (
              <option key={product.name} value={product.name}>{product.name}</option>
            ))}
          </select>
          <button
            type="submit"
            className="block w-full mt-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Удалить товар
          </button>
          <button
            type="button"
            onClick={onClose}
            className="block w-full mt-2 px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          >
            Закрыть
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDeletionForm;


