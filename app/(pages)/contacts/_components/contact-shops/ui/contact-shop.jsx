// ShopList.js
'use client'
import { Lobster } from "next/font/google"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const lobster = Lobster({
  weight: ["400"],
  subsets: ["cyrillic", "latin"],
})

const ShopList = () => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        axios.get('https://a4ddb814deba66b5.mokky.dev/shops')
            .then(response => {
                setShops(response.data);
            })
            .catch(error => {
                console.error('Ошибка загрузки данных:', error);
            });
    }, []);

    return (
<div className="container gap-4 mx-auto">
    <h1 className={`text-3xl font-bold mb-4 p-8 text-amber-950 ${lobster.className}`}>Сеть фирменных магазинов</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {shops.map(shop => (
            <div key={shop.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex justify-center">
                <div className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto flex items-center justify-center flex-col">
                    <div className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-bold mb-2">{shop.title}</div>
                    <div className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-500 mb-2">Город: {shop.city}</div>
                    <div className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-500 mb-2">Улица: {shop.street}</div>
                    <div className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-500 mb-2"> {shop.schedule1}</div>
                    <div className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-500"> {shop.schedule2}</div>
                </div>
            </div>
        ))}
    </div>
</div>




    );
};

export default ShopList;
