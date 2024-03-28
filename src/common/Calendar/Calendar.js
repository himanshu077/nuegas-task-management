"use client";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="react-calendar !border-none !w-full PlusJakartaSans600 !rounded-xl">
      <Calendar onChange={onChange} value={value} className="!w-full !rounded-xl !border-none"  />
    </div>
  );
};

export default CalendarComponent;
