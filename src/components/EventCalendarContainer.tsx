import Image from "next/image";
import EventCalander from "./EventCalander";
import EventList from "./EventList";

const EventCalendarContainer = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  const { date } = searchParams;
  return (
    <div className="bg-white p-4 rounded-md">
      <EventCalander />
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image
          src="/moreDark.png"
          alt="more-dark-icon"
          height={20}
          width={20}
        />
      </div>
      <div className="flex flex-col gap-4">
        <EventList dateParam={date} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;
