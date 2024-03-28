import React, { useState } from 'react';

function VacancyCard({ name, salary, experience, busyness, description }) {
  const [showModal, setShowModal] = useState(false);
  const [messageData, setMessageData] = useState({
    email: 'example@example.com', // Установка адреса отправителя по умолчанию
    message: '',
    file: null,
  });
  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
    setErrors({}); // Сброс ошибок при открытии модального окна
  };

  const handleChange = (e) => {
    setMessageData({
      ...messageData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!messageData.email.includes('@')) {
      errors.email = 'Неправильный формат email';
    }
    if (messageData.message.trim() === '') {
      errors.message = 'Поле сообщения обязательно для заполнения';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendDataToEmail = async () => {
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('email', messageData.email);
    formData.append('message', messageData.message);
    if (messageData.file) {
      formData.append('file', messageData.file);
    }

    try {
      const response = await fetch('your-mail-api-url', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      console.log('Message sent successfully');
      toggleModal(); // Закрытие модального окна после успешной отправки
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
        onClick={toggleModal}
      >
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">
          Зарплата: {salary} | Опыт работы: {experience} | График работы: {busyness}
        </p>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">Зарплата: {salary}</p>
            <p className="text-gray-600 mb-2">Опыт работы: {experience}</p>
            <p className="text-gray-600 mb-2">График работы: {busyness}</p>
            <p className="text-gray-600 mb-2">{description}</p>
            <input
              type="email"
              name="email"
              value={messageData.email}
              onChange={handleChange}
              placeholder="Введите ваш email"
              className={`border border-gray-400 rounded-md p-2 mb-2 w-full ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <textarea
              name="message"
              value={messageData.message}
              onChange={handleChange}
              placeholder="Введите ваше сообщение"
              rows="4"
              className={`border border-gray-400 rounded-md p-2 mb-2 w-full ${
                errors.message ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
            <input
              type="file"
              name="file"
              onChange={(e) => setMessageData({ ...messageData, file: e.target.files[0] })}
              accept=".pdf"
              className="border border-gray-400 rounded-md p-2 mb-2 w-full"
            />
            {/* Изменение обработчика события для кнопки "Откликнуться" */}
            <button onClick={sendDataToEmail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Откликнуться
            </button>
            <button onClick={toggleModal} className="rounded-md bg-[#57534E] p-2 text-lg text-white duration-150 hover:bg-[#ECE3D8]  hover:text-black hover:shadow-md hover:transition-all md:px-15 md:py-3">
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default VacancyCard;
