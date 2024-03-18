import { Lobster, Yeseva_One } from "next/font/google"

import React from 'react';

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] })


const DocTable = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <div className="mb-8">
        <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold  text-gray-400 ${Yeseva.className}`}>Декларации соответствия</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#fbefe1]">
              <th className="px-4 py-2">Продукция</th>
              <th className="px-4 py-2">Регистрационный номер</th>
              <th className="px-4 py-2">Дата регистрации</th>
              <th className="px-4 py-2">Действительна по</th>
              <th className="px-4 py-2"><link rel="stylesheet" href="https://drive.google.com/file/d/1ut7lTXF2yVuyTNTSC-vDW9MTNc2swF6Z/view?usp=sharing" /></th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-[#fbefe1]">
              <td className="px-4 py-2">Капуста белокочанная</td>
              <td className="px-4 py-2">ЕАЭС N RU Д-RU.РА09.В.61444/23</td>
              <td className="px-4 py-2">13.11.2023 г</td>
              <td className="px-4 py-2">31.07.24 г</td>
              <td className="px-4 py-2">
                <a href="White_cabbage.pdf" download className="text-black hover:text-red-700">
                  Скачать PDF
                </a>
              </td>
            </tr>
             <tr className="bg-[#fbefe1]">
              <td className="px-4 py-2">Картофель</td>
              <td className="px-4 py-2">ЕАЭС N RU Д-RU.РА09.В.61444/23</td>
              <td className="px-4 py-2">13.11.2023 г</td>
              <td className="px-4 py-2">31.07.24 г</td>
              <td className="px-4 py-2">
                <a href="White_cabbage.pdf" download className="text-black hover:text-red-700">
                  Скачать PDF
                </a>
              </td>
            </tr>
             <tr className=" bg-[#fbefe1]">
              <td className="px-4 py-2">Морковь</td>
              <td className="px-4 py-2">ЕАЭС N RU Д-RU.РА09.В.61444/23</td>
              <td className="px-4 py-2">13.11.2023 г</td>
              <td className="px-4 py-2">31.07.24 г</td>
              <td className="px-4 py-2">
                <a href="White_cabbage.pdf" download className="text-black hover:text-red-700">
                  Скачать PDF
                </a>
              </td>
            </tr>
             <tr className=" bg-[#fbefe1]">
              <td className="px-4 py-2">Свекла</td>
              <td className="px-4 py-2">ЕАЭС N RU Д-RU.РА09.В.61444/23</td>
              <td className="px-4 py-2">13.11.2023 г</td>
              <td className="px-4 py-2">31.07.24 г</td>
              <td className="px-4 py-2">
                <a href="White_cabbage.pdf" download className="text-black hover:text-red-700">
                  Скачать PDF
                </a>
              </td>
            </tr>
            {/* Добавьте остальные строки здесь */}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <table className="min-w-full">
          <thead>
            <tr className=" bg-[#fbefe1]">
              <th className="px-4 py-2">Полезные документы</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-[#fbefe1]">
              <td className="px-4 py-2">
                <a href="/Dogovor_prodazhi_produktsii.docx" download className="text-black hover:text-red-700">
                  Договор продажи продукции собственного производства
                </a>
              </td>
            </tr>
            <tr className=" bg-[#fbefe1]">
              <td className="px-4 py-2">
                <a href="/details.pdf" download className="text-black hover:text-red-700">
                  Реквизиты АО "Совхоз Южно-Сахалинский"
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocTable;
