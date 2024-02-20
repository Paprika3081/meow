import Image from "next/image"

const ContactImages = () => {
  return (
      <div>
        <Image 
        src="/cow-contacts.jpg" alt="photo" 
        width={550} 
        height={450} 
        className="h-[300px] w-[300px] rounded-full md:h-1/2 md:w-1/2 md:rounded-3xl"
        />
        <Image 
        src="/cow-contacts2.jpg" alt="photo" 
        width={350} 
        height={450} 
        className="h-[300px] w-[300px] rounded-full md:h-1/2 md:w-1/2 md:rounded-3xl"
        />
      </div>
  )
}

export default ContactImages