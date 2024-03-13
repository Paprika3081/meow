
import Image from "next/image";

const FooterItems = () => {
  return (
 <footer className="bg-gray-800 text-white py-8">
   <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    <div className="flex flex-col md:flex-row">
      <p className="text-lg mr-6">Ваш логотип</p>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-400">Главная</a></li>
        <li><a href="#" className="hover:text-gray-400">О нас</a></li>
        <li><a href="#" className="hover:text-gray-400">Услуги</a></li>
        <li><a href="#" className="hover:text-gray-400">Контакты</a></li>
      </ul>
    </div>
    <div>
      <p>Подписывайтесь на нашу рассылку:</p>
      <div className="flex">
        <input type="email" placeholder="Введите ваш email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none">Подписаться</button>
      </div>
        </div>
   </div>
  </footer>
  );
};

export { FooterItems };
