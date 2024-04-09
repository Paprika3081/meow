'use client';
import React, { useEffect, useState } from "react";
import ProductCreationCard from "./_components/product-from/ui/product/ui/product-card-create";
import ProductDeletionCard from "./_components/product-from/ui/product/ui/product-card-delete";
import ProductTitle from "./_components/product-from/ui/product/ui/product-titile";
import DeclarationCreationCard from "./_components/product-from/ui/documents/ui/documents-card-create";
import DeclarationEditDeleteCard from "./_components/product-from/ui/documents/ui/documents-card-delete";
import VacancyCard from "../vacancy/_components/ui/vacancy-card";
import VacancyCreationCard from "./_components/product-from/ui/vacancy/ui/vacancy-card-create";
import VacancyDeletionCard from "./_components/product-from/ui/vacancy/ui/vacancy-card-delete";
import VacancyCardEdit from "./_components/product-from/ui/vacancy/ui/vacancy-card-edit";
import StoreCreationCard from "./_components/product-from/ui/magazine/ui/shop-card-create";
import StoreFormDelete from "./_components/product-from/ui/magazine/ui/shop-card-delete";
import StoreDeletionCard from "./_components/product-from/ui/magazine/ui/shop-card-delete";
import ProductEditCard from "./_components/product-from/ui/product/ui/product-card-edit";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = "admin";
  const password = "1111";

  useEffect(() => {
    // Проверяем, была ли уже выполнена аутентификация
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
    if (storedIsAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);

  const authenticate = () => {
    const enteredLogin = prompt("Введите логин:");
    const enteredPassword = prompt("Введите пароль:");

    if (enteredLogin === login && enteredPassword === password) {
      // Если логин и пароль верные, устанавливаем флаг аутентификации
      localStorage.setItem("isAuthenticated", true);
      setIsAuthenticated(true);
    } else {
      // Если логин или пароль неверные, отменяем доступ
      alert("Неверный логин или пароль. Доступ запрещен.");
    }
  };

  if (!isAuthenticated) {
    authenticate();
    return null; // Ничего не отображаем до выполнения аутентификации
  }

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
        <StoreCreationCard/>
        <StoreDeletionCard/>
      </div>
    </div>
   </div>
    
  );
};

export default Dashboard;
