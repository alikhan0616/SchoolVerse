import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 gap-4 flex flex-col md:flex-row'>
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
      {/* USER CARDS */}
      <div className="flex gap-4 justify-between flex-wrap">
       <UserCard type="student" />
       <UserCard type="parent" />
       <UserCard type="teacher" />
       <UserCard type="staff" />
      </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">
        r
      </div>
    </div>
  )
}

export default AdminPage