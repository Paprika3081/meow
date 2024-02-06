import Image from "next/image";

const HomePage = () => {
  return (
    <section
      className={
        "h-[calc(100vh-70px)] flex justify-center items-center flex-col"
      }
    >
      <Image
        src={"/cow.png"}
        width={300}
        height={300}
        alt={"cow"}
        className={"md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"}
      />
      <h4 className={""}>
        Сделано с душой <br />
        Качественно...
      </h4>
      <p>
        Будь то, мясомолочная продукция, овощи, выпечка, полуфабрикаты. Совхоз
        "Южно-Сахалинский" - уделяет особое внимание качеству в производстве
        всеми любимой фирменной продукции.
      </p>
    </section>
  );
};

export default HomePage;
