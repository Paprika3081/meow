import { Lobster, Yeseva_One } from "next/font/google"
import Image from "next/image"

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] })

const AboutBlock = () => {
  return (
    <section
      className={
        "flex  w-full flex-col items-center justify-center gap-10 bg-[#ECE3D8] p-5 md:flex-row lg:h-[85%]"
      }
    >
      <h2
        className={`relative text-3xl ${Yeseva.className} text-white md:hidden md:text-6xl `}
      >
        С любовью
        <span
          className={`absolute left-2 top-4 text-5xl ${lobster.className} font-bold text-amber-950 md:top-6 md:text-8xl `}
        >
          О нас
        </span>
      </h2>
      <div className="flex justify-end md:w-1/2">
        <Image
          src={"/cowcow.jpg"}
          width={400}
          height={610}
          alt={"cow"}
          className={
            "h-[300px] w-[300px] rounded-full md:h-full md:w-full md:rounded-3xl lg:h-1/2 lg:w-1/2"
          }
        />
      </div>

      <div
        className={
          "flex h-1/2 flex-col items-center justify-center gap-8 md:w-1/2 md:items-start md:justify-start md:gap-20 "
        }
      >
        <h2
          className={"relative hidden text-3xl text-white md:block md:text-6xl"}
        >
          С любовью
          <span
            className={
              "absolute left-2 top-4 text-5xl  font-bold text-amber-950 md:top-6 md:text-8xl"
            }
          >
            О нас
          </span>
        </h2>

        <p className={"md:max-w-1/2 text-justify"}>
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
