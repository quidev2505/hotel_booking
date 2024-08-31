"use client";
import ManageBooking from "@/components/admin/ManageBooking";
import React, { cache, useEffect, useState } from "react";
const AdminBookingsPage = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = cache(async () => {
    try {
      const response = await fetch("/api/bookings/");
      const data = await response.json();
      setBookings(data);
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">
        Admin Booking Management
      </h1>
      {bookings.length > 0 ? (
        <ManageBooking bookings={bookings} />
      ) : (
        <h2 className="text-center font-bold text-red-400">
          Do not have any row bookings
        </h2>
      )}
    </div>
  );
};

export default AdminBookingsPage;
