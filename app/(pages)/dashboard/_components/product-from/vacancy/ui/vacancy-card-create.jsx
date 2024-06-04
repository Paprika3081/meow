// VacancyCreationCard.js
'use client';
import React, { useState } from "react";
import VacancyFormCreate from "./vacancy-form-create";

const VacancyCreationCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer" onClick={openModal}>
        <h2 className="text-xl font-semibold mb-4">Создать вакансию</h2>
        <p>Нажмите на карточку, чтобы создать вакансию</p>
      </div>
      {isModalOpen && <VacancyFormCreate onClose={closeModal} />}
    </div>
  );
};

export default VacancyCreationCard;
