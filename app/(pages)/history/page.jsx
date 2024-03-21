import Image from "next/image"
import { HistoryText } from "./_components/ui/history-text"
import { HistoryTitle } from "./_components/ui/history-title"
import { HistoryVideo } from "./_components/ui/history-video"

const HistoryPage = () => {
  return (
    <>
      <div className={"flex flex-col items-center justify-center"}>
        <HistoryTitle/>
        <HistoryText/>
        <HistoryVideo/>
      </div>
    </>
  )
}

export default HistoryPage
