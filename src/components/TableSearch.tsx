import Image from "next/image"

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex text-xs md:flex items-center gap-2 rounded-full ring-[1.5px] ring-gray-400 px-2">
           <Image src='/search.png' alt="search-icon" height={14} width={14}/>
           <input className="focus:outline-none w-[200px] p-2 bg-transparent" type="text" placeholder="Search..." />
         </div>
  )
}

export default TableSearch