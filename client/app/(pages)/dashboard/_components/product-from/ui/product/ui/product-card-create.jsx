// ProductCreationCard.js
'use client';

import { useState } from "react";
import ProductCreationForm from "./product-form-create"; // Убедитесь, что путь к компоненту ProductCreationForm указан правильно

const ProductCreationCard = () => {
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
        <h2 className="text-xl font-semibold mb-4">Создание товара</h2>
        <p>Нажмите на карточку, чтобы создать новый товар</p>
      </div>
      {isModalOpen && <ProductCreationForm onClose={closeModal} />} {/* Поместите компонент ProductCreationForm внутрь блока, чтобы он отображался только при isModalOpen === true */}
    </div>
  );
};

export default ProductCreationCard;
