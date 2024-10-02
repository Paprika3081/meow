"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import Head from 'next/head';
import { NavbarItems } from "./_components/navbar-items";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-[#ece3d8] shadow-sm px-4 py-2 md:py-4 md:px-6 h-20">
      <Head>
        <title>Меню сайта - Совхоз Южно-Сахалинский</title>
        <meta name="description" content="Меню сайта компании Совхоз Южно-Сахалинский, представляющее ссылки на различные страницы и разделы сайта." />
      </Head>

      {/* Логотип и соцсети для маленьких экранов */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center m-0">
          <Image src="/logo-new.png" alt="Логотип" width={150} height={60} />
        </Link>

        {/* Социальные сети только для маленьких экранов */}
        <div className="flex md:hidden gap-3 ml-4 items-center justify-center">
          <Link href="https://rutube.ru/channel/43096186" target="_blank" aria-label="Rutube" className="hover:opacity-80">
            <Image src="/rutube.svg" alt="Rutube" width={60} height={60} /> {/* Увеличено для маленьких экранов */}
          </Link>
          <Link href="https://t.me/sovkhoz65" target="_blank" aria-label="Telegram" className="hover:opacity-80">
            <Image src="/telegramm.svg" alt="Telegram" width={30} height={30} /> {/* Telegram чуть меньше Rutube */}
          </Link>
        </div>
      </div>

      {/* Меню для больших экранов */}
      <div className="hidden md:flex flex-grow justify-center items-center">
        <ul className="flex gap-6">
          <NavbarItems pathname={pathname} />
        </ul>
      </div>

      {/* Бургер-меню для мобильных устройств */}
      <div className="flex items-center md:hidden relative">
        <CiMenuBurger
          onClick={handleShowMenu}
          className={`text-2xl transition-transform duration-300 ${showMenu ? 'rotate-90' : ''}`}
        />
        {showMenu && (
          <div className="absolute top-full right-0 mt-2 bg-[#ece3d8] text-center shadow-lg py-2 px-4 rounded-md transition-transform duration-300 transform translate-y-0 opacity-100">
            <NavbarItems pathname={pathname} />
          </div>
        )}
      </div>

      {/* Социальные сети для больших экранов */}
      <div className="hidden md:flex gap-6 items-center">
        <Link href="https://rutube.ru/channel/43096186" target="_blank" aria-label="Rutube" className="hover:opacity-80">
          <Image src="/rutube.svg" alt="Rutube" width={60} height={60} />
        </Link>
        <Link href="https://t.me/sovkhoz65" target="_blank" aria-label="Telegram" className="hover:opacity-80">
          <Image src="/telegramm.svg" alt="Telegram" width={40} height={40} />
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
