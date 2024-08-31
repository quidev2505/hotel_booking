import React, { useState } from "react";
import type { PopconfirmProps } from "antd";
import { Button, message, Popconfirm } from "antd";
import Alert from "../Alert";

const ManageBooking = ({ bookings }: any) => {
  if (!bookings) return <div>Loading...</div>;

  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [bookingId, setBookingId] = useState("");

  const confirm: PopconfirmProps["onConfirm"] = async (e) => {
    console.log(e);
    await handleCancel();
  };

  const handleCancel = async () => {
    try {
      await fetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
      })
        .then(() => {
          setMessage("Cancel booking success");
          setType("success");
          setShowAlert(true);
          setTimeout(() => {
            window.location.href = "/admin/manageBooking";
          }, 2000);
        })
        .catch((err: any) => {
          console.log(err);
          setMessage("Cancel booking fail");
          setType("fail");
          setShowAlert(true);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    setMessage("Cancel booking fail");
    setType("fail");
    setShowAlert(true);
  };

  return (
    <div className="overflow-x-auto">
      {showAlert && <Alert type={type} message={message} />}
      <table className="min-w-full bg-white border-2 shadow-md mt-4 border-blue-400 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Booking ID</th>
            <th className="py-2 px-4 text-left">Room ID</th>
            <th className="py-2 px-4 text-left">Guest</th>
            <th className="py-2 px-4 text-left">Check-in</th>
            <th className="py-2 px-4 text-left">Check-out</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking: any) => (
            <tr key={booking.id} className="border-b">
              <td className="py-2 px-4">{booking.id}</td>
              <td className="py-2 px-4">{booking.room_id}</td>
              <td className="py-2 px-4">{booking.user_name}</td>
              <td className="py-2 px-4">
                {booking.check_in_date.split("T")[0]}
              </td>
              <td className="py-2 px-4">
                {booking.check_out_date.split("T")[0]}
              </td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs cursor-pointer ${
                    booking.status === "success"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {booking.status}
                </span>
                <Popconfirm
                  className="ml-4"
                  title="Change status booking"
                  description="Do you want to change status booking?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  onOpenChange={() => setBookingId(booking.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger>Delete</Button>
                </Popconfirm>
              </td>
              <td className="py-2 px-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooking;
