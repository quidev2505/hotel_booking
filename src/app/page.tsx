"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import RoomList from "@/components/Roomlists";

const HomePage: React.FC = async () => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/api/rooms/");
        const data = await response.json();
        setRooms(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchRooms();
    return () => {};
  }, []);

  if (!rooms) return <div>Loading...</div>;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="container mx-auto px-4 py-8">
          <RoomList rooms={rooms} />
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
