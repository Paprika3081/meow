'use client';

import { useState } from "react";

const ProductDeletionForm = () => {
  const [id, setId] = useState('');

  const onDelete = async () => {
    try {
      const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Дополнительная логика после успешного удаления товара
        console.log(`Товар с id ${id} был успешно удален`);
      } else {
        console.error('Ошибка при удалении товара');
      }
    } catch (error) {
      console.error('Ошибка при удалении товара:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Удаление товара</h2>
      <form onSubmit={onDelete}>
        <input type="text" name='id' placeholder="Id" value={id} onChange={(e) => setId(e.target.value)} className="block w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" />
        <button type="submit" className="block w-full mt-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:bg-red-700">Удалить товар</button>
      </form>
    </div>
  );
};

export default ProductDeletionForm;
