import FormModel from "@/components/FormModel"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { parentsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Parent={
  id:number,
  name:string,
  email?:string,
  students:string[],
  phone:string,
  address:string,
}

const columns = [
  {
    header:"Info", accessor:"info"
  },
  {
    header:"Student Name(s)",
    accessor:"students",
    className:'hidden md:table-cell'
  },
  {
    header:"Phone",
    accessor:"phone",
    className:'hidden lg:table-cell'
  },
  {
    header:"Address",
    accessor:"address",
    className:'hidden lg:table-cell'
  },
  {
    header:"Actions",
    accessor: "action",
  },
]


const ParentListPage = () => {

  const renderRow = (item:Parent) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-alipurple-light">
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.students.join(", ")}</td>
    <td className="hidden md:hidden lg:table-cell">{item.phone}</td>
    <td className="hidden md:hidden lg:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">

        {role === "admin" && (
          <>
        <FormModel table="parent" type="update" data={item} />
        <FormModel table="parent" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
    </tr>
  )
  return (
    <div className='bg-white flex-1 p-4 rounded-md m-4 mt-0'>
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col items-center gap-4 md:flex-row w-full md:w-auto ">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
              <Image src='/filter.png' alt="filter-icon" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
              <Image src='/sort.png' alt="filter-icon" height={14} width={14} />
            </button>
            {role === 'admin' && ( 
            //   <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
            //   <Image src='/plus.png' alt="filter-icon" height={14} width={14} />
            // </button>
            <FormModel table="parent" type="create" />
          )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData}/>
      {/* PAGINATION */}    
        <Pagination/>    

    </div>
  )
}

export default ParentListPage  