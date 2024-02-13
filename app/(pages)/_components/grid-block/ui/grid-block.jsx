import Image from "next/image"

const GridBlock = () => {
    return(<section className="bg-stone-600">
        <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
          <div className="col-start-2 row-span-2 row-start-2">
            <Image src="/cow-grid.png" width={200} height={250} alt={"cow1"} />
          </div>
          <div className="col-start-3 row-span-2 row-start-2  bg-stone-50">
            <Image src="/iconka-list.png" width={50} height={50} alt="iconka" />
            <h3>Органическое земледелие</h3>
            <p>
              В сердце нашего хозяйства бьется понимание важности устойчивости и
              заботы о природе. Мы гордимся тем, что в наших пастбищах животные
              пасутся на свежем воздухе, получают высококачественный корм{" "}
            </p>
          </div>
          <div className="col-start-4 row-span-2 row-start-2">
            <Image
              src="/potato-grid.png"
              width={600}
              height={700}
              className=" items-center object-cover"
              alt="#"
            />
          </div>
          <div className="col-start-4 row-span-2 row-start-4  bg-stone-50">
            <Image
              src="/iconka-tractor.png"
              width={50}
              height={50}
              alt="iconka"
            />
            <h3>Земледелие</h3>
            <p>
              Наша команда состоит из преданных профессионалов, способных
              поддерживать баланс между современными технологиями и
              традиционными методами фермерства.
            </p>
          </div>
          <div className="col-start-3 row-span-2 row-start-4">
            <Image src="/about.png" width={200} height={250} alt="#" />
          </div>
          <div className="col-start-2 row-span-2 row-start-4  bg-stone-50">
            <Image src="/iconka-cow.png" width={50} height={50} alt="iconka" />
            <h3>Животноводство</h3>
            <p>
              Создаем уникальную среду для заботы о наших четвероногих друзьях и
              обеспечения высококачественных продуктов.
            </p>
          </div>
        </div>
      </section>
      )

}

export { GridBlock }