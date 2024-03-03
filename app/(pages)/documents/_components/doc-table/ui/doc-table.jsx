


const DocTable = () => {
  return (
    <div className="">
        <table className="table-auto">
  <thead>
    <tr className="bg-gray-200">
      <th className="px-4 py-2">Декларации соответствия</th>
    </tr>
    <tr className="bg-gray-100">
      <th className="px-4 py-2">Продукция</th>
      <th className="px-4 py-2">Регистрационный номер</th>
      <th className="px-4 py-2">Дата регистрации</th>
      <th className="px-4 py-2">Действительна по</th>
      <th className="px-4 py-2">Ссылка</th>
    </tr>
    <tr className="bg-gray-100">
       <td className="px-4 py-2">Капуста белокочанная</td>
       <td className="px-4 py-2">ЕАЭС N RU Д-RU.РА09.В.61444/23</td>
       <td className="px-4 py-2">13.11.2023 г</td>
       <td className="px-4 py-2">31.07.24 г</td>
       <td className="px-4 py-2">
       <a href="White_cabbage.pdf" download className="text-blue-500 hover:text-blue-700">
         Скачать PDF
        </a>
      </td>
    </tr>
    <tr className="bg-gray-100">
       <td className="px-4 py-2">Капуста белокочанная</td>
       <td className="px-4 py-2">ЕАЭС N RU Д-RU.РА09.В.61444/23</td>
       <td className="px-4 py-2">13.11.2023 г</td>
       <td className="px-4 py-2">31.07.24 г</td>
       <td className="px-4 py-2">
       <a href="White_cabbage.pdf" download className="text-blue-500 hover:text-blue-700">
         Скачать PDF
        </a>
      </td>
    </tr>
    <tr className="bg-gray-100">
       <td className="px-4 py-2">Капуста белокочанная</td>
       <td className="px-4 py-2">ЕАЭС N RU Д-RU.РА09.В.61444/23</td>
       <td className="px-4 py-2">13.11.2023 г</td>
       <td className="px-4 py-2">31.07.24 г</td>
       <td className="px-4 py-2">
       <a href="White_cabbage.pdf" download className="text-blue-500 hover:text-blue-700">
         Скачать PDF
        </a>
      </td>
    </tr>
    <tr className="bg-gray-100">
       <td className="px-4 py-2">Капуста белокочанная</td>
       <td className="px-4 py-2">ЕАЭС N RU Д-RU.РА09.В.61444/23</td>
       <td className="px-4 py-2">13.11.2023 г</td>
       <td className="px-4 py-2">31.07.24 г</td>
       <td className="px-4 py-2">
       <a href="White_cabbage.pdf" download className="text-blue-500 hover:text-blue-700">
         Скачать PDF
        </a>
      </td>
    </tr>
  </thead>
</table>
<table className="table-auto">
  <thead>
    <tr className="bg-gray-200">
      <th className="px-4 py-2">Полезные документы</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100">
      <td className="px-4 py-2">
        <a href="/Dogovor_prodazhi_produktsii.docx" download className="text-blue-500 hover:text-blue-700">
          Договор продажи продукции собственного производства
        </a>
      </td>
    </tr>
    <tr className="bg-gray-200">
      <td className="px-4 py-2">
        <a href="/details.pdf" download className="text-blue-500 hover:text-blue-700">
          Реквизиты АО "Совхоз Южно-Сахалинский"
        </a>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default DocTable