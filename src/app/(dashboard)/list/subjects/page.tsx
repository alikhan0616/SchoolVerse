import FormModel from "@/components/FormModel"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, subjectsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Subject={
  id:number,
  name:string,
  teachers:string[],
}

const columns = [
  {
    header:"Subject Name", accessor:"name"
  },
  {
    header:"Teachers",
    accessor:"teachers",
    className:'hidden md:table-cell'
  },
  {
    header:"Actions",
    accessor: "action",
  },
]


const SubjectsListPage = () => {

  const renderRow = (item:Subject) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-alipurple-light">
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>
    <td>
      <div className="flex items-center gap-2">     
        {role === "admin" && (
            <>
            <FormModel table="subject" type="update" data={item} />
            <FormModel table="subject" type="delete" id={item.id} />
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
    <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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
              <FormModel table="subject" type="create" />              
          )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData}/>
      {/* PAGINATION */}    
        <Pagination/>    

    </div>
  )
}

export default SubjectsListPage  