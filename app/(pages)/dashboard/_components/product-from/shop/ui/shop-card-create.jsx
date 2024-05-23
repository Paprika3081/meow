
import React, { useState } from "react";
import ShopFormCreate from "./shop-form-create"; // Убедитесь, что путь к файлу правильный

const ShopCreationCard = () => {
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
      {isModalOpen && <ShopFormCreate onClose={closeModal} />}
    </div>
  );
};

export default ShopCreationCard;
