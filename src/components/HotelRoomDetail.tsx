import React from "react";
import Image from "next/image";
import {
  Bed,
  Eye,
  Cigarette,
  Expand,
  Wifi,
  Thermometer,
  Bath,
  Info,
  UserRound,
  Utensils,
  CircleOff,
  ShieldCheck,
  HandCoins,
} from "lucide-react";
import Link from "next/link";

const TypeRoom = () => {
  return <div>TypeRoom</div>;
};

const HotelRoomDetail = ({ scrollRef, room }: any) => {
  return (
    <div
      className="max-w-6xl mx-auto p-5 bg-white shadow-lg rounded-md mt-4"
      ref={scrollRef}
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Phòng Deluxe</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-md p-2">
        <div className="md:col-span-1">
          <div className="relative h-64 mb-2">
            <Image
              src={
                "https://ak-d.tripcdn.com/images/0221612000bcmywnf91E2_R_400_200_R5.webp"
              }
              alt="Deluxe Room"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Image
              src="https://ak-d.tripcdn.com/images/0201e120008pfekq4F31C_R_200_100_R5.webp"
              alt="Room view 1"
              width={200}
              height={150}
              className="rounded"
            />
            <Image
              src="https://ak-d.tripcdn.com/images/0205z120008pfi8k4A8EC_R_200_100_R5.webp"
              alt="Room view 2"
              width={200}
              height={150}
              className="rounded"
            />
            <div className="relative">
              <Image
                src="https://ak-d.tripcdn.com/images/0220312000aikydwy20B6_R_600_400_R5.webp"
                alt="Room view 3"
                width={200}
                height={150}
                className="rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                <span className="text-white font-semibold">+29</span>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <Bed className="w-5 h-5 mr-2" /> 1 giường king
            </div>
            <div className="flex items-center">
              <Eye className="w-5 h-5 mr-2" /> Nhìn ra thành phố
            </div>
            <div className="flex items-center">
              <Cigarette className="w-5 h-5 mr-2" /> Không hút thuốc
            </div>
            <div className="flex items-center">
              <Expand className="w-5 h-5 mr-2" /> 30 m² | Tầng: 6-13
            </div>
            <div className="flex items-center">
              <Wifi className="w-5 h-5 mr-2" /> Wi-Fi miễn phí
            </div>
            <div className="flex items-center">
              <Thermometer className="w-5 h-5 mr-2" /> Điều hòa nhiệt độ
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-2" /> Phòng Tắm Riêng
            </div>
          </div>

          <button className="mt-4 text-blue-600 font-semibold">
            Thông Tin Phòng
          </button>
        </div>

        <div className="md:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <table border={1}>
              <thead>
                <th>Tóm tắt</th>
                <th>Sức chứa</th>
                <th>Giá hôm nay</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <div className="p-4 border-2">
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-block text-sm mb-2">
                        Giá tốt nhất có hủy miễn phí
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Utensils /> &nbsp;
                          <span>Bữa sáng với giá 20 $ (tùy chọn)</span>
                          <Info className="w-4 h-4 ml-1 text-gray-400" />
                        </div>
                        <div className="flex items-center text-green-600">
                          <CircleOff /> &nbsp;
                          <span>Hủy Miễn Phí trước 18:00, 11 thg 9</span>
                        </div>
                        <div className="flex items-center text-blue-600">
                          <ShieldCheck />
                          <span>Xác nhận ngay</span>
                        </div>
                        <div className="flex items-center">
                          <HandCoins />
                          <span>Thanh toán trực tuyến</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-3">
                      <UserRound />
                      <UserRound />
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div className="p-4 flex justify-between items-center border-2">
                      <div className="text-right">
                        <div className="text-pink-600 text-sm">
                          Ưu đãi cho hạng Kim cương
                        </div>
                        <div className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-sm inline-block">
                          Giảm 35%
                        </div>
                        <div className="mt-1">
                          <span className="line-through text-gray-400">
                            9.999 $
                          </span>
                          <span className="text-2xl font-bold ml-2">
                            {room.price.toLocaleString()} $
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Tổng giá: {room.price.toLocaleString()} $
                        </div>
                        <div className="text-sm text-gray-600">
                          1 phòng x 1 đêm bao gồm thuế
                        </div>
                        <div className="mt-2">
                          <Link href={`/bookings/${room.id}`}>
                            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                              Đặt
                            </button>
                          </Link>
                        </div>
                        <div className="text-sm text-red-600 mt-1">
                          Chỉ còn 5 phòng
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <div className="p-4 border-2">
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-block text-sm mb-2">
                        Giá tốt nhất có hủy miễn phí
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Utensils /> &nbsp;
                          <span>Bữa sáng với giá 20 $ (tùy chọn)</span>
                          <Info className="w-4 h-4 ml-1 text-gray-400" />
                        </div>
                        <div className="flex items-center text-green-600">
                          <CircleOff /> &nbsp;
                          <span>Hủy Miễn Phí trước 18:00, 11 thg 9</span>
                        </div>
                        <div className="flex items-center text-blue-600">
                          <ShieldCheck />
                          <span>Xác nhận ngay</span>
                        </div>
                        <div className="flex items-center">
                          <HandCoins />
                          <span>Thanh toán tại khách sạn</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-3">
                      <UserRound />
                      <UserRound />
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div className="p-4 flex justify-between items-center border-2">
                      <div className="text-right">
                        <div className="text-pink-600 text-sm">
                          Ưu đãi cho hạng Kim cương
                        </div>
                        <div className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-sm inline-block">
                          Giảm 35%
                        </div>
                        <div className="mt-1">
                          <span className="line-through text-gray-400">
                            9.999 $
                          </span>
                          <span className="text-2xl font-bold ml-2">
                            {room.price.toLocaleString()} $
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Tổng giá: {room.price.toLocaleString()} $
                        </div>
                        <div className="text-sm text-gray-600">
                          1 phòng x 1 đêm bao gồm thuế
                        </div>
                        <div className="mt-2">
                          <Link href={`/bookings/${room.id}`}>
                            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                              Đặt
                            </button>
                          </Link>
                        </div>
                        <div className="text-sm text-red-600 mt-1">
                          Chỉ còn 5 phòng
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomDetail;
