import Image from "next/image"

const SustainableFarmBlock = () => {
  return (
    <section className="flex h-full w-full items-center justify-center bg-stone-600">
      <div className="container m-auto grid h-full grid-cols-2 gap-5 p-5 md:h-[700px] md:w-[900px] md:grid-cols-3">
        <div className="relative rounded-lg">
          <Image
            src={"/cow-grid.png"}
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <div className="relative rounded-lg">
          <Image
            src={"/cow-grid.png"}
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <div className="relative rounded-lg">
          <Image
            src={"/cow-grid.png"}
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <div className="relative rounded-lg">
          <Image
            src={"/cow-grid.png"}
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <div className="relative rounded-lg">
          <Image
            src={"/cow-grid.png"}
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
        <div className="relative rounded-lg">
          <Image
            src={"/cow-grid.png"}
            alt="cow"
            fill
            className={"absolute rounded-lg object-cover"}
          />
        </div>
      </div>
    </section>
  )
}

export { SustainableFarmBlock }
