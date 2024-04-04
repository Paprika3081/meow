import { useState } from "react";
import { CatalogModal } from "../../catalog-modal";
import { Button } from "@/app/_components/button/ui/button";

export const Product = ({ id, name, image, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div key={id} className="border p-4">
      <img src={image} alt={name} className="mb-2 m-auto" />
      <h3 className="text-xl font-bold text-center">{name}</h3>

      <Button onClick={handleOpenModal}>Подробнее</Button>
      {showModal && (
        <CatalogModal handleCloseModal={handleCloseModal} image={image} name={name} description={description} />
      )}
    </div>
  );
};
