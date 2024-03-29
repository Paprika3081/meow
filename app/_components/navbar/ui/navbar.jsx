"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuBurger } from "react-icons/ci"

import { NavbarItems } from "./_components/navbar-items"

const Navbar = () => {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <nav
      className={
        "sticky top-0 z-10 flex  h-[50px] w-full items-center justify-center bg-[#ece3d8] pl-3 pr-3 shadow-sm md:h-[80px]"
      }
    >
      <Link
        href={"/"}
        className="absolute left-0 hidden h-[60px] w-[150px] md:block"
      >
        <Image
          fill
          src={"/logo.png"}
          alt={"cowcow"}
          className="object-contain"
        />
      </Link>
      <ul className={"hidden md:flex md:gap-5"}>
        <NavbarItems pathname={pathname} />
      </ul>
     
      <div className={"relative  flex justify-center"}>
        <CiMenuBurger
          onClick={handleShowMenu}
          className={`block md:hidden ${showMenu && "rotate-90"} transition-all duration-200`}
        />
        <div
          className={
            "absolute  top-6 list-none border bg-white  text-center shadow-md"
          }
        >
          {showMenu && <NavbarItems pathname={pathname} />}
        </div>
      
      </div>
      
    </nav>
  )
}

export { Navbar }
