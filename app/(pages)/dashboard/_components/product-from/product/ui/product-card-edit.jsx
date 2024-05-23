// ProductEditCard.js
import React, { useState } from "react";
import ProductEditForm from "./product-form-edit"

const ProductEditCard = () => {
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
        <h2 className="text-xl font-semibold mb-4">Редактирование</h2>
        <p>Нажмите на карточку, чтобы отредактировать продукт</p>
      </div>
      {isModalOpen && <ProductEditForm onClose={closeModal} />} {/* Поместите компонент ProductEditForm внутрь блока, чтобы он отображался только при isModalOpen === true */}
    </div>
  );
};

export default ProductEditCard;
