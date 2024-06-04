// StoreFormDelete.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ShopFormDelete = ({ onClose }) => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState("");

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("https://a4ddb814deba66b5.mokky.dev/shops");
        setShops(response.data);
      } catch (error) {
        console.error("Ошибка при получении списка магазинов:", error);
        // Дополнительные действия при ошибке
      }
    };

    fetchShops();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`https://a4ddb814deba66b5.mokky.dev/shops/${selectedShop}`);
      console.log("Магазин успешно удален");
      onClose();
    } catch (error) {
      console.error("Ошибка при удалении магазина:", error);
      // Дополнительные действия при ошибке
    }
  };

  const handleChange = (e) => {
    setSelectedShop(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Форма удаления магазина</h2>
        <form onSubmit={handleDelete}>
          <div className="mb-4">
            <label htmlFor="shop" className="block text-sm font-medium text-gray-700">Выберите магазин:</label>
            <select id="shop" name="shop" value={selectedShop} onChange={handleChange} required className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Выберите магазин</option>
              {shops.map(shop => (
                <option key={shop.id} value={shop.id}>{shop.title} - {shop.city}, {shop.street}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end mt-4">
            <button type="button" className="px-4 py-2 bg-gray-400 text-white mr-2 rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onClick={onClose}>Отмена</button>
            <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Удалить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopFormDelete;
