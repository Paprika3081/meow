import Image from "next/image"
import { HistoryText } from "./_components/ui/history-text"
import { HistoryTitle } from "./_components/ui/history-title"
import { HistoryVideo } from "./_components/ui/history-video"
import CustomHead from "@/app/_components/head_head/ui/CustomHead"

const HistoryPage = () => {
  return (
    <>
      <div className={"flex flex-col items-center justify-center"}>
        <CustomHead title="АО Совхоз Южно-Сахалинский"showMenu={false} />
        <HistoryTitle/>
        <HistoryText/>
        {/* <HistoryVideo/> */}
      </div>
    </>
  )
}

export default HistoryPage
