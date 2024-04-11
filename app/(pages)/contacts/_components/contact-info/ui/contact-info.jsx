import { Lobster, Yeseva_One } from "next/font/google"

const Yeseva = Yeseva_One({
  weight: ["400"],
  subsets: ["cyrillic", "latin"],
})

const lobster = Lobster({
  weight: ["400"],
  subsets: ["cyrillic", "latin"],
})

const ContactInfo = () => {
  return (
    <div className=" gap-8 flex h-full w-full flex-col items-center md:w-1/2">
      <h3
        className={`text-2xl text-gray-400 md:text-[40px] ${Yeseva.className}`}
      >
        Добро пожаловать
      </h3>
      <h1 className={`text-4xl md:text-[60px]  text-amber-950 ${lobster.className}`}>
        Связаться <br /> с нами
      </h1>

      <ul className="flex flex-col gap-4">
        <h4 className="font-bold">Главный офис</h4>
        <h5 className="font-bold">Адрес:</h5>
        <li>
          Сахалинская обл., г. Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом
          №75
        </li>
        <h5 className="font-bold">Приемная:</h5>
        <li>Тел: +7 (4242) 79-01-54</li>
        <li>Email: office@agrosakhalin.ru</li>
        <h5 className="font-bold">Режим работы:</h5>
        <li>Пн - Пт с 9:00 до 18:00</li>
      </ul>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Контакты</h4>

        <p>Генеральный директор - Богославец Наталья Леонтьевна</p>
        <p>
          Отдел реализации -
          <a href="mailto:realization@agrosakhalin.ru" className="hover:text-blue-500"> realization@agrosakhalin.ru</a>
        </p>
        <p>
          Секретарь -<a href="mailto:office@agrosakhalin.ru" className="hover:text-blue-500"> office@agrosakhalin.ru</a>
        </p>
        <p>
          Юридический отдел - 
          <a href="mailto:jurist@agrosakhalin.ru" className="hover:text-blue-500"> jurist@agrosakhalin.ru</a>
        </p>
        <p>
          Отдел бухгалтерия -
          <a href="mailto:accounting@agrosakhalin.ru" className="hover:text-blue-500"> accounting@agrosakhalin.ru</a>
        </p>
        <p>
          Отдел информационных технологий -
          <a href="mailto:admin@agrosakhalin.ru" className="hover:text-blue-500"> admin@agrosakhalin.ru</a>
        </p>
        <p>
          Отдел кадров -<a href="mailto:ok@agrosakhalin.ru" className="hover:text-blue-500"> ok@agrosakhalin.ru</a>
        </p>
        <p>Хотите работать у нас?<a href="https://yuzhno-sakhalinsk.hh.ru/employer/5844507" className=" text-blue-400 hover:text-blue-500 font-semibold"> Нажмите сюда hh.ru</a></p>

      </div>
    </div>
  )
}

export { ContactInfo }
