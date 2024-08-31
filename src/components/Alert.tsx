import React from "react";

const Alert = ({ type, message }: any) => {
  return (
    <div
      className={
        type === "success"
          ? "bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
          : "bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
      }
      role="alert"
    >
      <p className="font-bold">{message}</p>
    </div>
  );
};

export default Alert;
