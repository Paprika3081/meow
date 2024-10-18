import { Lobster, Yeseva_One } from "next/font/google";
import Image from "next/image";

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] });
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] });

const VacancyTitle = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-center max-w-full mt-6">
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
            Мы ценим наших сотрудников, предлагая достойную зарплату, социальные гарантии и комфортные условия труда.
          </li>
          <li>
            Присоединяйтесь к нашей дружной семье и отправляйте резюме на <a href="mailto:hr@agrosakhalin.ru" className="font-semibold underline">hr@agrosakhalin.ru</a>. Мы ждем именно вас!
          </li>
        </ul>
      </div>
      <div className="mx-auto w-max">
        <p className="font-bold">
          Для уточнения информации, звоните по телефону:
          <a href="tel:+79146407524" className="font-bold text-blue-600">
            &nbsp;8-914-640-75-24
          </a>
          &nbsp;|&nbsp;
          <a href="tel:+799335" className="font-bold text-blue-600">
            &nbsp;799-335
          </a>
        </p>
      </div>

      {/* Новый блок с информацией по трудоустройству */}
      <div className="flex justify-center w-full mt-6">
        <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-300 w-[1000px] h-[700px] text-center">
          <h2 className={`text-xl text-amber-950 mb-4 ${Yeseva.className}`}>
            НА УБОРКУ УРОЖАЯ КАПУСТЫ требуются работники!
          </h2>
          <p className="text-base text-gray-700 mb-4">
            Гражданство не имеет значения.
          </p>
          <p className="text-base text-gray-700 mb-4">
            За ваш труд и помощь мы готовы платить <span className="font-bold">3000 рублей в день.</span>
          </p>
          <p className="text-base text-gray-700 mb-4">
            При трудоустройстве иностранным гражданам окажем помощь в оформлении документов.
          </p>
          <p className="text-base text-gray-700 mb-4">
            ОСТАЛЬНЫЕ ПОДРОБНОСТИ ПО ТЕЛ:
          </p>
          <a href="tel:+89146407524" className="font-bold text-blue-600 hover:underline"> 8(914)640-75-24</a>
          <Image
            src={"/3081123.jpg"}
            width={750} // Уменьшен размер изображения
            height={200} // Соотношение сторон 600x400
            alt={"АО Совхоз Южно-Сахалинский"}
            className="object-contain mx-auto mt-4" // Уменьшено расстояние сверху
          />
        </div>
      </div>

    </div>
  );
};

export default VacancyTitle;
