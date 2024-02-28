


const DocTable = () => {
  return (
    <div className="">
        <table className={style.table}>
              <thead>
                <tr className={style.cell2}>Декларации соответсвия</tr>
                <tr>
                  <th className={style.cell3}>Продукция</th>
                  <th className={style.cell3}>Регистрационный номер</th>
                  <th className={style.cell3}>Дата регистрации</th>
                  <th className={style.cell3}>Действительна по</th>
                  <th className={style.cell3}>ССЫЛКА</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr>
                    <td className={style.cell}>{item.title}</td>
                    <td className={style.cell}>{item.registrationNumber}</td>
                    <td className={style.cell}>{item.registerDate}</td>
                    <td className={style.cell}>{item.validUntil}</td>
                    <td className={style.cell}>
                      <a href={item.pdf} download>
                        Скачать PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table>
              <thead>
                <th className={style.cell2}>Полезные документы</th>
              </thead>
              <tbody className={style.cell3cell}>
                <a href="/Dogovor_prodazhi_produktsii.docx" download className={style.cell3}>
                  Договор продажи продукции собственного производства
                </a>
                <a href="/details.pdf" download className={style.cell3}>
                  Реквизиты АО "Совхоз Южно-Сахалинский"
                </a>
              </tbody>
            </table>
    </div>
  )
}

export default DocTable