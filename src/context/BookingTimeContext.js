"use client";

import { createContext, useState } from "react";

export const BookingTimeContext = createContext();

export const BookingTimeProvider = ({ children }) => {
  //Get Today Default Time
  const today = new Date();
  const todayFormatted = today.toISOString().split('T')[0];

  //Get Tomorrow Default Time
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  const [bookingTime, setBookingTime] = useState({ optionRoom: 1, timeStart: todayFormatted, timeEnd: tomorrowFormatted, timeRange: 1 });
  const changeBooking = (book) => {
    setBookingTime(book);
  };

  return (
    <BookingTimeContext.Provider value={{ bookingTime, changeBooking }}>
      {children}
    </BookingTimeContext.Provider>
  );
};
