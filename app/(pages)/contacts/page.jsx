"use client"
const ContactsPage = () => {
  return (
    <>
      <div>
        <h3>Добро пожаловать</h3>
        <h1>
          Связаться <br /> с нами
        </h1>
      </div>
      <div>
        <ul>
          <h4>Главный офис</h4>
          <h5>Адрес:</h5>
          <li>
            Сахалинская обл., г. Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы,
            дом №75
          </li>
          <h5>Приемная:</h5>
          <li>Тел: +7 (4242) 79-01-54</li>
          <li>Email: office@agrosakhalin.ru</li>
        </ul>
        <ul>
          <h5>Режим работы:</h5>
          <li>Пн - Пт с 9:00 до 18:00</li>
        </ul>
      </div>
      <div>
        <h4>Контакты</h4>

        <p>Генеральный директор - Богославец Наталья Леонтьевна</p>
        <p>
          Отдел реализации -
          <a href="paprikaa666@gmail.com"> paprikaa666@gmail.com</a>
        </p>
        <p>
          Секретарь -<a href="paprikaa666@gmail.com"> office@agrosakhalin.ru</a>
        </p>
        <p>
          Юридический отдел -<p>Стёпин Владимир Евгеньевич</p>
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
        {/* <div className=''><script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9739bde8ddc434bbf3b3f655cfa3bdd03b71334e5843546b57ae9d9226559a7e&amp;width=100%25&amp;height=348&amp;lang=ru_RU&amp;scroll=true"></script></div> */}
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-start-2">
            <h3>Магазин</h3>
            <p>Березняки</p>
            <p>ул. Зеленая, 18</p>
            <p>пн-пт 09:00-19:00, перерыв 13:00-14:00</p>
            <p>сб 09:00-15:00, без перерыва</p>
            <p>вс выходной</p>
          </div>
          <div className="col-start-3">
            <h3>Магазин</h3>
            <p>Долинск</p>
            <p>ул. Хабаровская, 2</p>
            <p>пн-вс 09:00-18:00, без перерыва</p>
          </div>
          <div className="col-start-4">
            <h3>Магазин</h3>
            <p>Южно-Сахалинск</p>
            <p>ул. Емельянова, 31/1</p>
            <p>пн-вс 09:00-19:00, без перерыва</p>
          </div>
          <div className="col-start-2 row-start-2">
            <h3>Тц "Южный"</h3>
            <p>Южно-Сахалинск</p>
            <p>ул. Есенина, 15а</p>
            <p>пн-сб 10:00-20:00, без перерыва</p>
            <p>вс 10:00-18:00</p>
          </div>
          <div className="col-start-3 row-start-2">
            <h3>Магазин</h3>
            <p>Ново-Александровск</p>
            <p>пер. Железнодорожный, 15а</p>
            <p>пн-вс 09:00-19:00, без перерыва</p>
          </div>
          <div className="col-start-4 row-start-2">
            <h3>Тц "Луч"</h3>
            <p>Южно-Сахалинск</p>
            <p>ул. Комсомольская, 163</p>
            <p>пн-вс 10:00-20:00, без перерыва</p>
          </div>
          <div className="col-start-2 row-start-3">
            <h3>Тц "Успех"</h3>
            <p>Южно-Сахалинск</p>
            <p>ул. Сахалинская, 71</p>
            <p>пн-вс 09:00-19:00, без перерыва</p>
          </div>
          <div className="col-start-3 row-start-3">
            <h3>Тц "Янтарь"</h3>
            <p>Южно-Сахалинск</p>
            <p>ул. Мира, 229</p>
            <p>пн-сб 09:30-19:00, без перерыва</p>
            <p>вс 09:30-18:00, без перерыва</p>
          </div>
          <div className="col-start-4 row-start-3">
            <h3>Тц "Ганеша"</h3>
            <p>Южно-Сахалинск</p>
            <p>ул. Крюкова, 83</p>
            <p>пн-пт 09:00-19:00, </p>
            <p>сб 10:00-18:00, без перерыва</p>
            <p>вс 09:00-19:00, без перерыва</p>
          </div>
          <div className="col-start-2 row-start-4">
            <h3>Магазин</h3>
            <p>Южно-Сахалинск, пл-р. Луговое</p>
            <p>ул. Дружбы 119</p>
            <p>пн-сб 09:00-20:00, без перерыва</p>
            <p>вс 09:00-16:00, без перерыва</p>
          </div>
          <div className="col-start-4 row-start-4">
            <div className="col-start-2 row-start-4">
              <h3>Магазин</h3>
              <p>Корсаков</p>
              <p>ул. ----------</p>
              <p>пн-сб ------------</p>
              <p>вс ---------------</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactsPage
