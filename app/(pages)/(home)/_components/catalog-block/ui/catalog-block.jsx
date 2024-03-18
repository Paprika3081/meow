"use client"

import { Lobster } from "next/font/google"

const lobster = Lobster({ weight: ["400"], subsets: ["cyrillic", "latin"] })

const CatalogBlock = () => {
  return (
    <section
      className={
        "flex h-[80vh] flex-col items-center justify-center gap-8 text-center"
      }
    >
      <p className={"w-full text-sm md:max-w-[1000px] md:text-2xl"}>
        ❝ Совхоз Южно-Сахалинский – это не только место производства, но и
        настоящая семья, где каждый член команды вносит свой вклад в общее
        благополучие. Мы приглашаем вас окунуться в атмосферу гармонии с
        природой, где труд и любовь создают уникальные продукты, способные
        радовать вас своим вкусом и полезными свойствами ❞
      </p>
      <h3
        className={`flex items-center text-lg md:md:text-3xl  text-amber-950 ${lobster.className}`}
      >
        Добро пожаловать – в место, где забота о природе становится вкусом
        жизни!
      </h3>
      <button
        className={
          "rounded-md bg-[#57534E] p-2 text-lg text-white duration-150 hover:bg-[#ECE3D8] hover:text-black hover:shadow-md hover:transition-all md:px-14 md:py-5"
        }
       
      >
        каталог
        
      </button>
    </section>
  )
}

export { CatalogBlock }
