import React, { useState } from "react";
import VacancyFormEditDelete from "./vacancy-form-delete";

const VacancyCreationCard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer" onClick={openForm}>
        <h2 className="text-xl font-semibold mb-4">Удалить вакансию</h2>
        <p>Нажмите на карточку, чтобы удалить вакансию</p>
      </div>
      {isFormOpen && <VacancyFormEditDelete onClose={closeForm} />}
    </div>
  );
};

export default VacancyCreationCard;
