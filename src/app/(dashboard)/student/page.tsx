import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalander from "@/components/EventCalander";
import { prisma } from "@/lib/prisma";
import { getUserAuth } from "@/lib/utils";

const StudentPage = async () => {
  const { userId } = await getUserAuth();
  const classItem = await prisma.class.findMany({
    where: {
      students: { some: { id: userId! } },
    },
  });
  return (
    <div className="p-4 gap-4 flex flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendarContainer type="classId" id={classItem[0].id} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* CALENDER & EVENTS */}
        <EventCalander />
        {/* ACCOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
