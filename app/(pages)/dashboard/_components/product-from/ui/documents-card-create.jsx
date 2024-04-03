// DeclarationCreationCard.js
'use client';
import React, { useState } from "react";
import DeclarationForm from "./documents-form-create";

const DeclarationCreationCard = () => {
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
        <h2 className="text-xl font-semibold mb-4">Создать документ</h2>
        <p>Нажмите на карточку, чтобы создать документы: декларации соответствия</p>
      </div>
      {isModalOpen && <DeclarationForm onClose={closeModal} />}
    </div>
  );
};

export default DeclarationCreationCard;
