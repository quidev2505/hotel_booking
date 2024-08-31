"use client";
import BackPage from "@/components/BackPage";
import { BookingTimeContext } from "@/context/BookingTimeContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import BookRoom from "../../../components/booking/BookRoom";
import Header from "@/components/Header";

const BookingForm = ({ params }: any) => {
  const id = params.id;
  const [room, setRoom]: any = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      if (id) {
        const res = await fetch(`/api/rooms/${id}`);
        const data = await res.json();
        setRoom(data);
      }
    };
    fetchRoom();
  }, [id]);

  const { bookingTime } = useContext(BookingTimeContext);

  if (!room) return <div>Loading...</div>;

  return (
    <>
      <div className="container mx-auto px-4">
        <BackPage onRoute={`/rooms/${room.id}`} />
        {/* Thông tin phòng */}
        <div className="grid grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-4 ">
            <div className="flex items-center">
              <div className="relative mr-5">
                <Image
                  src={room.image_url}
                  alt={room.name}
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{room.name}</h2>
                <p className="text-gray-700">Phòng Cao cấp với Cửa số</p>
                <p className="text-gray-700">
                  2 người lớn | 1 giường queen | Wi-Fi miễn phí | Không hút
                  thuốc | 18m²
                </p>
                <p className="text-red-500">Không Hoàn Tiền</p>
              </div>
            </div>
            <div className="mt-4">
              {" "}
              <p className="text-gray-500">
                {bookingTime.timeStart}, {bookingTime.timeEnd} |{" "}
                {bookingTime.timeRange} đêm | {bookingTime.optionRoom} phòng
              </p>
              <p className="text-yellow-500">
                Đang có nhu cầu cao! Hoàn tất đặt chỗ ngay để chốt được phòng lý
                tưởng cho bạn.
              </p>
            </div>
          </div>
          <div className="container mx-auto p-4 bg-blue-100 rounded-lg shadow-md ml-4 h-fit">
            <h2 className="text-2xl font-bold text-center mb-4">
              Chi tiết đơn hàng
            </h2>
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-2">Tên dịch vụ</th>
                  <th className="px-4 py-2">Giá</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">
                    {bookingTime.optionRoom} phòng x {bookingTime.timeRange} đêm
                    x giá phòng
                  </td>
                  <td className="px-4 py-2">
                    {bookingTime.optionRoom *
                      bookingTime.timeRange *
                      room.price}{" "}
                    $
                  </td>
                </tr>
                <tr className="bg-blue-50 font-bold">
                  <td className="px-4 py-2">Thanh toán trước trực tuyến</td>
                  <td className="px-4 py-2">
                    {bookingTime.optionRoom *
                      bookingTime.timeRange *
                      room.price}{" "}
                    $
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Form input user information */}
        <BookRoom bookingTime={bookingTime} room={room} />
      </div>
    </>
  );
};

export default BookingForm;
