"use client";
import React, { cache, Suspense } from "react";
import RoomList from "../../components/Roomlists";
import Loading from "../loading";

const fetchRooms = cache(async () => {
  try {
    const response = await fetch("/api/rooms/");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
});

const HomePage: React.FC = async () => {
  const rooms = await fetchRooms();

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
