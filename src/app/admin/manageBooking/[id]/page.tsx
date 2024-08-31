"use client";
import Alert from "@/components/Alert";
import BackPage from "@/components/BackPage";
import { BookingTimeContext } from "@/context/BookingTimeContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const BookingDetail = ({ params }: any) => {
  const id = params.id;
  const [detailBooking, setDetailBooking]: any = useState(null);

  useEffect(() => {
    const fetchDetailBooking = async () => {
      if (id) {
        const res = await fetch(`/api/bookings/${id}`);
        const data = await res.json();
        console.log(data);
        setDetailBooking(data);
      }
    };
    fetchDetailBooking();
  }, [id]);

  if (!detailBooking) return <div>Loading...</div>;

  return (
    <>
      <div className="overflow-x-auto">
        <BackPage onRoute={"/admin/manageBooking"} />
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">
          Detail Booking
        </h1>
        <table className="min-w-full bg-white border-2 shadow-md mt-4 border-blue-400 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Booking Id</th>
              <th className="py-2 px-4 text-left">First Name</th>
              <th className="py-2 px-4 text-left">Last Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Phone Number</th>
              <th className="py-2 px-4 text-left">Total Booking</th>
              <th className="py-2 px-4 text-left">Type of Room</th>
            </tr>
          </thead>
          <tbody>
            {detailBooking && (
              <tr className="border-b">
                <td className="py-2 px-4">{detailBooking.bookingsId}</td>
                <td className="py-2 px-4">{detailBooking.firstname}</td>
                <td className="py-2 px-4">{detailBooking.lastname}</td>
                <td className="py-2 px-4">{detailBooking.email}</td>
                <td className="py-2 px-4">{detailBooking.phoneNumber}</td>
                <td className="py-2 px-4">{detailBooking.total} $</td>
                <td className="py-2 px-4">{detailBooking.typeRoom}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingDetail;
