import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] });

const VacancyTitle = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-center max-w-full mt-6"> {/* Добавлен отступ сверху */}
        <h1 className={`text-4xl font-semibold mb-4 text-amber-950 ${lobster.className}`}>
          Приветствуем вас в Совхозе Южно-Сахалинском!
        </h1>
      </div>
      <div className="max-w-full">
        <ul className="text-gray-700 mb-4 list-disc pl-6">
          <li>
            Мы - надежный игрок на рынке сельскохозяйственной индустрии, служим образцом качества и стабильности уже много лет.
          </li>
          <li>
            Наш коллектив - это сплоченная команда из опытных профессионалов и молодых талантов, где каждый находит свое место для развития.
          </li>
          <li>
            Мы ценим наших сотрудников, предлагая достойную зарплату, социальные гарантии и комфортные условия труда. У нас вы найдете современный спортзал, вкусное питание в столовой и доступ к физиотерапевтическим процедурам.
          </li>
          <li>
            Присоединяйтесь к нашей дружной семье и отправляйте резюме на <a href="mailto:hr@agrosakhalin.ru" className="font-semibold underline">hr@agrosakhalin.ru</a>. Мы ждем именно вас!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VacancyTitle;
