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

      <div className="sm:flex sm:flex-col gap-4 p-3">
       <h4 className="font-bold text-xl">Главный офис</h4>
       <h5 className="font-bold">Адрес:</h5>
       <p className="mb-4">Сахалинская обл., г. Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом №75</p>
       <h5 className="font-bold">Приемная:</h5>
       <p className="mb-4">Тел: +7 (4242) 79-01-54</p>
       <p className="mb-4">Email: <a href="mailto:office@agrosakhalin.ru" className="underline hover:text-blue-500">office@agrosakhalin.ru</a></p>
       <h5 className="font-bold">Режим работы:</h5>
       <p className="mb-4">Пн - Пт с 9:00 до 18:00</p>
      </div>
     <div className="sm:flex sm:flex-col gap-4 p-3">
        <h4 className="font-bold text-2xl">Контакты</h4>
        <p className="mb-4">Генеральный директор - Богославец Наталья Леонтьевна</p>
        <p className="mb-4">Отдел реализации - <a href="mailto:realization@agrosakhalin.ru" className="underline hover:text-blue-500">realization@agrosakhalin.ru</a></p>
        <p className="mb-4">Секретарь - <a href="mailto:office@agrosakhalin.ru" className="underline hover:text-blue-500">office@agrosakhalin.ru</a></p>
        <p className="mb-4">Юридический отдел - <a href="mailto:jurist@agrosakhalin.ru" className="underline hover:text-blue-500">jurist@agrosakhalin.ru</a></p>
        <p className="mb-4">Отдел бухгалтерия - <a href="mailto:accounting@agrosakhalin.ru" className="underline hover:text-blue-500">accounting@agrosakhalin.ru</a></p>
        <p className="mb-4">Отдел информационных технологий - <a href="mailto:admin@agrosakhalin.ru" className="underline hover:text-blue-500">admin@agrosakhalin.ru</a></p>
        <p className="mb-4">Отдел кадров - <a href="mailto:ok@agrosakhalin.ru" className="underline hover:text-blue-500">ok@agrosakhalin.ru</a></p>
        <p className="mb-4">Хотите работать у нас? <a href="https://yuzhno-sakhalinsk.hh.ru/employer/5844507" className="underline text-blue-400 hover:text-blue-500 font-semibold">Нажмите сюда hh.ru</a></p>
     </div>
    </div>
  )
}

export { ContactInfo }
