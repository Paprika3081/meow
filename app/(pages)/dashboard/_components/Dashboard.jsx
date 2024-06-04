'use client';
import React from "react";
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
  return (
    <div>
      <ProductTitle/>
      <div className="grid grid-cols-2 gap-8 justify-center mx-auto max-w-7xl p-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold mb-4">РАБОТА С ТОВАРАМИ</h1>
        <ProductCreationCard />
        <ProductDeletionCard />
        <ProductEditCard/>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold mb-4">РЕДАКТИРОВАНИЕ ДОКУМЕНТОВ</h1>
        <DeclarationCreationCard/>
        <DeclarationEditDeleteCard/>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold mb-4">РАБОТА С ВАКАНСИЯМИ</h1>
        <VacancyCreationCard/>
        <VacancyDeletionCard/>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold mb-4">РАБОТА С МАГАЗИНАМИ</h1>
        <ShopCreationCard/>
        <ShopDeletionCard/>
      </div>
    </div>
   </div>
    
  );
};

export default Dashboard;
