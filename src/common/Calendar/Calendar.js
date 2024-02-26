// import React from "react";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// export default function Calendar() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer
//         components={["DateCalendar", "DateCalendar", "DateCalendar"]}
//       >
//         <DemoItem>
//           <DateCalendar views={["day"]} />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="react-calendar !w-full PlusJakartaSans600">
      <Calendar onChange={onChange} value={value} className="!w-full" />
    </div>
  );
};

export default CalendarComponent;
