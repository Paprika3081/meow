// StoreFormCreate.js
import React, { useState } from "react";
import axios from "axios";
import { cities } from "./cities";

const StoreFormCreate = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    street: "",
    schedule1: "",
    schedule2: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      id: "", // Поле id будет генерироваться сервером
      ...formData
    };
    try {
      const response = await axios.post("https://a4ddb814deba66b5.mokky.dev/shops", dataToSend);
      console.log("Магазин успешно создан:", response.data);
      onClose(); // Закрытие модального окна после успешной отправки формы
    } catch (error) {
      console.error("Ошибка при создании магазина:", error);
      // Дополнительные действия при ошибке
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Форма создания магазина</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Название:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Город:</label>
            <select id="city" name="city" value={formData.city} onChange={handleChange} required className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Выберите город</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Улица:</label>
            <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} required className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="schedule1" className="block text-sm font-medium text-gray-700">Расписание работы:</label>
            <input type="text" id="schedule1" name="schedule1" value={formData.schedule1} onChange={handleChange} required className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="schedule2" className="block text-sm font-medium text-gray-700">Дополнительное расписание:</label>
            <input type="text" id="schedule2" name="schedule2" value={formData.schedule2} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
          </div>

          <div className="flex justify-end">
            <button type="button" className="px-4 py-2 bg-gray-400 text-white mr-2 rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onClick={onClose}>Отмена</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Создать</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StoreFormCreate;
