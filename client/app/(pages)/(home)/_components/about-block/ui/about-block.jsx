import { Lobster, Yeseva_One } from "next/font/google";
import Image from "next/image";
import Head from 'next/head'; // Добавлено для мета-тегов

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] });
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] });

const AboutBlock = () => {
  return (
    <section className={"flex w-full flex-col items-center justify-center gap-10 bg-[#ECE3D8] p-5 md:flex-row lg:h-[85%]"}>
      {/* Добавлено мета-теги для улучшения SEO */}
      <Head>
        <title>О нас - Ваш заголовок страницы</title>
        <meta name="description" content="Описание страницы о вашем бизнесе здесь" />
        {/* Другие мета-теги, такие как ключевые слова, могут быть добавлены здесь */}
      </Head>
      <h2 className={`relative ${Yeseva.className} text-3xl text-white md:hidden md:text-5xl lg:text-6xl`}>
        С любовью
        <span className={`absolute left-2 top-4 text-4xl font-bold text-amber-950 md:top-6 md:text-6xl lg:text-7xl ${lobster.className}`}>
          О нас
        </span>
      </h2>
      <div className="flex justify-center items-center md:justify-end md:w-1/2">
        <div className="relative w-full h-80 md:w-3/4 lg:h-96 md:h-full rounded-full overflow-hidden">
          <Image
            src={"/cowcow-new2.jpg"}
            width={800}
            height={800}
            alt={"cow"}
            className={`w-full h-full object-cover`}
          />
        </div>
      </div>
      <div className={"flex flex-col justify-center gap-8 md:w-1/2 md:items-center md:justify-start md:gap-20"}>
        <h2 className={`relative ${Yeseva.className} hidden text-3xl text-white md:block md:text-5xl lg:text-6xl`}>
          С любовью
          <span className={`absolute ${lobster.className} left-2 top-4 text-4xl font-bold text-amber-950 md:top-6 md:text-6xl lg:text-7xl`}>
            О нас
          </span>
        </h2>
        <p className={"md:max-w-lg indent-8 text-justify"}>
          Совхоз Южно-Сахалинский – великолепное место, где сливаются трудолюбие, опыт и любовь к земле в единое творческое стремление. Мы представляем собой крупное агропромышленное хозяйство. На фермах совхоза Южно-Сахалинский содержат 3480 голов мясного и 2211 молочного скота. Для обеспечения жителей необходимыми овощами, акцент предприятия сделан на борщовую группу. Грунт наших полей обогащён всеми необходимыми витаминами и микроэлементами. Питьевые фруктовые и злаковые йогурты, творог, сметану и сыры мы производим с добавлением живой закваски. Натуральный вкус и аромат нашей продукции служат прямым подтверждением высокого качества.
        </p>
      </div>
    </section>
  );
};

export { AboutBlock };
