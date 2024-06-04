"use client"

import CustomHead from "@/app/_components/head_head/ui/CustomHead"
import VacancyList from "./_components/ui/vacancy-list"
import VacancyTitle from "./_components/ui/vacancy-title"

const VacancyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
       <CustomHead title="АО Совхоз Южно-Сахалинский" showMenu={false} /> 
       <VacancyTitle/>
       <VacancyList/>
    </div>
  )
}

export default VacancyPage