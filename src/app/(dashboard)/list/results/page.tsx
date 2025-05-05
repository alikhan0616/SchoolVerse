import FormModel from "@/components/FormModel"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { resultsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"


type Result={
  id:number;
  subject:string;
  class: string;
  teacher: number;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
}

const columns = [
  {
    header:"Subect Name", accessor:"name"
  },
  {
    header:"Student",
    accessor:"student",
  },
  {
    header:"Score",
    accessor:"score",
    className:'hidden md:table-cell',
  },
  {
      header:"Teacher",
      accessor:"teacher",
      className:'hidden md:table-cell',
    },
    {
      header:"Class",
      accessor:"class",
      className:'hidden md:table-cell',
    },
    {
    header:"Date",
    accessor:"date",
    className:'hidden md:table-cell',
  },
  {
    header:"Actions",
    accessor: "action",
  },
]


const AssignmentListPage = () => {

  const renderRow = (item:Result) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-alipurple-light">
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.subject}</h3>
      </div>
    </td>
    <td>{item.student}</td>
    <td className="hidden md:table-cell">{item.score}</td>
    <td className="hidden md:table-cell">{item.teacher}</td>
    <td className="hidden md:table-cell">{item.class}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
            <>
            <FormModel table="result" type="update" data={item} />
            <FormModel table="result" type="delete" id={item.id} />
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
    <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
        <FormModel table="result" type="create"  />
          )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={resultsData}/>
      {/* PAGINATION */}    
        <Pagination/>    

    </div>
  )
}

export default AssignmentListPage  