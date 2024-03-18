" use client "


const CustomersPage = () => {
  return (
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-md  text-center">
        <h1 className="text-2xl font-semibold mb-4">Уважаемый читатель!</h1>
        <h2 className="text-3xl font-semibold mb-4">Добро пожаловать в Совхоз Южно-Сахалинcкий</h2>
        <div className="flex flex-col indent-5">
         <p className="text-justify text-gray-700">Мы гордимся предлагать широкий ассортимент качественных товаров, которые удовлетворят потребности даже самых требовательных клиентов.</p>
         <p className="text-justify text-gray-700">Наша команда профессионалов всегда готова предложить вам выгодные условия сотрудничества, индивидуальный подход и оперативное обслуживание.</p>
         <p className="text-justify text-gray-700">Мы стремимся к долгосрочным партнерским отношениям и готовы поддержать вас на всех этапах работы.</p>
         <p className="text-gray-700 mb-4">
           Сотрудничество осуществляется после проведения подписания двухстороннего договора.
            Чтобы стать нашим контрагентом, вам необходимо: 
         </p>
        </div>
         
        <p className="text-gray-700 mb-4">
          Шаблон договора - скачать, подписать и поставить печать
        </p>
        <p className="text-gray-700 mb-4">
          Прикрепите документ к письму и отправить нам на почту - 
          <a href="mailto:office@agrosakhalin.ru"> office@agrosakhalin.ru</a>
        </p>
        <p>(Скачать шаблон договора)</p>

        <p className="text-gray-700 mb-4">
          Присоединяйтесь к нашей дружной семье, будем рады сотрудничать с вами!
        </p>
      </div>
    </div>
  )
}

export default CustomersPage