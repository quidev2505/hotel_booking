import React, { Suspense } from "react";
import Loading from "./loading";
import RoomList from "@/components/Roomlists";

async function getRooms() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms/`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch rooms');
    }
    return response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default async function HomePage() {
  const rooms = await getRooms();

  if (!rooms) return <div>Failed to load rooms</div>;

  return (
    <Suspense fallback={<Loading />}>
      <div className="container mx-auto px-4 py-8">
        <RoomList rooms={rooms} />
      </div>
    </Suspense>
  );
}
