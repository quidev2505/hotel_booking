"use client";
import React from "react";
import SearchComponent from "./SearchRoom";

const Header = () => {
  return (
    <div className="bg-blue-500 p-3 rounded-lg w-full">
      <h1 className="text-3xl font-bold mb-5 text-center text-white pt-5">
        ĐẶT PHÒNG KHÁCH SẠN
      </h1>
      <SearchComponent />
    </div>
  );
};

export default Header;
