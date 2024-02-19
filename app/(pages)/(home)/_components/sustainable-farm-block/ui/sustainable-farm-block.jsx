import Image from "next/image"

const SustainableFarmBlock = () => {
  return (
    <section className="flex h-full w-full items-center justify-center bg-stone-600">
      <div className="container m-auto grid h-full grid-cols-2 gap-5 p-5 md:h-[700px] md:w-[900px] md:grid-cols-3">
        <div className="relative rounded-lg">
          <Image
            src={"/cow-grid.png"}
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <div className=" bg-white  relative rounded-lg flex items-center justify-center flex-col">
         <img src="/iconka-list.png" alt="iconka" width={70} />
          <h3 className="font-bold">Органическое земледелие</h3>
          <p className="text-center">
            В сердце нашего хозяйства бьется понимание важности
                  устойчивости и заботы о природе. Мы гордимся тем, что в наших
                  пастбищах животные пасутся на свежем воздухе, получают
                  высококачественный корм
          </p>
        </div>
        <div className="relative rounded-lg">
          <Image
           src="/potato-grid.png"
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <div className="relative rounded-lg flex items-center flex-col justify-center bg-white">
          <img src="/iconka-cow.png" alt="iconka" width={70} />
          <h3 className="font-bold">Животноводство</h3>
          <p className="text-center">
            Создаем уникальную среду для заботы о наших четвероногих
            друзьях и обеспечения высококачественных продуктов.
          </p>
        </div>
        <div className="relative rounded-lg">
          <Image
            src="/about.png"
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <div className="relative rounded-lg bg-white flex items-center flex-col justify-center">
          <img src="/iconka-tractor.png" alt="iconka" width={70} />
          <h3 className="font-bold">Земледелие</h3>
          <p className="text-center">
            Наша команда состоит из преданных профессионалов, способных
            поддерживать баланс между современными технологиями и
            традиционными методами фермерства.
          </p>
        </div>
      </div>
    </section>
  )
}

export { SustainableFarmBlock }
