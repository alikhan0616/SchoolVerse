import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-alipurple even:bg-aliyellow p-4 flex-1 min-w-[130px]'>
        <div className="flex items-center justify-between">
            <span className="text-[10px] bg-white text-green-600 px-2 py-1 rounded-full">2024/2025</span>
            <Image src='/more.png' alt="" width={20} height={20} />
        </div>
        <h1 className="text-2xl font-semibold my-4">2,312</h1>
        <h2 className="captalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  )
}

export default UserCard