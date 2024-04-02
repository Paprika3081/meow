
import ProductCreationCard from "./_components/product-from/ui/product-card-create"
import ProductDeletionForm from "./_components/product-from/ui/product-form-delete"
import ProductTitle from "./_components/product-from/ui/product-titile"


const Dashboard = () => {
  return <div className="w-screen h-screen">
    <ProductTitle/>
    <ProductCreationCard/>
    <ProductDeletionForm/>
  </div>
}

export default Dashboard