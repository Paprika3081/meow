import Image from "next/image";
import Head from 'next/head'; // Добавлено для мета-тегов

const SustainableFarmBlock = () => {
  return (
    <div className="relative bg-stone-600 py-8 md:py-12">
      {/* Добавлено мета-теги для улучшения SEO */}
      <Head>
        <title>Название вашей страницы</title>
        <meta name="description" content="Описание вашей страницы здесь" />
        {/* Другие мета-теги, такие как ключевые слова, могут быть добавлены здесь */}
      </Head>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/background-lavr.png")` }}
      ></div>
      <div className="container mx-auto grid grid-cols-2 grid-rows-2 gap-3 md:max-h-[520px] md:max-w-[900px] md:grid-cols-3">
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-full">
            <Image
              src="/flovers.png"
              alt="Изображение с коровой"
              quality={100}
              width={500}
              height={500}
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
        <article className="relative flex flex-col items-center text-amber-950 rounded-lg bg-white p-2">
          <Image
            src="/iconka-list.png"
            alt="Изображение с органическим земледелием"
            quality={100}
            width={60}
            height={60}
          />
          <h3 className="text-center text-sm font-bold md:text-lg">
            Органическое земледелие
          </h3>
          <p className="hidden text-center text-sm md:block">
            В сердце нашего хозяйства бьется понимание важности устойчивости и
            заботы о природе. В наших пастбищах животные
            пасутся на свежем воздухе, получают высококачественный корм
          </p>
        </article>
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-full">
            <Image
              src="/potato-grid.png"
              alt="Изображение с картофелем"
              quality={100}
              width={500}
              height={500}
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
        <article className="relative flex flex-col items-center justify-center text-amber-950 rounded-lg bg-white p-2">
          <Image
            src="/iconka-cow.png"
            alt="Изображение с животноводством"
            quality={100}
            width={70}
            height={70}
          />
          <h3 className="text-sm font-bold md:text-lg">Животноводство</h3>
          <p className="hidden text-center text-sm md:block">
            Создаем уникальную среду для заботы о наших четвероногих друзьях и
            обеспечения высококачественных продуктов.
          </p>
        </article>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/cow-grid.png"
            alt="Изображение с морковью"
            quality={100}
            width={300}
            height={300}
            className="object-cover rounded-xl w-full h-full"
          />
        </div>
        <article className="relative flex flex-col items-center justify-center text-amber-950 rounded-lg bg-white p-2">
          <Image
            src="/iconka-tractor.png"
            alt="Изображение с земледелием"
            quality={100}
            width={70}
            height={70}
          />
          <h3 className="text-sm font-bold md:text-lg">Земледелие</h3>
          <p className="hidden text-center text-sm md:block">
            Наша команда состоит из преданных профессионалов, способных
            поддерживать баланс между современными технологиями и традиционными
            методами фермерства.
          </p>
        </article>
      </div>
    </div>
  );
};

export { SustainableFarmBlock };
