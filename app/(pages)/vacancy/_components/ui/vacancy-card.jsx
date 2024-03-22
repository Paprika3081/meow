import React, { useState } from 'react';

function VacancyCard({ name, salary, experience, busyness, description }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
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
