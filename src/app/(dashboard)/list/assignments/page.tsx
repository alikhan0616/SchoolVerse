import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { assignmentsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Assignment={
  id:number;
  subject:string;
  class: string;
  teacher: string;
  dueDate: string;
}

const columns = [
  {
    header:"Subect Name", accessor:"name"
  },
  {
    header:"Class",
    accessor:"class",
  },
  {
    header:"Teacher",
    accessor:"teacher",
    className:'hidden md:table-cell',
  },
  {
    header:"Due Date",
    accessor:"dueDate",
    className:'hidden md:table-cell',
  },
  {
    header:"Actions",
    accessor: "action",
  },
]


const AssignmentListPage = () => {

  const renderRow = (item:Assignment) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-alipurple-light">
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.subject}</h3>
      </div>
    </td>
    <td>{item.class}</td>
    <td className="hidden md:table-cell">{item.teacher}</td>
    <td className="hidden md:table-cell">{item.dueDate}</td>
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
    <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
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
      <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>
      {/* PAGINATION */}    
        <Pagination/>    

    </div>
  )
}

export default AssignmentListPage  