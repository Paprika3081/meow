import Image from "next/image"

const AboutBlock = () => {
  return (
    <section
      className={
        "flex flex-col items-center justify-center gap-x-8 bg-neutral-200 p-10 md:flex-row"
      }
    >
      <Image
        src={"/cowcow.jpg"}
        width={400}
        height={610}
        alt={"cowcow"}
        className={"h-1/2 w-full rounded-3xl md:w-1/2"}
      />
      <div
        className={
          "flex h-1/2 w-full flex-col items-center justify-center gap-8 md:items-start md:justify-start md:gap-20"
        }
      >
        <h2 className={"relative text-3xl text-white md:text-6xl"}>
          С любовью
          <span
            className={
              "absolute left-2 top-4 text-5xl  font-bold text-amber-950 md:top-6 md:text-8xl"
            }
          >
            О нас
          </span>
        </h2>

        <p className={"text-justify"}>
          Совхоз Южно-Сахалинский – великолепное место, где сливаются
          трудолюбие, опыт и любовь к земле в единое творческое стремление. Мы
          представляем собой крупное агропромышленное хозяйство. На фермах
          совхоза Южно-Сахалинский содержат 3480 голов мясного и 2211 молочного
          скота. Для обеспечения жителей необходимыми овощами, акцент
          предприятия сделан на борщовую группу. Грунт наших полей обогащён
          всеми необходимыми витаминами и микроэлементами. Питьевые фруктовые и
          злаковые йогурты, творог, сметану и сыры мы производим с добавлением
          живой закваски. Натуральный вкус и аромат нашей продукции служат
          прямым подтверждением высокого качества.
        </p>
      </div>
    </section>
  )
}

export { AboutBlock }
