"use client";
import React, { useState, useEffect, cache, Suspense } from "react";
import RoomList from "../../components/Roomlists";
import Loading from "../loading";

/**
 * Component hiển thị danh sách phòng.
 *
 * @returns {React.FC} Component danh sách phòng.
 */
const HomePage: React.FC = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = cache(async () => {
    try {
      const response = await fetch("/api/rooms/");
      const data = await response.json();
      setRooms(data);
    } catch (e) {
      setError(error);
    }
  });

  if (error) {
    return <div>Đã xảy ra lỗi: {error}</div>;
  }

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
