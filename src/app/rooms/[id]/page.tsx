"use client";
import BackPage from "@/components/BackPage";
import { useEffect, useRef, useState } from "react";
import {
  Star,
  MapPin,
  Info,
  Podcast,
  Bath,
  Club,
  Eclipse,
  ShowerHead,
  TicketsPlane,
  TrainFront,
} from "lucide-react";
import Image from "next/image";
import HotelRoomDetail from "@/components/HotelRoomDetail";

interface Room {
  id: number;
  name: string;
  price: number;
  location: string;
  image_url: string;
}

interface RoomListProps {
  rooms: Room;
}

const RoomDetail: React.FC<RoomListProps> = ({ params }: any) => {
  const id = params.id;
  const [room, setRoom]: any = useState(null);
  const [readMore, setReadMore] = useState(false);

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

  const scrollRef = useRef<any>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!room) return <div>Loading...</div>;

  return (
    <div>
      <BackPage onRoute={"/"} />
      {room && (
        <div className="max-w-6xl mx-auto p-6 shadow-lg rounded-md border-2 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{room.name}</h1>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="flex items-start mt-3 text-gray-600 flex-col">
                <p className="flex">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-xs">{room.location}</span>
                </p>

                <p className="flex">
                  <Podcast className="w-4 h-4 mr-1" />
                  {readMore ? (
                    <span className="text-xs">{room.description}</span>
                  ) : (
                    <span className="text-xs">
                      {room.description.slice(0, 100)}...
                    </span>
                  )}

                  <span
                    className="text-blue-600 font-bold cursor-pointer"
                    onClick={() => setReadMore((prev) => !prev)}
                  >
                    {readMore ? "Thu gọn" : "Xem thêm"}
                  </span>
                </p>
                <span className="ml-2 text-blue-600 underline cursor-pointer">
                  Xem trên bản đồ
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 ml-5">
              <div className="text-right">
                <span className="text-3xl font-bold text-blue-700 ml-2">
                  {room.price.toLocaleString()} $
                </span>
              </div>
              <div className="flex items-center justify-end mt-1">
                <Info className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm">
                  Chúng Tôi Khớp Giá
                </span>
              </div>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-md mt-2 hover:bg-blue-700 transition-colors"
                onClick={handleScroll}
              >
                Chọn Phòng
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div className="w-full relative pt-[100%]">
                <Image
                  src={room.image_url}
                  alt={room.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center">
            <div className="mr-8">
              <div className="text-2xl font-bold">4.3/5</div>
              <div className="text-sm text-gray-600">
                Rất Tốt · Vị Trí Rất Tốt
              </div>
            </div>
            <p className="mt-2 md:mt-0 bg-gray-400 p-2 text-white rounded-sm">
              Khách sạn đẹp, trang thiết bị hiện đại, đầy đủ. Nhân viên nhiệt
              tình, chu đáo và rất thân thiện.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <Bath />
              &nbsp;
              <span>Bể bơi trong nhà</span>
            </div>
            <div className="flex items-center">
              <Club />
              &nbsp;
              <span>Sòng bạc</span>
            </div>
            <div className="flex items-center">
              <Eclipse />
              &nbsp;
              <span>Spa</span>
            </div>
            <div className="flex items-center">
              <ShowerHead />
              &nbsp;
              <span>Phòng xông hơi</span>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Xem xung quanh đây</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <TicketsPlane />
                &nbsp;
                <span>Sân Bay: Sân bay quốc tế Nội Bài (27,5km)</span>
              </div>
              <div className="flex items-center">
                <TrainFront />
                &nbsp;
                <span>Ga Xe Lửa: Ga Xe Lửa Hà Nội (6,9km)</span>
              </div>
              <div className="flex items-center">
                <TrainFront />
                &nbsp;
                <span>Ga Xe Lửa: ga Phúc Yên (32,9km)</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <HotelRoomDetail scrollRef={scrollRef} room={room} />
    </div>
  );
};

export default RoomDetail;
