import React, { useState, useEffect } from "react";

const VacancyFormEditDelete = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    salary: "",
    experience: "",
    busyness: [],
    description: "",
    selectedVacancy: ""
  });
  const [vacancies, setVacancies] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch('https://a4ddb814deba66b5.mokky.dev/vacancy')
      .then(response => response.json())
      .then(data => setVacancies(data))
      .catch(error => console.error('Ошибка при получении списка вакансий:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? 
        checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)
        : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const busynessString = formData.busyness.join(", ");
      const formDataToSend = {
        ...formData,
        busyness: busynessString
      };

      const response = await fetch(`https://a4ddb814deba66b5.mokky.dev/vacancy/${formData.selectedVacancy}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });
      if (response.ok) {
        onClose();
      } else {
        console.error('Ошибка при редактировании вакансии');
      }
    } catch (error) {
      console.error('Ошибка при редактировании вакансии:', error);
    }
  };

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

  const handleOpenEditForm = () => {
    setIsOpen(true);
    setEditMode(true);
  };

  const handleOpenDeleteForm = () => {
    setIsOpen(true);
    setEditMode(false);
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
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{editMode ? "Редактирование вакансии" : "Удаление вакансии"}</h3>
                    <div className="mt-2">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectedVacancy">Выберите вакансию:</label>
                          <select name="selectedVacancy" value={formData.selectedVacancy} onChange={handleChange} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">Выберите вакансию</option>
                            {vacancies.map(vacancy => (
                              <option key={vacancy.id} value={vacancy.id}>{vacancy.name}</option>
                            ))}
                          </select>
                        </div>
                        {editMode && (
                          <>
                            <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Название:</label>
                              <input type="text" name="name" value={formData.name} onChange={handleChange} maxLength={50} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">Зарплата:</label>
                              <input type="text" name="salary" value={formData.salary} onChange={handleChange} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">Опыт работы:</label>
                              <input type="text" name="experience" value={formData.experience} onChange={handleChange} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="busyness">Занятость:</label>
                              <div>
                                <input type="checkbox" name="busyness" value="Полная занятость, полный день" onChange={handleChange} /> Полная занятость, полный день
                                <input type="checkbox" name="busyness" value="Частичная занятость" onChange={handleChange} /> Частичная занятость
                                <input type="checkbox" name="busyness" value="Удаленная работа" onChange={handleChange} /> Удаленная работа
                              </div>
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Описание:</label>
                              <textarea name="description" value={formData.description} onChange={handleChange} maxLength={500} required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                          </>
                        )}
                        <div className="flex justify-between">
                          {editMode ? (
                            <button type="button" onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Удалить вакансию</button>
                          ) : (
                            <button type="button" onClick={handleClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Подтвердить удаление</button>
                          )}
                          <div>
                            <button type="button" onClick={handleClose} className="block ml-2 px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Отмена</button>
                            {editMode && (
                              <button type="submit" className="block ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Сохранить изменения</button>
                            )}
                          </div>
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
