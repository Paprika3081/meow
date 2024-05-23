// DocumentEditDeleteCard.js
'use client'; 
// DocumentEditDeleteCard.js
import React, { useState } from "react";
import DocumentForm from "./documents-form-delete"; // Проверьте имя файла, чтобы оно совпадало с фактическим именем

const DocumentEditDeleteCard = ({ document }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Инвертируем состояние isModalOpen
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer" onClick={toggleModal}>
        <h2 className="text-xl font-semibold mb-4">Редактировать или удалить документ</h2>
        <p>Нажмите на карточку, чтобы открыть форму редактирования или удаления документа</p>
      </div>
      {isModalOpen && (
        <div className="modal">
          <DocumentForm document={document} onClose={toggleModal} />
        </div>
      )}
    </div>
  );
};

export default DocumentEditDeleteCard;

