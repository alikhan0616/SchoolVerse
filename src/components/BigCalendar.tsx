"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "90%" }}
      views={["work_week", "day"]}
      view={view}
      min={new Date(0, 0, 0, 8, 0)} // 8:00 AM
      max={new Date(0, 0, 0, 16, 0)} // 4:00 PM
      onView={handleChangeView}
    />
  );
};

export default BigCalendar;
