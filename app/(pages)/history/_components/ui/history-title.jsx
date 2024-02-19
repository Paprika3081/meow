import { Lobster } from "next/font/google"
import { Yeseva_One } from "next/font/google"

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })
const Yeseva = Yeseva_One({weight: ["400"], subsets: ["cyrillic", "latin"]})

const HistoryTitle = () => {
  return (
   <div className="">
          <h3 className={` text-gray-200 text-[40px] ${Yeseva.className}`}>Совхоз "Южно-Сахалинский"</h3>
          <h1 className={`text-[100px] text-amber-1000 flex items-center justify-center ${lobster.className}`}>История</h1>
        </div>
  )
}

export {HistoryTitle}

