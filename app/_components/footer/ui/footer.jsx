import Image from "next/image";
import Head from 'next/head';

const Footer = () => {
  return (
    <footer className="bg-stone-600 text-white py-4" style={{ borderTop: '5px solid #b8afa3' }}>
      <Head>
        <title>Футер - Совхоз Южно-Сахалинский</title>
        <meta name="description" content="Подвал сайта компании Совхоз Южно-Сахалинский, представляющий контактные данные, ссылки на социальные сети и информацию о создателе сайта." />
      </Head>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 md:mb-0">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=г.Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом №75" className="hover:text-gray-400 text-sm" target="_blank" rel="noopener noreferrer">
                  г.Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом №75
                </a>
              </li>
              <li>
                <p className="flex items-center text-sm">
                  <Image src="/phone-call.svg" alt="Телефон" width={15} height={12} className="inline-block mr-2" />
                  <span>+7 (4242) 79-01-54</span>
                </p>
                <p className="flex items-center text-sm">
                  <Image src="/envelope.svg" alt="Эл.почта" width={15} height={12} className="inline-block mr-2" />
                  <span>office@agrosakhalin.ru</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="text-sm mb-1">© <span className="font-light">АО «Совхоз Южно-Сахалинский»</span></p>
            <p className="text-sm">
              © <span className="font-light">2024 Сайт создан - <a href="https://github.com/Paprika3081" className="text-blue-300 hover:text-blue-500">"3081"</a></span>
            </p>
          </div>

          <div className="flex items-center">
            <Image src="/clever.svg" alt="Логотип" width={120} height={40} />
          </div>
        </div>

        {/* Социальные сети */}
        <div className="flex justify-center mt-4">
          <p className="text-sm">
            <a href="https://rutube.ru/channel/43096186" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" style={{ color: 'red' }}>Rutube</a>
            {" | "}
            <a href="https://t.me/sovkhoz65" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" style={{ color: '#0088cc' }}>Telegram</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
