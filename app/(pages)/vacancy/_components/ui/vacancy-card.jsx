import React, { useState } from 'react';

function VacancyCard({ name, salary, experience, busyness, description }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openMailClient = () => {
    const email = 'ok@agrosakhalin.ru';
    const subject = encodeURIComponent(`Отклик на вакансию ${name}`);

    window.location.href = `mailto:${email}?subject=${subject}`;
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-auto">
          <div className="bg-white rounded-lg shadow-md p-6 w-96 h-64 overflow-auto" style={{ width: '600px', height: '300px' }}>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">Зарплата: {salary}</p>
            <p className="text-gray-600 mb-2">Опыт работы: {experience}</p>
            <p className="text-gray-600 mb-2">График работы: {busyness}</p>
            <p className="text-gray-600 mb-2 overflow-auto">{description}</p>
            <div className="flex gap-4">
              <button onClick={toggleModal} className="rounded-md bg-[#57534E] text-lg text-white p-2 duration-150 hover:bg-[#ECE3D8] hover:text-black hover:shadow-md hover:transition-all">
                Закрыть
              </button>
              <button onClick={openMailClient} className="bg-[#57534E] text-lg text-white font-bold py-2 px-4 rounded-md duration-150 hover:bg-[#ECE3D8] hover:text-black hover:shadow-md hover:transition-all">
                Откликнуться
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VacancyCard;
