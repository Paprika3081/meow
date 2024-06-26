
import React, { useState } from "react";
import ShopFormDelete from "./shop-form-delete";

const ShopDeletionCard = () => {
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
        <h2 className="text-xl font-semibold mb-4">Удалить магазин</h2>
        <p>Нажмите на карточку, чтобы удалить магазин</p>
      </div>
      {isModalOpen && <ShopFormDelete onClose={closeModal} />}
    </div>
  );
};

export default ShopDeletionCard;
