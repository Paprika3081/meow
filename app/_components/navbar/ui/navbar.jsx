'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import Head from 'next/head'; // Добавлено для мета-тегов
import { NavbarItems } from "./_components/navbar-items";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav
      className={
        "sticky top-0 z-10 flex h-[50px] w-full items-center justify-center bg-[#ece3d8] pl-3 pr-3 shadow-sm md:h-[80px]"
      }
    >
      {/* Добавлены мета-теги для улучшения SEO */}
      <Head>
        <title>Меню сайта - Совхоз Южно-Сахалинский</title>
        <meta name="description" content="Меню сайта компании Совхоз Южно-Сахалинский, представляющее ссылки на различные страницы и разделы сайта." />
        {/* Другие мета-теги, такие как ключевые слова, могут быть добавлены здесь */}
      </Head>
      <Link
        href={"/"}
        className="absolute left-0 hidden h-[60px] w-[150px] md:flex items-center justify-center"
      >
        <Image
          src={"/logo.svg"}
          alt={"cowcow"}
          width={150}
          height={60}
        />
      </Link>
      <ul className={"hidden md:flex md:gap-5"}>
        <NavbarItems pathname={pathname} />
      </ul>
     
         <div className="relative flex justify-center">
          <CiMenuBurger
         onClick={handleShowMenu}
        className={`block md:hidden ${showMenu && "rotate-90"} transition-all duration-200`}
      />
  <div
    className={`absolute top-6 list-none border bg-white text-center shadow-md ${
      showMenu ? "text-xs" : "" // Применяем класс для размера шрифта 12px при открытом меню
    }`}
  >
    {showMenu && <NavbarItems pathname={pathname} />}
  </div>
</div>

      
    </nav>
  );
};

export { Navbar };
