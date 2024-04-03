// DocumentEditDeleteCard.js
'use client';


import React, { useState, useEffect } from "react";
import DocumentForm from "./documents-form-delete";

const DocumentEditDeleteCard = ({ document }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(false);
  }, [document]);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer" onClick={openModal}>
        <h2 className="text-xl font-semibold mb-4">Редактировать или удалить документ</h2>
        <p>Нажмите на карточку, чтобы открыть форму редактирования или удаления документа</p>
      </div>
      {isModalOpen && <DocumentForm document={document} onClose={closeModal} />}
    </div>
  );
};

export default DocumentEditDeleteCard;

