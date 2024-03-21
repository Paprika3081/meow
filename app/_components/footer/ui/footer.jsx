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
                <span> : +7 (4242) 79-01-54</span>
              </p>
              <p className="flex items-center hover:text-gray-400 text-sm">
                <Image src="/icon-email.png" alt="Эл.почта" width={15} height={12} className="inline-block mr-2" />
                <span> : office@agrosakhalin.ru</span>
              </p>
            </li>
           <li className="flex gap-3">
              <a href="https://www.youtube.com/@sovhoz-ys-news" target="_blank" rel="noopener noreferrer">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                     <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l7 4.5-7 4.5z"></path>
                 </svg>
              </a>
              <a href="https://t.me/sovkhoz65" target="_blank" rel="noopener noreferrer">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                   <path fill="currentColor" d="M21.96 2L2.04 11.23l5.53 2.61 3.21 7.54c.3.66.8.62 1.06.11l3.72-7.38L21.96 2zM8.77 16.7l-.17-.15c-.58-.5-.9-.76-1.02-1.32-.16-.8.2-1.25 1.3-2.05l1.16-.82c1.22-.86 1.58-1.46 1.58-2.05 0-.38-.32-.58-.66-.58-.44 0-.86.34-1 .54l-.01-.02c-.1.14-.24.29-.42.44-.48.42-1.02.85-1.5 1.27-.5.42-.9.76-1.22 1.06-.66.63-1.06 1.02-1.28 1.53-.2.43-.24.62-.16.83.12.26.47.3.85.12.21-.1.5-.34 1.14-.94l.82.6c-1.3 1.36-1.9 2.1-2.44 2.72-.58.72-.78 1.1-.9 1.46-.14.4-.16.7.04 1.14.15.34.36.46.66.46.34 0 .9-.16 1.38-.5.6-.4 1.18-.94 2.4-2.52l.64.52c-.88 1.2-1.5 1.78-2.1 2.44z"></path>
                 </svg>
              </a>
              <a href="https://github.com/Paprika3081" target="_blank" rel="noopener noreferrer">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                     <path fill="currentColor" d="M12 .297C5.373.297 0 5.67 0 12.485c0 5.37 3.438 9.924 8.205 11.54.6.112.82-.258.82-.577 0-.284-.008-1.037-.013-2.034-3.338.724-4.042-1.49-4.042-1.49-.546-1.386-1.334-1.756-1.334-1.756-1.088-.744.083-.73.083-.73 1.205.086 1.838 1.237 1.838 1.237 1.07 1.83 2.804 1.303 3.49.998.108-.776.42-1.303.762-1.603-2.664-.303-5.473-1.332-5.473-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.526.116-3.176 0 0 1.007-.322 3.3 1.23.958-.266 1.98-.399 3-.405 1.02.006 2.042.14 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.656 1.65.244 2.872.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.816 5.624-5.486 5.917.43.37.814 1.097.814 2.217 0 1.604-.014 2.895-.014 3.287 0 .318.216.693.825.573C20.566 22.403 24 17.84 24 12.485 24 5.67 18.627.297 12 .297z"></path>
                 </svg>
              </a>
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
