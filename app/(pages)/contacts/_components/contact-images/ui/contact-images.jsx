import Image from "next/image"

const ContactImages = () => {
  return (
    <div className="relative hidden h-full w-1/2 flex-col items-center justify-center gap-5 md:flex">
      <Image
        src="/cow-contacts.jpg"
        alt="photo"
        width={550}
        height={450}
        className="h-[300px] w-[300px] rounded-3xl object-cover"
      />
      <Image
        src="/cow-contacts2.jpg"
        alt="photo"
        width={350}
        height={450}
        className="absolute right-[300px] top-[150px] h-[300px] w-[300px] rounded-3xl object-cover"
      />
    </div>
  )
}

export { ContactImages }
