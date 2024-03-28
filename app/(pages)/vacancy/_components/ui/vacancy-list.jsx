import React, { useState, useEffect } from 'react';
import VacancyCard from './vacancy-card'; // Предположим, что у вас есть компонент VacancyCard для отображения карточки вакансии
import { Yeseva_One } from "next/font/google"

const Yeseva = Yeseva_One({weight: ["400"], subsets: ["cyrillic", "latin"]})


function VacancyList() {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://a4ddb814deba66b5.mokky.dev/vacancy');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVacancies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className={`text-3xl font-semibold mb-4  text-gray-400 ${Yeseva.className}`}>Список вакансий</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vacancies.map(vacancy => (
          <VacancyCard
            key={vacancy.id}
            name={vacancy.name}
            salary={vacancy.salary}
            experience={vacancy.experience}
            busyness={vacancy.busyness}
            description={vacancy.description}
          />
        ))}
      </div>
    </div>
  );
}

export default VacancyList;
