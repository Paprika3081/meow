
import ProductCreationCard from "./_components/product-from/ui/product-card-create"
import ProductDeletionCard from "./_components/product-from/ui/product-card-delete"
import ProductTitle from "./_components/product-from/ui/product-titile"


const Dashboard = () => {
  return <div className="w-screen h-screen">
    <ProductTitle/>
    <ProductCreationCard/>
    <ProductDeletionCard/>
  </div>
}

export default Dashboard