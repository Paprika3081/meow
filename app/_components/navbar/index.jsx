"use client";

import { NavbarItems } from "@/app/_components/navbar/navbar-items";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav
      className={
        "w-full h-[70px] bg-[#ece3d8] flex justify-between items-center pl-3 pr-3 lg:container lg:m-auto"
      }
    >
      logo
      <ul className={"hidden md:flex"}>
        <NavbarItems pathname={pathname} />
      </ul>
      <div className={"relative"}>
        <CiMenuBurger onClick={handleShowMenu} className={"block md:hidden"} />
        {showMenu && <NavbarItems pathname={pathname} />}
      </div>
    </nav>
  );
};

export { Navbar };
