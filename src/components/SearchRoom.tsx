import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchComponent = () => {
  const [activeTab, setActiveTab] = useState("Khách Sạn");
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 phòng, 2 Người Lớn, 0 Trẻ Em");

  const tabs = [
    "Khách Sạn",
    "Vé Máy bay",
    "Vé Tàu",
    "Tour & Hoạt Động",
    "Combo Tiết Kiệm",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", { destination, checkIn, checkOut, guests });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <form onSubmit={handleSearch} className="flex flex-wrap items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-2">
          <input
            type="text"
            placeholder="Thành phố, sân bay, khu vực, địa điểm nổi bật hoặc ..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/6 mb-4 md:mb-0 md:px-1">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/6 mb-4 md:mb-0 md:px-1">
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:px-1">
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option>1 phòng, 2 Người Lớn, 0 Trẻ Em</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="w-full md:w-1/12 md:pl-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center"
          >
            <Search size={20} />
            <span className="ml-2">Tìm</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
