'use client';

import React, { useEffect, useState } from "react";
import ProductCreationCard from "./_components/product-from/ui/product/product-card-create";
import ProductDeletionCard from "./_components/product-from/ui/product/product-card-delete";
import ProductTitle from "./_components/product-from/ui/product/product-titile";
import DeclarationCreationCard from "./_components/product-from/ui/documents/documents-card-create";
import DeclarationEditDeleteCard from "./_components/product-from/ui/documents/documents-card-delete";
import VacancyCard from "../vacancy/_components/ui/vacancy-card";
import VacancyCreationCard from "./_components/product-from/ui/vacancy/vacancy-card-create";
import VacancyDeletionCard from "./_components/product-from/ui/vacancy/vacancy-card-delete";
import VacancyCardEdit from "./_components/product-from/ui/vacancy/vacancy-card-edit";

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
       <div className="flex items-center h-screen">
         <div className="flex flex-col shadow-sm p-6">
            <h1 className="text-xl font-bold mb-4">Работа с товарами</h1>
            <ProductCreationCard />
            <ProductDeletionCard />
         </div>
         <div className="flex flex-col shadow-sm p-6">
            <h1 className="text-xl font-bold mb-4">Редактирование Документов</h1>
            <DeclarationCreationCard/>
            <DeclarationEditDeleteCard/>
          </div>
          <div className="flex flex-col shadow-sm p-6">
          <h1 className="text-xl font-bold mb-4">Работа с вакансиями</h1>
           <VacancyCreationCard/>
           <VacancyDeletionCard/>
          </div>
     </div>
    </div>
  );
};

export default Dashboard;
