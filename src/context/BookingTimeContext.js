"use client";

import { createContext, useState } from "react";

export const BookingTimeContext = createContext();

export const BookingTimeProvider = ({ children }) => {
  const [bookingTime, setBookingTime] = useState({});
  const changeBooking = (book) => {
    setBookingTime(book);
  };

  return (
    <BookingTimeContext.Provider value={{ bookingTime, changeBooking }}>
      {children}
    </BookingTimeContext.Provider>
  );
};
