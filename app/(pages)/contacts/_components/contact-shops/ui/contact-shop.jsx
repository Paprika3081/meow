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
            <div className="grid grid-cols-3 gap-6">
                {shops.map(shop => (
                    <div key={shop.id} className="bg-white rounded-lg shadow-md p-6">
                        <div className="text-lg font-bold mb-2">{shop.title}</div>
                        <div className="text-sm text-gray-500 mb-2">Город: {shop.city}</div>
                        <div className="text-sm text-gray-500 mb-2">Улица: {shop.street}</div>
                        <div className="text-sm text-gray-500 mb-2"> {shop.schedule1}</div>
                        <div className="text-sm text-gray-500"> {shop.schedule2}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopList;
