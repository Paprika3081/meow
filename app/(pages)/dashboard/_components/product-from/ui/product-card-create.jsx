// Родительский компонент ProductCreationCard
'use client';

import { useState } from "react";
import ProductCreationForm from "./product-form-create";

const ProductCreationCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer" onClick={openModal}>
      <h2 className="text-xl font-semibold mb-4">Создание товара</h2>
      <p>Нажмите на карточку, чтобы создать новый товар</p>
      {isModalOpen && <ProductCreationForm onClose={closeModal} />} {/* передаем функцию closeModal в компонент ProductCreationForm */}
    </div>
  );
};

export default ProductCreationCard;
