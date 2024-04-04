// DeclarationForm.js
'use client';
import React, { useState } from "react";

const DeclarationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    id: null, // Автоматически генерируемый ID
    products: "",
    number: "",
    date: "",
    valid: "",
    link: null // Ссылка на PDF-файл
  });

  const handleChange = (e) => {
    if (e.target.name === "link") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        link: e.target.files[0] // Сохраняем выбранный файл
      }));
    } else {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Генерация уникального ID
      const id = Date.now().toString();
      // Получение имени файла из поля link
      const fileName = formData.link ? formData.link.name : '';
      // Создание объекта с данными для отправки
      const dataToSend = { ...formData, id, link: `/${fileName}` };
      
      const response = await fetch("https://a4ddb814deba66b5.mokky.dev/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных на сервер");
      }

      console.log("Данные успешно отправлены на сервер");
      // Закрытие модального окна после успешной отправки данных
      onClose();
    } catch (error) {
      console.error("Произошла ошибка при отправке данных на сервер:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Редактирование документов</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="products" className="block font-semibold mb-2">Продукты:</label>
            <input type="text" id="products" name="products" value={formData.products} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block font-semibold mb-2">Номер:</label>
            <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block font-semibold mb-2">Дата:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="valid" className="block font-semibold mb-2">Срок действия:</label>
            <input type="text" id="valid" name="valid" value={formData.valid} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block font-semibold mb-2">Выберите PDF-файл:</label>
            <input type="file" id="link" name="link" accept=".pdf" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Отмена</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeclarationForm;
