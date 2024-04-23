'use client'

import { useWindowScroll } from "@uidotdev/usehooks";
import { FaArrowCircleUp } from "react-icons/fa";

export const ToTopButton = ({className}) => {
  const [{y}, scrollTo] = useWindowScroll()
  if (y < 609) {
    return null
  }
  return <FaArrowCircleUp className={className} onClick={() => scrollTo({ left: 0, top:0,behavior: "smooth"})}/>
}