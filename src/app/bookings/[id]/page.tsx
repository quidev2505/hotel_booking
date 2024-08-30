"use client";
import React, { useEffect, useState } from "react";

const BookingForm = ({ params }: any) => {
  const id = params.id;
  const [room, setRoom]: any = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      if (id) {
        const res = await fetch(`/api/rooms/${id}`);
        const data = await res.json();
        console.log(data);
        setRoom(data);
      }
    };
    fetchRoom();
  }, [id]);

  if (!room) return <div>Loading...</div>;
  return (
    <div className="container mx-auto px-4">
      {/* Thông tin phòng */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold">Khách sạn Sunline ****</h2>
        <p className="text-gray-700">Phòng Cao cấp với Cửa số</p>
        <p className="text-gray-700">
          2 người lớn | 1 giường queen | Wi-Fi miễn phí | Không hút thuốc | 18m²
        </p>
        <p className="text-red-500">Không Hoàn Tiền</p>
        <p className="text-gray-500">
          T3, 3 thg 9 - 17, 7 thg 9 | 4 đêm | 1 phòng
        </p>
        <p className="text-green-500">
          Giảm Giá Đặc Biệt: Tiết kiệm 10.866.400₫ cho loại phòng này
        </p>
        <p className="text-yellow-500">
          Đang có nhu cầu cao! Hoàn tất đặt chỗ ngay để chốt được phòng lý tưởng
          cho bạn.
        </p>

        <div className="bg-blue-100 p-4 rounded-md mt-4">
          <p className="text-blue-500">
            Nhận ngay hoặc dùng để nhận đến 494 Trip Coins (khoảng 122.8824₫)
            sau khi trả phòng.
          </p>
        </div>
      </div>

      {/* Thông tin khách hàng */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Thông tin khách hàng</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Tên
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
              placeholder="Vui lòng chỉ sử dụng ký tự tiếng Anh"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Họ
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
              placeholder="Vui lòng chỉ sử dụng ký tự tiếng Anh"
            />
          </div>
        </div>
        {/* Tương tự cho các trường email và số điện thoại */}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
        >
          Đặt phòng
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
