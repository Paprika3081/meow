'use client';
import React, { useState } from "react";
import ProductCreationCard from "./product-from/product/ui/product-card-create";
import ProductDeletionCard from "./product-from/product/ui/product-card-delete";
import ProductTitle from "./product-from/product/ui/product-titile";
import ProductEditCard from "./product-from/product/ui/product-card-edit";
import DeclarationCreationCard from "./product-from/documents/ui/documents-card-create";
import DeclarationEditDeleteCard from "./product-from/documents/ui/documents-card-delete";
import VacancyCreationCard from "./product-from/vacancy/ui/vacancy-card-create";
import VacancyDeletionCard from "./product-from/vacancy/ui/vacancy-card-delete";
import ShopCreationCard from "./product-from/shop/ui/shop-card-create";
import ShopDeletionCard from "./product-from/shop/ui/shop-card-delete";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('Торговля');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Торговля':
        return (
          <>
            <h1 className="text-xl font-bold mb-4">ТОВАРЫ</h1>
            <ProductCreationCard />
            <ProductDeletionCard />
            <ProductEditCard />
            <h1 className="text-xl font-bold mt-8 mb-4">МАГАЗИНЫ</h1>
            <ShopCreationCard />
            <ShopDeletionCard />
            <h1 className="text-xl font-bold mt-8 mb-4">РЕДАКТИРОВАНИЕ ДОКУМЕНТОВ</h1>
            <DeclarationCreationCard />
            <DeclarationEditDeleteCard />
          </>
        );
      case 'Маркетинг':
        return (
          <h1 className="text-xl font-bold mb-4">Маркетинговые инструменты будут добавлены позже</h1>
        );
      case 'Кадровое':
        return (
          <>
            <h1 className="text-xl font-bold mb-4">ВАКАНСИИ</h1>
            <VacancyCreationCard />
            <VacancyDeletionCard />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {/* Боковое меню */}
      <div className="w-1/6 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-4">ПАНЕЛЬ АДМИНИСТРАТОРА</h2>
        <ul>
          <li
            className={`cursor-pointer mb-2 ${
              selectedSection === 'Торговля' ? 'font-bold text-yellow-400' : ''
            }`}
            onClick={() => setSelectedSection('Торговля')}
          >
            Торговля
          </li>
          <li
            className={`cursor-pointer mb-2 ${
              selectedSection === 'Маркетинг' ? 'font-bold text-yellow-400' : ''
            }`}
            onClick={() => setSelectedSection('Маркетинг')}
          >
            Маркетинг
          </li>
          <li
            className={`cursor-pointer mb-2 ${
              selectedSection === 'Кадровое' ? 'font-bold text-yellow-400' : ''
            }`}
            onClick={() => setSelectedSection('Кадровое')}
          >
            Кадровое
          </li>
        </ul>
      </div>

      {/* Контент */}
      <div className="w-5/6 bg-white rounded-lg shadow-md p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
