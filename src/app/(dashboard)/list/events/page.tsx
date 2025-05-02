import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { eventsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Event={
  id:number;
  title:string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
}

const columns = [
  {
    header:"Title", accessor:"title"
  },
  {
    header:"Class",
    accessor:"class",
  },
  {
    header:"Date",
    accessor:"date",
    className:'hidden md:table-cell',
  },
  {
    header:"Start Time",
    accessor:"startTime",
    className:'hidden md:table-cell',
  },
  {
    header:"End Time",
    accessor:"endTime",
    className:'hidden md:table-cell',
  },
  {
    header:"Actions",
    accessor: "action",
  },
]


const EventListPage = () => {

  const renderRow = (item:Event) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-alipurple-light">
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.title}</h3>
      </div>
    </td>
    <td>{item.class}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    <td className="hidden md:table-cell">{item.startTime}</td>
    <td className="hidden md:table-cell">{item.endTime}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/classes/${item.id}`}>
        <button className="flex items-center justify-center w-7 h-7 rounded-full bg-alisky">
          <Image src='/edit.png' alt='view-icon' width={16} height={16}></Image>
        </button>
        </Link>
        {role === "admin" && (
           <button className="flex items-center justify-center w-7 h-7 rounded-full bg-alipurple">
           <Image src='/delete.png' alt='view-icon' width={16} height={16}></Image>
         </button>
        )}
      </div>
    </td>
    </tr>
  )
  return (
    <div className='bg-white flex-1 p-4 rounded-md m-4 mt-0'>
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
    <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col items-center gap-4 md:flex-row w-full md:w-auto ">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
              <Image src='/filter.png' alt="filter-icon" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
              <Image src='/sort.png' alt="filter-icon" height={14} width={14} />
            </button>
            {role === 'admin' && ( <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
              <Image src='/plus.png' alt="filter-icon" height={14} width={14} />
            </button>)}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData}/>
      {/* PAGINATION */}    
        <Pagination/>    

    </div>
  )
}

export default EventListPage  