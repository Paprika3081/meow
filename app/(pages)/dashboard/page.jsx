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
  const login = process.env.NEXT_PUBLIC_LOGIN;
  const storedPassword = process.env.NEXT_PUBLIC_PASSWORD;

  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedLogin = localStorage.getItem('login');
    if (storedLogin) {
      setEnteredLogin(storedLogin);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredLogin.toLowerCase() === login.toLowerCase() && enteredPassword === storedPassword) {
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('login', enteredLogin);
      setAuthenticated(true);
    } else {
      setError('Неверный логин или пароль. Доступ запрещен.');
    }
  };

  if (!authenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl mb-4">Войдите</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Логин:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                value={enteredLogin} 
                onChange={(e) => setEnteredLogin(e.target.value)} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Пароль:
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="password" 
                value={enteredPassword} 
                onChange={(e) => setEnteredPassword(e.target.value)} 
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit"
              >
                Войти
              </button>
            </div>
            {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
          </form>
        </div>
      </div>
    );
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
