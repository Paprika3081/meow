import Image from 'next/image'; // Импортируем компонент Image из библиотеки Next.js

const Advertisement = () => {
    return (
        <div className="advertisement bg-white shadow-lg p-6 rounded-xl border border-gray-300 w-full max-w-[1600px] mx-auto mt-4 flex items-center max-h-[400px] overflow-hidden"> {/* Общая рамка для изображения и текста */}
            <Image 
                src="/uborka30.jpg" 
                alt="Advertisement" 
                width={300} 
                height={200} // Укажите нужную высоту
                className="rounded-lg mr-4" // Добавляем отступ справа
            />
            <div className="text-center flex-1"> {/* flex-1 для растягивания текста на оставшуюся ширину */}
                <p className="mb-2 font-bold text-xl">
                    НА УБОРКУ УРОЖАЯ КАПУСТЫ требуются работники!
                </p>
                <p className="mb-2 text-lg">
                    <strong>
                        <a 
                            href="https://agrosakhalin.ru/vacancy" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Подробная информация здесь
                        </a>
                    </strong>
                </p>
                <p className="mb-2 text-lg">
                    ОСТАЛЬНЫЕ ПОДРОБНОСТИ ПО ТЕЛ:
                </p>
                <p className="mb-2 font-bold text-lg">
                    <a href="tel:+89146407524" className="text-blue-500 hover:text-blue-700 underline">8(914)640-75-24</a>
                </p>
                
            </div>
        </div>
    );
};

export { Advertisement };
