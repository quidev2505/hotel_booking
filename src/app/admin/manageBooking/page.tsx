"use client";
import ManageBooking from "@/components/admin/ManageBooking";
import React, { cache, useEffect, useState } from "react";
const AdminBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = cache(async () => {
      try {
        const response = await fetch("/api/bookings/");
        const data = await response.json();
        setBookings(data);
      } catch (e) {
        console.log(e);
      }
    });

    fetchBookings();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">
        Admin Booking Management
      </h1>
      <ManageBooking bookings={bookings} />
    </div>
  );
};

export default AdminBookingsPage;
