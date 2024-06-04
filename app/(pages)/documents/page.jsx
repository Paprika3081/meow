'use client'
import CustomHead from "@/app/_components/head_head/ui/CustomHead"
import DocTable from "./_components/doc-table/ui/doc-table"
import DocTextTitle from "./_components/doc-text-title/ui/doc-text-title"

const DocumentsPage = () => {
  return (
    <div>
        <CustomHead title="АО Совхоз Южно-Сахалинский" showMenu={false} />
        <DocTextTitle/>
        <DocTable/>
    </div>
  )
}

export default DocumentsPage