import Image from "next/image"

const SustainableFarmBlock = () => {
  return (
    <div className="flex w-full items-center justify-center bg-stone-600 md:h-full">
      <div className="container mx-auto grid grid-cols-2 grid-rows-2 gap-3 md:max-h-[700px] md:max-w-[900px] md:grid-cols-3">
        <div className="relative rounded-lg">
          <Image
            title="Корова"
            itemProp="image"
            src={"/cow-grid.png"}
            alt="Изображение с коровой"
            fill
            sizes="300px"
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <article className="relative flex flex-col items-center justify-center rounded-lg bg-white p-2 md:h-[340px]">
          <Image
            title="Органическое земледелие"
            src="/iconka-list.png"
            alt="Изображение с органическим земледелием"
            height={70}
            width={70}
          />
          <h3 className="text-center text-sm font-bold md:text-lg">
            Органическое земледелие
          </h3>
          <p className="hidden text-center text-sm md:block">
            В сердце нашего хозяйства бьется понимание важности устойчивости и
            заботы о природе. Мы гордимся тем, что в наших пастбищах животные
            пасутся на свежем воздухе, получают высококачественный корм
          </p>
        </article>
        <div className="relative rounded-lg">
          <Image
            title="Картофель"
            itemProp="image"
            src="/potato-grid.png"
            alt="Изображение с картофелем"
            fill
            sizes="300px"
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <article className="relative flex flex-col items-center justify-center rounded-lg bg-white p-2">
          <Image
            title="Животноводство"
            itemProp="image"
            src="/iconka-cow.png"
            alt="Изображение с животноводством"
            height={70}
            width={70}
          />
          <h3 className="text-sm font-bold md:text-lg">Животноводство</h3>
          <p className="hidden text-center text-sm md:block">
            Создаем уникальную среду для заботы о наших четвероногих друзьях и
            обеспечения высококачественных продуктов.
          </p>
        </article>
        <div className="relative rounded-lg">
          <Image
            title="Морковь"
            itemProp="image"
            src="/about.png"
            alt="Изображение с морковью"
            fill
            sizes="300px"
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <article className="relative flex flex-col items-center justify-center rounded-lg bg-white p-2">
          <Image
            title="Земледелие"
            itemProp="image"
            src="/iconka-tractor.png"
            alt="Изображение с земледелием"
            height={70}
            width={70}
          />
          <h3 className="text-sm font-bold md:text-lg">Земледелие</h3>
          <p
            className="hidden text-center text-sm md:block
          "
          >
            Наша команда состоит из преданных профессионалов, способных
            поддерживать баланс между современными технологиями и традиционными
            методами фермерства.
          </p>
        </article>
      </div>
    </div>
  )
}

export { SustainableFarmBlock }
