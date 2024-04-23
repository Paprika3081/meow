import { useState } from "react";
import { CatalogModal } from "../../catalog-modal";
import { Button } from "@/app/_components/button/ui/button";

export const Product = ({ id, title, image, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div key={id} className="border p-4">
      <img src={image} alt={title} className="mb-2 m-auto" />
      <h3 className="text-xl font-bold text-center">{title}</h3>

      <Button onClick={handleOpenModal}>Подробнее</Button>
      {showModal && (
        <CatalogModal handleCloseModal={handleCloseModal} image={image} title={title} description={description} />
      )}
    </div>
  );
};
