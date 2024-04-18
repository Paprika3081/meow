import { Lobster, Yeseva_One } from "next/font/google"
import Image from "next/image"
import Head from 'next/head'; // Добавлено для мета-тегов

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] })

const CowBlock = () => {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row md:justify-start">
      {/* Добавлено мета-теги для улучшения SEO */}
      <Head>
        <title>Ваш заголовок страницы</title>
        <meta name="description" content="Ваше описание страницы здесь" />
        {/* Другие мета-теги, такие как ключевые слова, могут быть добавлены здесь */}
      </Head>
      <Image
        src={"/cow.png"}
        width={1200}
        height={1200}
        alt={"cow"}
        className="object-contain md:w-1/2"
      />
      <div className="flex flex-col items-center justify-center gap-3 w-full md:w-1/2 md:gap-16">
        <h1 className={`flex flex-col weight-normal text-center text-3xl text-gray-400 md:text-left md:text-4xl  ${Yeseva.className}`}>
          Сделано с душой
          <span className={`weight-normal block text-center text-4xl text-amber-950 md:inline-block md:text-[60px] ${lobster.className}`}>
            Качественно
          </span>
        </h1>
        <p className="weight-normal indent-8 text-sm text-amber-950 md:text-left md:text-[19px] text-center sm:text-left mb-5 sm:mb-0">
          Будь то, мясомолочная продукция, овощи, выпечка, полуфабрикаты. Совхоз
         "Южно-Сахалинский" - уделяет особое внимание качеству в производстве
          всеми любимой фирменной продукции.
        </p>

      </div>
    </section>
  );
};

export { CowBlock }
