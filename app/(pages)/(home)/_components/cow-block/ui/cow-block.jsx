import { Lobster, Yeseva_One } from "next/font/google"
import Image from "next/image"

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })
const Yeseva = Yeseva_One({ weight: ["400"], subsets: ["cyrillic", "latin"] })

const CowBlock = () => {
  return (
    <section
      className={
        "flex  h-full flex-col items-center justify-center md:flex-row md:justify-start"
      }
    >
      <Image
        src={"/cow.png"}
        width={1200}
        height={1200}
        alt={"cow"}
        className={"object-contain md:h-1/2 md:w-1/2"}
      />
      <div
        className={
          "flex w-full flex-col items-center justify-center gap-3 md:w-1/2 md:gap-16"
        }
      >
        <h3
          className={`weight-normal relative flex w-full flex-col text-center text-3xl text-gray-400 ${Yeseva.className}  md:text-left md:text-[35px]`}
        >
          Сделано с душой
          <span
            className={`weight-normal text-center text-4xl  text-amber-950 ${lobster.className} md:absolute md:left-6 md:top-7 md:text-left md:text-[60px]`}
          >
            Качественно
          </span>
        </h3>

        <p className=" weight-normal truncate text-pretty text-center text-sm text-amber-950 md:text-left md:text-[19px]">
            Будь то, мясомолочная продукция, овощи, выпечка, полуфабрикаты. Совхоз
            "Южно-Сахалинский" - уделяет особое внимание качеству в производстве
            всеми любимой фирменной продукции.
        </p>
      </div>
    </section>
  )
}

export { CowBlock }
