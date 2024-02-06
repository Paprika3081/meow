import Image from 'next/image';

const HomePage = () => {
  return (
    <section className={'h-[calc(100vh-70px)] flex justify-center items-center'}>
      <Image
        src={'/cow.png'}
        width={300}
        height={400}
        alt={'cow'}
        className={'md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]'}
      />
      <div className={'flex flex-col '}>
        <h3 className={'text-left weight-normal text-5xl text-gray-400 font'}>Сделано с душой</h3>
        <h1 className={'text-left weight-normal text-6xl text-amber-950'}> Качественно...</h1>
        <p className={'text-left weight-normal text-lg text-amber-950 '}>
          Будь то, мясомолочная продукция, овощи, выпечка, полуфабрикаты. Совхоз "Южно-Сахалинский"
          - уделяет особое внимание качеству в производстве всеми любимой фирменной продукции.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
