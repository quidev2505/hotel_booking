"use client";
import React, { useState, useEffect } from "react";
import RoomList from "../../components/Roomlists";
import SearchComponent from "@/components/SearchRoom";

const HomePage: React.FC = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const response = await fetch("/api/rooms/");
    const data = await response.json();
    console.log(data);
    setRooms(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" bg-blue-500">
        <h1 className="text-5xl font-bold mb-10 text-center text-white pt-5">
          Đặt phòng khách sạn
        </h1>
        <SearchComponent />
      </div>

      <RoomList rooms={rooms} />
    </div>
  );
};

export default HomePage;
