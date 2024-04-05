import { Button } from "@/app/_components/button/ui/button"
import Image from "next/image"

export const CatalogModal = ({handleCloseModal, title, description, image}) => {
  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  return (
    <div onClick={handleCloseModal} className="h-screen w-full fixed z-10 top-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div onClick={handleContentClick} className="bg-white p-8 rounded-lg">
            <Image src={image} width={400} height={400} className="w-full h-[400px] object-cover"/>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <Button onClick={handleCloseModal}>Закрыть</Button>
          </div>
        </div>
  )
}
