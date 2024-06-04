"use client"

import CustomHead from "@/app/_components/head_head/ui/CustomHead"
import ProductCatalog from "./_components/list-catalog/ui/list-catalog"
import CatalogListPage from "./_components/list-catalog/ui/list-catalog"


const CatalogPage = () => {
  return (
    <div>
        <CustomHead title="АО Совхоз Южно-Сахалинский" showMenu={false} />
        <ProductCatalog/>
    </div>
  )
}

export default CatalogPage