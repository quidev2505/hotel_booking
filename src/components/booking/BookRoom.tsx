import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "../Alert";
import { useState } from "react";

type Inputs = {
  firstNameRequired: string;
  lastNameRequired: string;
  emailRequired: string;
  phoneNumberRequired: string;
};

export default function BookRoom({ bookingTime, room }: any) {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const username = data.firstNameRequired + data.lastNameRequired;
      const dataObject = {
        room_id: room.id,
        user_name: username,
        check_in_date: bookingTime.timeStart,
        check_out_date: bookingTime.timeEnd,
        firstname: data.firstNameRequired,
        lastname: data.lastNameRequired,
        email: data.emailRequired,
        phoneNumber: data.phoneNumberRequired,
        total: bookingTime.optionRoom * bookingTime.timeRange * room.price,
        typeRoom: bookingTime.optionRoom,
      };

      const response = await fetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify(dataObject),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setType("success");
      setMessage("Booking Room Success");
      setShowAlert(true);

      setTimeout(() => {
        setMessage("Waiting 2 seconds to return homepage...");
        window.location.href = "/";
      }, 2000);
    } catch (e) {
      setType("fail");
      setMessage("Booking Room Fail");
      setShowAlert(true);
      console.log(e);
    }
  };

  return (
    <>
      {showAlert && <Alert type={type} message={message} />}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Thông tin khách hàng */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-bold mb-4">Thông tin khách hàng</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Tên
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstNameRequired", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
                placeholder="Vui lòng chỉ sử dụng ký tự tiếng Anh"
              />
              {errors.firstNameRequired && (
                <span className="mt-2 text-red-600 italic">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Họ
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastNameRequired", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
 focus:shadow-outline"
                placeholder="Vui lòng chỉ sử dụng ký tự tiếng Anh"
              />
              {errors.lastNameRequired && (
                <span className="mt-2 text-red-600 italic">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("emailRequired", {
                  required: "Email Address is required",
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
                placeholder="Email"
              />
              {errors.emailRequired && (
                <p role="alert" className="mt-2 text-red-600 italic">
                  {errors.emailRequired.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                id="phonenumber"
                {...register("phoneNumberRequired", {
                  required: "Phone Number is required",
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
                placeholder="Số điện thoại"
              />
              {errors.phoneNumberRequired && (
                <p role="alert" className="mt-2 text-red-600 italic">
                  {errors.phoneNumberRequired.message}
                </p>
              )}
            </div>
          </div>
          {/* Tương tự cho các trường email và số điện thoại */}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
        >
          Đặt phòng
        </button>
      </form>
    </>
  );
}
