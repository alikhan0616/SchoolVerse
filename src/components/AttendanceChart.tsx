'use client';
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Mon',
      present: 60,
      absent: 40,
    },
    {
      name: 'Tue',
      present: 80,
      absent: 50,
    },
    {
      name: 'Wed',
      present: 40,
      absent: 60,
    },
    {
      name: 'Thr',
      present: 90,
      absent: 45,
    },
    {
      name: 'Fri',
      present: 85,
      absent: 15,
    }
  ];
  
const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src='/moreDark.png' alt='more-dark-icon' width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="">
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}} />
          <Bar dataKey="present" radius={[10, 10, 0, 0]} legendType='circle' fill="#C3EBFA"/>
          <Bar dataKey="absent" radius={[10, 10, 0, 0]} legendType='circle' fill="#FAE27C"/>
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AttendanceChart;