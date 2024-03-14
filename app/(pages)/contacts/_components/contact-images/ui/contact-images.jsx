import Image from "next/image";

const ContactImages = () => {
  return (
    <>
      <section className="py-10 px-4 md:px-8 lg:px-12 flex justify-center items-center">
        <div className="hidden md:flex flex-col items-center justify-center gap-5 w-full">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src="/cow2-contacts.jpg"
              alt="photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src="/milk-contacts.jpg"
              alt="photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src="/grow-contacts.jpg"
              alt="photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { ContactImages };
