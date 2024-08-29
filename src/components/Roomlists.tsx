import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";

interface Room {
  id: number;
  name: string;
  price: number;
  location: string;
  image_url: string;
}

interface RoomListProps {
  rooms: Room[];
}

const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 ">
      {rooms.map((room) => (
        <Link
          href={`/rooms/${room.id}`}
          key={room.id}
          className="shadow-lg rounded-lg overflow-hidden hover:shadow-2xl"
        >
          <div className="w-full relative pt-[100%]">
            <Image
              src={room.image_url}
              alt={room.name}
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{room.name}</h3>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="5" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{room.location}</p>
            <div className="flex justify-end items-center px-2">
              <p>Từ &nbsp;</p>
              <p className="text-lg font-bold">
                {room.price.toLocaleString()} $
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoomList;
