import React, { useContext, useState } from "react";
import { Search } from "lucide-react";
import { DatePicker, Select } from "antd";
import { BookingTimeContext } from "@/context/BookingTimeContext";

const { RangePicker } = DatePicker;

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

  const handleSearch = ({ e }: any) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", { destination, checkIn, checkOut, guests });
  };

  //Tính số đêm dựa vào ngày bắt đầu và ngày kết thúc
  function calculateNights({ startDate, endDate }: any) {
    // Chuyển đổi chuỗi ngày thành đối tượng Date
    const start: any = new Date(startDate);
    const end: any = new Date(endDate);

    // Tính số mili giây giữa hai ngày
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceInMilliseconds = end - start;

    // Tính số đêm
    const nights = differenceInMilliseconds / millisecondsPerDay;

    return nights;
  }

  const { bookingTime, changeBooking } = useContext(BookingTimeContext);

  const [rangeTime, setRangeTime] = useState(1);
  const [optionRoom, setOptionRoom] = useState("1");

  const handleChangeTime = ({ date, dateString }: any) => {
    const [startDate, endDate] = dateString;
    const timeRange = calculateNights({ startDate, endDate });
    setRangeTime(timeRange);

    // Directly update bookingTime instead of creating a new array
    bookingTime.timeRange = timeRange;
    bookingTime.timeStart = startDate;
    bookingTime.timeEnd = endDate;
    changeBooking(bookingTime); // Pass the updated bookingTime object
  };

  const handleChangeSelect = (value: string) => {
    setOptionRoom(value);

    // Directly update bookingTime instead of creating a new array
    bookingTime.optionRoom = value;
    changeBooking(bookingTime); // Pass the updated bookingTime object
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border-2">
      <div className="flex justify-between mb-6">
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
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-2">
          <input
            type="text"
            placeholder="Thành phố, sân bay, khu vực, địa điểm nổi bật hoặc ..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <RangePicker
          onChange={(dates, dateString) =>
            handleChangeTime({ dates, dateString })
          }
        />
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:px-1">
          <Select
            defaultValue="1 phòng"
            style={{ width: 120 }}
            onChange={handleChangeSelect}
            options={[
              { value: 1, label: "1 phòng" },
              { value: 2, label: "2 phòng" },
              { value: 3, label: "3 phòng" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
        <div className="w-full md:w-1/5 md:pl-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center"
          >
            <Search size={20} />
            <span className="ml-2">Tìm</span>
          </button>
        </div>
      </form>
      <div className="text-center">
        <p>({rangeTime} đêm)</p>
      </div>
    </div>
  );
};

export default SearchComponent;
