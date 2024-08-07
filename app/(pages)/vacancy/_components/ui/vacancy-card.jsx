import React, { useState } from 'react';

function VacancyCard({ name, salary, experience, busyness, responsibilities, requirements, conditions }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openMailClient = () => {
    const email = 'ok@agrosakhalin.ru';
    const subject = encodeURIComponent(`Отклик на вакансию ${name}`);

    window.location.href = `mailto:${email}?subject=${subject}`;
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
        onClick={toggleModal}
      >
        <h2 className="text-xl font-semibold mb-2">{name.replace(/^\d+\s-\s/, '')}</h2>
        <p className="text-gray-600">
          <strong>Зарплата:</strong> {salary} | <strong>Опыт работы:</strong> {experience} | <strong>График работы:</strong> {busyness}
        </p>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 overflow-auto" onClick={closeModal}>
          <div className="bg-white rounded-lg shadow-md p-6 
            w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] 
            h-full md:h-auto flex flex-col justify-between 
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ maxWidth: '1300px', maxHeight: '600px' }}>
            <div className="overflow-auto">
              <h2 className="text-xl font-semibold mb-2">{name.replace(/^\d+\s-\s/, '')}</h2>
              <p className="text-gray-600 mb-2"><strong>Зарплата:</strong> {salary}</p>
              <p className="text-gray-600 mb-2"><strong>Опыт работы:</strong> {experience}</p>
              <p className="text-gray-600 mb-2"><strong>График работы:</strong> {busyness}</p>
              <div className="text-gray-600 mb-2">
                <p>{responsibilities && <><strong>Обязанности:</strong> {responsibilities}</>}</p>
                <p>{requirements && <><strong>Требования:</strong> {requirements}</>}</p>
                <p>{conditions && <><strong>Условия:</strong> {conditions}</>}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={toggleModal} className="rounded-md bg-[#57534E] text-lg text-white p-2 mr-2 mb-2 duration-150 hover:bg-[#ECE3D8] hover:text-black hover:shadow-md hover:transition-all">
                Закрыть
              </button>
              <button onClick={openMailClient} className="bg-[#57534E] text-lg text-white font-bold py-2 px-4 rounded-md mb-2 duration-150 hover:bg-[#ECE3D8] hover:text-black hover:shadow-md hover:transition-all">
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
