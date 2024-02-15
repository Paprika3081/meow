import Image from "next/image"

const CowBlock = ({font}) => {
  return (
    <section
      className={
        "flex h-screen flex-col items-center justify-center md:flex-row"
      }
    >
      <Image
        src={"/cow.png"}
        width={450}
        height={450}
        alt={"cow"}
        className={
          "p-[10px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]"
        }
      />
      <div className={"flex w-[550px] flex-col"}>
        <h3
          className={"weight-normal font text-left text-[35px] text-gray-400"}
        >
          Сделано с душой
        </h3>
        <h1 className={`weight-normal text-left text-[60px] text-amber-950 ${font.className}`}>
          Качественно...
        </h1>
        <p className={"weight-normal text-left text-[19px] text-amber-950 "}>
          Будь то, мясомолочная продукция, овощи, выпечка, полуфабрикаты. Совхоз
          "Южно-Сахалинский" - уделяет особое внимание качеству в производстве
          всеми любимой фирменной продукции.
        </p>
      </div>
    </section>
  )
}

export { CowBlock }
