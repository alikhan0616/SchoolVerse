import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import { getUserAuth } from "@/lib/utils";
const TeacherPage = async () => {
  const { userId, role } = await getUserAuth();
  return (
    <div className="p-4 gap-4 flex flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full min-h-[950px] xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendarContainer type="teacherId" id={userId!} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* ACCOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
