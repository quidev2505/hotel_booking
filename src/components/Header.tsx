"use client";
import React from "react";
import SearchComponent from "./SearchRoom";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes("/admin") && (
        <div className="bg-blue-500 p-3 rounded-lg w-full">
          <Link href="/" className="cursor-pointer">
            <h1 className="text-3xl font-bold mb-5 text-center text-white pt-5">
              ĐẶT PHÒNG KHÁCH SẠN
            </h1>
          </Link>
          <SearchComponent />
        </div>
      )}
    </>
  );
};

export default Header;
