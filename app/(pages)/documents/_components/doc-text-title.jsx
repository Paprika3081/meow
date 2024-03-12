import { Lobster, Yeseva_One } from "next/font/google"

import React from 'react';

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] })

const DocTextTitle = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <div className="text-center">
        <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 ${Yeseva.className}`}>Документы</h3>
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ${lobster.className}`}>О качестве продукции</h1>
      </div>
      <div className="mt-8">
        <h5 className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          Наша компания гордится тем, что предоставляет своим клиентам продукцию высочайшего
          качества, что подтверждено официальными декларациями соответствия. Мы придаем большое
          значение тщательному контролю за производственными процессами и соблюдению всех норм и
          стандартов, чтобы уверенно заявлять о соответствии наших товаров самым строгим
          требованиям.
        </h5>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
          Наши декларации соответствия - это не просто формальный документ, а подлинное
          обязательство перед нашими клиентами по предоставлению продукции, которая
          соответствует высочайшим стандартам безопасности, качества и эффективности. Мы
          тщательно следим за всеми изменениями в законодательстве и технических требованиях,
          чтобы наши декларации всегда были актуальными и достоверными.
        </p>
      </div>
    </div>
  );
};

export default DocTextTitle;
