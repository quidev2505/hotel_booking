"use client";
import React, { useState, useEffect, cache } from "react";
import RoomList from "../../components/Roomlists";
import Header from "@/components/Header";

const HomePage: React.FC = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = cache(async () => {
    try {
      const response = await fetch("/api/rooms/");
      const data = await response.json();
      setRooms(data);
    } catch (e) {
      console.log(e);
    }
  });

  if (!rooms) return <div>Loading...</div>;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <RoomList rooms={rooms} />
      </div>
    </>
  );
};

export default HomePage;