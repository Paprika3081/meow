import React from 'react';
import { Lobster, Yeseva_One } from "next/font/google"
import CustomHead from '@/app/_components/head_head/ui/CustomHead';

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] })

const CustomersPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CustomHead title="АО Совхоз Южно-Сахалинский" showMenu={false} />
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className={`text-4xl font-bold mb-8 text-amber-950 ${lobster.className}`}>Уважаемые клиенты!</h1>
        <h2 className={`text-3xl font-semibold mb-6 text-gray-400 ${Yeseva.className}`}>Добро пожаловать в Совхоз Южно-Сахалинский</h2>
        <ul className="text-left text-gray-700 mb-8 list-disc pl-6">
          <li className="mb-4">
            Мы гордимся предлагать широкий ассортимент качественных товаров, которые удовлетворят потребности даже самых требовательных клиентов.
          </li>
          <li className="mb-4">
            Наша команда профессионалов всегда готова предложить вам выгодные условия сотрудничества, индивидуальный подход и оперативное обслуживание.
          </li>
          <li className="mb-4">
            Мы стремимся к долгосрочным партнерским отношениям и готовы поддержать вас на всех этапах работы.
          </li>
        </ul>
        <p>
          Сотрудничество осуществляется после проведения подписания двухстороннего договора. Чтобы стать нашим контрагентом, вам необходимо:
        </p>
        <p className="text-gray-700 italic mb-6">
          <a href="/Dogovor_prodazhi_produktsii.docx" download className="underline">Скачать шаблон договора</a> - скачать, подписать и поставить печать
        </p>
        <p className="text-gray-700 mb-6">
          Прикрепите документ к письму и отправьте нам на почту - <a href="mailto:office@agrosakhalin.ru" className="underline">office@agrosakhalin.ru</a>
        </p>
        <p className="text-lg font-semibold text-gray-700 mt-4">
          Присоединяйтесь к нашей дружной семье, будем рады сотрудничать с вами!
        </p>
        {/* Используем ссылку с атрибутом mailto и применяем стили */}
        <a href="mailto:office@agrosakhalin.ru" className="block w-full max-w-xs mx-auto rounded-md bg-[#57534E] p-2 text-lg text-white duration-150 hover:bg-[#ECE3D8]  hover:text-black hover:shadow-md hover:transition-all md:px-15 md:py-3">
          Отправить сообщение
        </a>
      </div>
    </div>
  )
}

export default CustomersPage;
