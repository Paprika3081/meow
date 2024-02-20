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
    <div className="flex h-full w-full flex-col items-center md:w-1/2">
      <h3
        className={`text-2xl text-gray-400 md:text-[40px] ${Yeseva.className}`}
      >
        Добро пожаловать
      </h3>
      <h1 className={`text-4xl md:text-[60px]  ${lobster.className}`}>
        Связаться <br /> с нами
      </h1>

      <ul>
        <h4 className="font-bold">Главный офис</h4>
        <h5 className="font-bold">Адрес:</h5>
        <li>
          Сахалинская обл., г. Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом
          №75
        </li>
        <h5 className="font-bold">Приемная:</h5>
        <li>Тел: +7 (4242) 79-01-54</li>
        <li>Email: office@agrosakhalin.ru</li>
      </ul>
      <ul>
        <h5 className="font-bold">Режим работы:</h5>
        <li>Пн - Пт с 9:00 до 18:00</li>
      </ul>
      <div>
        <h4 className="font-bold">Контакты</h4>

        <p>Генеральный директор - Богославец Наталья Леонтьевна</p>
        <p>
          Отдел реализации -
          <a href="paprikaa666@gmail.com"> paprikaa666@gmail.com</a>
        </p>
        <p>
          Секретарь -<a href="paprikaa666@gmail.com"> office@agrosakhalin.ru</a>
        </p>
        <p>
          Юридический отдел - Стёпин Владимир Евгеньевич
          <a href="paprikaa666@gmail.com"> stepin.v@agrosakhalin.ru</a>
        </p>
        <p>
          Отдел бухгалтерия -
          <a href="paprikaa666@gmail.com"> paprikaa666@gmail.com</a>
        </p>
        <p>
          Отдел информационных технологий -
          <a href="paprikaa666@gmail.com"> admin@agrosakhalin.ru</a>
        </p>
        <p>
          Отдел кадров -<a href="paprikaa666@gmail.com"> ok@agrosakhalin.ru</a>
        </p>
        <p>Хотите работать у нас? Нажмите сюда hh.ru</p>
      </div>
    </div>
  )
}

export { ContactInfo }
