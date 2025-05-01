import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"

const columns = [
  {
    header:"Info", accessor:"info"
  },
  {
    header:"Teacher ID",
    accessor:"teacherId",
    className:'hidden md:table-cell'
  },
  {
    header:"Subjects",
    accessor:"subjects",
    className:'hidden md:table-cell'
  },
  {
    header:"Classes",
    accessor:"classes",
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


const TeacherListPage = () => {
  return (
    <div className='bg-white flex-1 p-4 rounded-md m-4 mt-0'>
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col items-center gap-4 md:flex-row w-full md:w-auto ">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
              <Image src='/filter.png' alt="filter-icon" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
              <Image src='/sort.png' alt="filter-icon" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex justify-center items-center bg-aliyellow rounded-full">
              <Image src='/plus.png' alt="filter-icon" height={14} width={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns}/>
      {/* PAGINATION */}    
        <Pagination/>    

    </div>
  )
}

export default TeacherListPage  