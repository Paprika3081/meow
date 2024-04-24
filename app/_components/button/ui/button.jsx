export const Button = ({children, onClick}) => {
  return <button
  onClick={onClick}
  className="rounded-md bg-[#8a837b] p-2 text-lg text-white duration-150 hover:bg-[#ECE3D8]  hover:text-black hover:shadow-md hover:transition-all md:px-15 md:py-3 "
>
  {children}
</button>
}