import Image from 'next/image'; // Импортируем компонент Image из библиотеки Next.js

const Advertisement = () => {
    return (
      <div className="advertisement flex gap-3 items-center justify-center text-center mt-4"> {/* Добавляем верхний отступ */}
        <a href="/yarmarka-1.png" target="_blank" rel="noopener noreferrer"> {/* Обернем изображение в ссылку */}
          <Image 
          src="/yarmarka-2.png" 
          alt="Advertisement" 
          width={300} 
          height={60} /> {/* Используем компонент Image */}
        </a>
        <div>
          <p className="mb-2 font-bold"><strong>Сахалинцев</strong> и <strong>курильчан</strong> приглашают на <strong><a href="https://clck.ru/3AcNNo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Всероссийскую ярмарку трудоустройства !</a></strong></p>
          <a href="/press_relize.pdf" className="read-more-button inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" target="_blank">
            <span className="font-bold">Читать далее</span>
          </a>
        </div>
      </div>
    );
};

export { Advertisement };
