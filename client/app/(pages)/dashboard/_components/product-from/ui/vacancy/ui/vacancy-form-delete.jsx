import React, { useState, useEffect } from "react";

const VacancyFormEditDelete = ({ onClose }) => {
  const [formData, setFormData] = useState({
    selectedVacancy: ""
  });
  const [vacancies, setVacancies] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    fetch('https://a4ddb814deba66b5.mokky.dev/vacancy')
      .then(response => response.json())
      .then(data => setVacancies(data))
      .catch(error => console.error('Ошибка при получении списка вакансий:', error));
  }, []);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/vacancy/${formData.selectedVacancy}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        onClose();
      } else {
        console.error('Ошибка при удалении вакансии');
      }
    } catch (error) {
      console.error('Ошибка при удалении вакансии:', error);
    }
  };

  const handleOpenDeleteForm = (vacancyId) => {
    setIsOpen(true);
    setFormData(prevState => ({
      ...prevState,
      selectedVacancy: vacancyId
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Удаление вакансии</h3>
                    <div className="mt-2">
                      <form>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectedVacancy">Выберите вакансию:</label>
                          <select name="selectedVacancy" value={formData.selectedVacancy} onChange={(e) => setFormData({ selectedVacancy: e.target.value })} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">Выберите вакансию</option>
                            {vacancies.map(vacancy => (
                              <option key={vacancy.id} value={vacancy.id}>{vacancy.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex justify-between">
                          <button type="button" onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Удалить вакансию</button>
                          <button type="button" onClick={handleClose} className="block ml-2 px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Отмена</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VacancyFormEditDelete;
