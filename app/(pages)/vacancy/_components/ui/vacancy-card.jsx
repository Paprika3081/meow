import React, { useState } from 'react';

function VacancyCard({ name, salary, experience, busyness, description }) {
  const [showModal, setShowModal] = useState(false);
  const [messageData, setMessageData] = useState({
    email: '',
    message: '',
    file: null,
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      const file = e.target.files[0];
      if (file && file.type === 'application/pdf') {
        setMessageData({
          ...messageData,
          [e.target.name]: file,
        });
      } else {
        alert('Пожалуйста, выберите PDF файл.');
      }
    } else {
      setMessageData({
        ...messageData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const sendMessage = async () => {
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
      // После успешной отправки сообщения вы можете выполнить какие-то действия, например, закрыть модальное окно
      toggleModal();
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
              className="border border-gray-400 rounded-md p-2 mb-2 w-full"
            />
            <textarea
              name="message"
              value={messageData.message}
              onChange={handleChange}
              placeholder="Введите ваше сообщение"
              rows="4"
              className="border border-gray-400 rounded-md p-2 mb-2 w-full"
            ></textarea>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              accept=".pdf"
              className="border border-gray-400 rounded-md p-2 mb-2 w-full"
            />
            <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
