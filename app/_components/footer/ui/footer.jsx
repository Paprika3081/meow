import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-stone-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row justify-start"> {/* Добавлен класс justify-start */}
          <ul className="flex flex-col gap-2">
            <li><a href="https://www.google.com/maps/search/?api=1&query=г.Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом №75" className="hover:text-gray-400 text-xs" target="_blank" rel="noopener noreferrer">г.Южно-Сахалинск, пл /р-н Луговое, ул. Дружбы, дом №75</a></li>
            <li>
              <p className="flex items-center hover:text-gray-400 text-sm">
                <Image src="/icon-phone.png" alt="Телефон" width={15} height={12} className="inline-block mr-2" />
                <span>Телефон: +7 (4242) 79-01-54</span>
              </p>
            </li>
            <li>
              <p className="flex items-center hover:text-gray-400 text-sm">
                <Image src="/icon-email.png" alt="Email" width={15} height={12} className="inline-block mr-2" />
                <span>Email: office@agrosakhalin.ru</span>
              </p>
            </li>
            <li className="flex gap-3">
              <a href="https://www.youtube.com/@sovhoz-ys-news" target="_blank" rel="noopener noreferrer"><Image src="/youtube.png" alt="YouTube" width={24} height={24} /></a>
              <a href="https://t.me/sovkhoz65" target="_blank" rel="noopener noreferrer"><Image src="/telegram.png" alt="Telegram" width={24} height={24} /></a>
              <a href="https://github.com/Paprika3081" target="_blank" rel="noopener noreferrer"><Image src="/github.png" alt="GitHub" width={24} height={24} /></a>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-2 cursor-pointer">
          <p className="text-xs">© <span className="text-xs">АО Совхоз Южно-Сахалинский</span></p>
          <p className="text-xs">© <span className="text-xs">2024 Сайт создан - <a href="https://github.com/Paprika3081" className="text-blue-300 hover:text-blue-500">"3081"</a></span></p>
        </div>
        
        <div className="flex items-center">
          <Image src="/clever.png" alt="Логотип" width={120} height={40} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
