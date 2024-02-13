"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuBurger } from "react-icons/ci"

import { NavbarItems } from "@/app/_components/navbar/navbar-items"

const Navbar = () => {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <nav
      className={
        "relative flex h-[70px] w-full items-center justify-center bg-[#ece3d8] pl-3 pr-3 lg:container lg:m-auto"
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
      <ul className={"hidden md:flex"}>
        <NavbarItems pathname={pathname} />
      </ul>
      <div className={"relative"}>
        <CiMenuBurger onClick={handleShowMenu} className={"block md:hidden"} />
        {showMenu && <NavbarItems pathname={pathname} />}
      </div>
    </nav>
  )
}

export { Navbar }
