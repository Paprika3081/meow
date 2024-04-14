import Image from "next/image";
import Head from 'next/head'; // Добавлено для мета-тегов

const Footer = () => {
  return (
    <footer className="bg-stone-600 text-white py-3">
      {/* Добавлены мета-теги для улучшения SEO */}
      <Head>
        <title>Футер сайта - Совхоз Южно-Сахалинский</title>
        <meta name="description" content="Подвал сайта компании Совхоз Южно-Сахалинский, представляющий контактные данные, ссылки на социальные сети и информацию о создателе сайта." />
        <meta name="description" content="Телеграм свхоз Южно-сахалинский" />
        <meta name="description" content="Сайт Совхоз Южно-Сахалинский" />
        <meta name="description" content="Луговое Ул" />
        {/* Другие мета-теги, такие как ключевые слова, могут быть добавлены здесь */}
      </Head>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row justify-start">
          <ul className="flex flex-col gap-2">
            <li><a href="https://www.google.com/maps/search/?api=1&query=г.Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом №75" className="hover:text-gray-400 text-xs" target="_blank" rel="noopener noreferrer">г.Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом №75</a></li>
            <li>
              <p className="flex items-center hover:text-gray-400 text-sm">
                <Image src="/phone-call.svg" alt="Телефон" width={15} height={12} className="inline-block mr-2" />
                <span> : +7 (4242) 79-01-54</span>
              </p>
              <p className="flex items-center hover:text-gray-400 text-sm">
                <Image src="/envelope.svg" alt="Эл.почта" width={15} height={12} className="inline-block mr-2" />
                <span> : office@agrosakhalin.ru</span>
              </p>
            </li>
            <li className="flex items-center gap-3 p-3">
              <a href="https://www.youtube.com/@sovhoz-ys-news" target="_blank" rel="noopener noreferrer">
                <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
              </a>
              <a href="https://t.me/sovkhoz65" target="_blank" rel="noopener noreferrer">
                <Image src="/telegram.svg" alt="Telegram" width={24} height={24} />
              </a>
              <a href="https://github.com/Paprika3081" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <p className="text-xs">© <span className="text-xs">АО Совхоз Южно-Сахалинский</span></p>
          <p className="text-xs">© <span className="text-xs">2024 Сайт создан - <a href="https://github.com/Paprika3081" className="text-blue-300 hover:text-blue-500">"3081"</a></span></p>
        </div>
        
        <div className="flex items-center">
          <Image src="/clever.svg" alt="Логотип" width={120} height={40} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
