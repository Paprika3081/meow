"use client";
import { Lobster, Yeseva_One } from "next/font/google";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] });
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] });

const images = [
  "/cowcow-new2.jpg",
  "/farm1.jpg",
  "/farm2.jpg",
  "/farm3.jpg",
];

const AboutBlock = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Картинки будут меняться каждые 3 секунды
    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, []);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 bg-[#ECE3D8] py-10 md:flex-row lg:min-h-[80vh]">
      <Head>
        <title>О нас - Ваш заголовок страницы</title>
        <meta name="description" content="о совхозе южно-сахалинском" />
      </Head>
      <h2
        className={`relative ${Yeseva.className} text-5xl text-white md:hidden md:text-6xl lg:text-7xl`}
      >
        С гордостью
        <span
          className={`absolute left-4 top-2 text-6xl font-bold text-amber-950 md:top-4 md:left-6 md:text-7xl lg:top-6 lg:left-8 lg:text-8xl ${lobster.className}`}
        >
          О нас
        </span>
      </h2>
      <div className="flex justify-center items-center md:justify-end md:w-1/2">
        <div className="relative w-full h-[400px] md:w-3/4 lg:h-[500px] rounded-full overflow-hidden">
          <Image
            src={images[currentImage]} // текущая картинка
            width={800}
            height={800}
            alt="farm images"
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 md:w-1/2 md:items-center md:justify-start md:gap-20">
        <h2
          className={`relative ${Yeseva.className} hidden text-5xl text-white md:block md:text-6xl lg:text-7xl`}
        >
          С гордостью
          <span
            className={`absolute left-4 top-2 text-6xl font-bold text-amber-950 md:top-4 md:left-4 md:text-7xl lg:top-10 lg:left-8 lg:text-8xl ${lobster.className}`}
          >
            О нас
          </span>
        </h2>
        <div className="flex flex-col gap-6"> {/* Разделяем параграфы с помощью gap */}
          <p className="md:max-w-2xl indent-8 text-justify text-lg lg:text-xl leading-relaxed text-amber-950">
            "Совхоз Южно-Сахалинский" – великолепное место, где сливаются трудолюбие, опыт и любовь к земле в единое творческое стремление.
          </p>
          <p className="md:max-w-2xl indent-8 text-justify text-lg lg:text-xl leading-relaxed text-amber-950">
            Мы представляем собой крупное агропромышленное хозяйство. На фермах совхоза Южно-Сахалинский содержат <strong>3480</strong> голов мясного и <strong>2211</strong> молочного скота.
          </p>
          <p className="md:max-w-2xl indent-8 text-justify text-lg lg:text-xl leading-relaxed text-amber-950">
            Для обеспечения жителей необходимыми овощами, акцент предприятия сделан на борщовую группу, а грунт наших полей обогащён всеми необходимыми витаминами и микроэлементами.
          </p>
          <p className="md:max-w-2xl indent-8 text-justify text-lg lg:text-xl leading-relaxed text-amber-950">
            Питьевые фруктовые и злаковые йогурты, творог, сметану и сыры мы производим с добавлением живой закваски. Натуральный вкус и аромат нашей продукции служат прямым подтверждением высокого качества.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AboutBlock };
