import { Button } from "@/app/_components/button/ui/button";
import Image from "next/image";

export const CatalogModal = ({ handleCloseModal, title, description, image }) => {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleCloseModal}
      className="h-screen w-full fixed z-10 top-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div
        onClick={handleContentClick}
        className="bg-white relative shadow-lg rounded-lg overflow-hidden"
        style={{ width: '750px', height: '800px' }}
      >
        {image ? (
          <div className="relative flex items-center justify-center pt-4">
            <Image
              src={image} // Обычная ссылка на изображение
              width={600}
              height={600}
              className="object-cover"
              alt={title}
            />
          </div>
        ) : (
          <p className="p-4">Нет изображения</p>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4 overflow-y-auto">{description}</p>
          <Button onClick={handleCloseModal} className="absolute bottom-4 right-4">Закрыть</Button>
        </div>
      </div>
    </div>
  );
};
