import Link from "next/link";
import React from "react";

const BackPage = ({ onRoute }: any) => {
  return (
    <Link href={onRoute}>
      <button className="bg-red-400 p-2 text-white font-bold rounded-md my-4">
        <p>Trở về</p>
      </button>
    </Link>
  );
};

export default BackPage;
