import { Lobster } from "next/font/google"
import { Yeseva_One } from "next/font/google"

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })
const Yeseva = Yeseva_One({weight: ["400"], subsets: ["cyrillic", "latin"]})

const ContactTitle = () => {
  return (
    <div>
        <h3 className={` text-gray-200 text-[40px] ${Yeseva.className}`}>Добро пожаловать</h3>
        <h1 className={`text-[60px] text-amber-1000  ${lobster.className}`}>
          Связаться <br /> с нами
        </h1>
    </div>
    
  )
}

export default ContactTitle