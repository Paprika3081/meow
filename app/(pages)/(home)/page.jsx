// app/(pages)/(home)/page.jsx

import CustomHead from '@/app/_components/head_head/ui/CustomHead';
import { AboutBlock } from './_components/about-block/ui/about-block';
import { CatalogBlock } from './_components/catalog-block/ui/catalog-block';
import { CowBlock } from './_components/cow-block/ui/cow-block';
import { SustainableFarmBlock } from './_components/sustainable-farm-block/ui/sustainable-farm-block';

const HomePage = () => {
  return (
    <>
      <CustomHead title="АО Совхоз Южно-Сахалинский" showMenu={false} />
      <div className="h-full w-full flex-1">
        <CowBlock />
        <AboutBlock />
        <SustainableFarmBlock />
        <CatalogBlock />
      </div>
    </>
  );
};

export default HomePage;
