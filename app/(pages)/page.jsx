import Image from 'next/image';

const HomePage = () => {
  return (
    <> <section className={'h-[calc(100vh-70px)] flex justify-center items-center'}>
      <Image
        src={'/cow.png'}
        width={450}
        height={450}
        alt={'cow'}
        className={'md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] p-[10px]'}
      />
      <div className={'flex flex-col  w-[550px]'}>
        <h3 className={'text-left weight-normal text-[35px] text-gray-400 font'}>Сделано с душой</h3>
        <h1 className={'text-left weight-normal text-[60px] text-amber-950'}> Качественно...</h1>
        <p className={'text-left weight-normal text-[19px] text-amber-950 '}>
          Будь то, мясомолочная продукция, овощи, выпечка, полуфабрикаты. Совхоз "Южно-Сахалинский"
          - уделяет особое внимание качеству в производстве всеми любимой фирменной продукции.
        </p>
      </div>
    </section>
    <section className={'flex justify-center items-center bg-neutral-200 gap-x-8'}>
              <Image src={'/cowcow.jpg'} 
              width={400}
              height={610}
              alt={'cowcow'} 
              className={'rounded-3xl'}/>
            <div className={'flex justify-center  flex-col w-[550px] '} >
              <h2 className={'text-[40px] text-white'}>С любовью</h2>
              <h2 className={'text-[100px]  text-amber-950 '}>О нас</h2>
              <p className={'text-justify'}>
                Совхоз Южно-Сахалинский – великолепное место, где сливаются
                трудолюбие, опыт и любовь к земле в единое творческое
                стремление. Мы представляем собой крупное агропромышленное
                хозяйство. На фермах совхоза Южно-Сахалинский содержат 3480
                голов мясного и 2211 молочного скота. Для обеспечения жителей
                необходимыми овощами, акцент предприятия сделан на борщовую
                группу. Грунт наших полей обогащён всеми необходимыми витаминами
                и микроэлементами. Питьевые фруктовые и злаковые йогурты,
                творог, сметану и сыры мы производим с добавлением живой
                закваски. Натуральный вкус и аромат нашей продукции служат прямым подтверждением высокого качества.
              </p>
            </div> 
    </section>
    <section>
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <div className="row-span-2 col-start-2 row-start-2">2</div>
      <div className="row-span-2 col-start-3 row-start-2">3</div>
      <div className="row-span-2 col-start-4 row-start-2">4</div>
      <div className="row-span-2 col-start-4 row-start-4">5</div>
      <div className="row-span-2 col-start-3 row-start-4">6</div>
      <div className="row-span-2 col-start-2 row-start-4">7</div>
</div>
    </section>
    </>
   
  );
};

export default HomePage;
