import Image from "next/image"

import { AboutBlock } from "./_components/about-block"
import { ACommentBlock } from "./_components/a_comment/ui/a_comment-block"
import { CowBlock } from "./_components/cow-block"
import { GridBlock } from "./_components/grid-block/ui/grid-block"

const HomePage = () => {
  return (
    <>
      <CowBlock />
      <AboutBlock />
      <GridBlock/>
      <ACommentBlock/>
    </>
  )
}

export default HomePage
