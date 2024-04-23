import { AboutBlock } from "./_components/about-block"
import { CatalogBlock } from "./_components/catalog-block"
import { CowBlock } from "./_components/cow-block"
import { SustainableFarmBlock } from "./_components/sustainable-farm-block"

const HomePage = () => {
  return (
    <div className="h-full w-full flex-1">
      <CowBlock />
      <AboutBlock />
      <SustainableFarmBlock />
      <CatalogBlock />
    </div>
  )
}

export default HomePage
