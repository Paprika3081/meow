
'use client';
import React, { useState, useEffect } from "react";

const YourParentComponent = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(true);

  useEffect(() => {
    // Выполняем запрос к API для получения списка документов
    fetch("https://a4ddb814deba66b5.mokky.dev/documents")
      .then(response => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        return response.json();
      })
      .then(data => {
        // Устанавливаем полученные данные в состояние
        setDocuments(data);
      })
      .catch(error => {
        console.error("Произошла ошибка:", error);
      });
  }, []);

  const handleEditDocument = (document) => {
    // Устанавливаем выбранный документ для редактирования
    setSelectedDocument(document);
    setIsEditModalOpen(true);
  };

  const handleOpenEditModal = () => {
    // Открываем модальное окно редактирования
    setIsEditModalOpen(true);
  };

  const handleCloseListModal = () => {
    // Закрываем модальное окно списка документов
    setIsListModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedDocument(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    // Отправляем измененный документ на сервер
    fetch(`https://a4ddb814deba66b5.mokky.dev/documents/${selectedDocument.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(selectedDocument)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка при сохранении изменений документа");
      }
      // Если сохранение на сервере прошло успешно, обновляем список документов
      setDocuments(documents.map(doc => doc.id === selectedDocument.id ? selectedDocument : doc));
      setIsEditModalOpen(false);
    })
    .catch(error => {
      console.error("Произошла ошибка при сохранении изменений документа:", error);
    });
  };

  const handleDeleteDocument = (document) => {
    // Отправляем запрос на удаление документа на сервер
    fetch(`https://a4ddb814deba66b5.mokky.dev/documents/${document.id}`, {
      method: "DELETE"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка при удалении документа");
      }
      // Если удаление на сервере прошло успешно, обновляем список документов
      setDocuments(documents.filter(doc => doc.id !== document.id));
    })
    .catch(error => {
      console.error("Произошла ошибка при удалении документа:", error);
    });
  };

  const handleCloseEditModal = () => {
    // Закрываем модальное окно редактирования
    setIsEditModalOpen(false);
    // Открываем модальное окно списка документов
    setIsListModalOpen(true);
  };

  return (
    <>
      {isListModalOpen && (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-800 bg-opacity-75 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Список документов</h2>
            <ul className="divide-y divide-gray-300 max-h-96 overflow-auto">
              {documents.map((document, index) => (
                <li key={index} className="py-2 flex justify-between items-center">
                  <div>
                    <p className="text-lg">{document.products}</p>
                    <p>Номер: {document.number}</p>
                    <p>Дата: {document.date}</p>
                    <p>Срок действия: {document.valid}</p>
                    <a href={document.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ссылка</a>
                  </div>
                  <div className="flex">
                    <button onClick={() => handleEditDocument(document)} className="ml-4 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Редактировать</button>
                    <button onClick={() => handleDeleteDocument(document)} className="ml-4 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700">Удалить</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button onClick={handleCloseListModal} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Закрыть</button>
            </div>
          </div>
        </div>
      )}
      {isEditModalOpen && selectedDocument && (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-800 bg-opacity-75 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-semibold mb-2">Редактирование документа</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="products" className="block text-sm font-medium text-gray-700">Товары</label>
                <input type="text" name="products" id="products" value={selectedDocument?.products} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Номер</label>
                <input type="text" name="number" id="number" value={selectedDocument?.number} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Дата</label>
                <input type="text" name="date" id="date" value={selectedDocument?.date} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="valid" className="block text-sm font-medium text-gray-700">Срок действия</label>
                <input type="text" name="valid" id="valid" value={selectedDocument?.valid} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="link" className="block text-sm font-medium text-gray-700">Ссылка</label>
                <input type="text" name="link" id="link" value={selectedDocument?.link} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="flex justify-end">
                <button onClick={handleSaveChanges} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 mr-2">Сохранить изменения</button>
                <button onClick={handleCloseEditModal} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Отмена</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default YourParentComponent;

