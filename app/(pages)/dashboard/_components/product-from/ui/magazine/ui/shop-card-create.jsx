// StoreCreationCard.js
import React, { useState } from "react";
import StoreFormCreate from "./shop-form-create"; // Убедитесь, что путь к файлу правильный

const StoreCreationCard = () => {
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
        <h2 className="text-xl font-semibold mb-4">Создать магазин</h2>
        <p>Нажмите на карточку, чтобы создать магазин</p>
      </div>
      {isModalOpen && <StoreFormCreate onClose={closeModal} />}
    </div>
  );
};

export default StoreCreationCard;
