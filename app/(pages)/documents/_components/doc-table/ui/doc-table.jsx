
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Подключаем Axios
import { Lobster, Yeseva_One } from "next/font/google"

const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] })

const DocTable = () => {
  // Состояние для хранения данных
  const [data, setData] = useState([]);

  // Эффект для выполнения HTTP-запроса при загрузке компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Выполняем GET-запрос к ресурсу
        const response = await axios.get('https://a4ddb814deba66b5.mokky.dev/documents');

        // Обновляем состояние данными из ответа
        setData(response.data);
      } catch (error) {
        console.error('Ошибка получения данных:', error);
      }
    };

    fetchData(); // Вызываем функцию получения данных
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <div className="mb-8">
        <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold ${Yeseva.className} text-gray-400`}>Декларации соответствия</h3>
      </div>
      <div className="overflow-x-auto">
    <table className="min-w-full text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
        <thead>
            <tr className="bg-[#f8f2e5]">
                <th className="px-2 sm:px-4 py-1 sm:py-2">Продукция</th>
                <th className="px-2 sm:px-4 py-1 sm:py-2">Регистрационный номер</th>
                <th className="px-2 sm:px-4 py-1 sm:py-2">Дата регистрации</th>
                <th className="px-2 sm:px-4 py-1 sm:py-2">Действительна по</th>
                <th className="px-2 sm:px-4 py-1 sm:py-2">PDF</th>
            </tr>
        </thead>
        <tbody>
            {/* Маппим данные из состояния */}
            {data.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-[#fffcf6]' : 'bg-[#f8f2e5]'}>
                    <td className="px-2 sm:px-4 py-1 sm:py-2">{item.products}</td>
                    <td className="px-2 sm:px-4 py-1 sm:py-2">{item.number}</td>
                    <td className="px-2 sm:px-4 py-1 sm:py-2">{item.date}</td>
                    <td className="px-2 sm:px-4 py-1 sm:py-2">{item.valid}</td>
                    <td className="px-2 sm:px-4 py-1 sm:py-2">
                        {/* Вместо ссылки на PDF, можно использовать URL, предоставленный в данных */}
                        <a href={item.link} download className="text-black hover:text-red-700 ">
                            Скачать PDF
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
      {/* Остальная часть компонента остается без изменений */}
      <div className="mt-8">
    <table className="min-w-full">
        <thead>
            <tr className="bg-[#f8f2e5]">
                <th className="px-4 sm:text-base md:text-base lg:text-lg xl:text-lg py-2">Полезные документы</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-[#fffcf6]">
                <td className="px-4 py-2">
                    <a href="/Dogovor_prodazhi_produktsii.docx" download className="text-black sm:text-base md:text-base lg:text-lg xl:text-lg hover:text-red-700 ">
                        Договор продажи продукции собственного производства
                    </a>
                </td>
            </tr>
            <tr className="bg-[#f8f2e5]">
                <td className="px-4 py-2">
                    <a href="/details.pdf" download className="text-black sm:text-base md:text-base lg:text-lg xl:text-lg hover:text-red-700 ">
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
