import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import { prisma } from "@/lib/prisma";
import { getUserAuth } from "@/lib/utils";
const ParentPage = async () => {
  const { userId } = await getUserAuth();

  const students = await prisma.student.findMany({
    where: {
      parentId: userId!,
    },
  });
  return (
    <div className="p-4 gap-4 flex flex-col xl:flex-row">
      {/* LEFT */}
      {students.map((student) => (
        <div className="w-full min-h-[950px] xl:w-2/3" key={student.id}>
          <div className="h-full bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">
              Schedule ({student.name + " " + student.surname})
            </h1>
            <BigCalendarContainer type="classId" id={student.classId} />
          </div>
        </div>
      ))}
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* ACCOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
