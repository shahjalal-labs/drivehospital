"use client";

import updateLottie from "@/updateLottie.json";
import LottieAnime from "@/lib/LottieAnime";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BookingUpdateForm = ({ booking }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    address: booking.address || "",
    city: booking.city || "",
    zip: booking.zip || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:3000/api/my-bookings/${booking._id}`,
      {
        method: "PUT", // use PUT or PATCH for update
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const result = await res.json();

    if (result?.success) {
      toast.success("Booking updated successfully!");
      setTimeout(() => router.push("/my-bookings"), 1500);
    } else {
      toast.error("Failed to update booking.");
    }
  };

  return (
    <>
      <div className="lg:flex justify-around">
        <div className="max-w-[600px] max-lg:mx-auto flex justify-center items-center">
          <LottieAnime anime={updateLottie} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[800px] x-auto bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            Booking Details
          </h2>

          {/* Read-only fields */}
          <div className="space-y-2">
            <label className="text-gray-300 font-medium">Service</label>
            <input
              type="text"
              value={booking.serviceName}
              readOnly
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 cursor-not-allowed"
            />

            <label className="text-gray-300 font-medium">Price</label>
            <input
              type="text"
              value={`$${booking.servicePrice}`}
              readOnly
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 cursor-not-allowed"
            />

            <label className="text-gray-300 font-medium">Booking Date</label>
            <input
              type="text"
              value={new Date(booking.createdAt).toLocaleString()}
              readOnly
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Editable fields */}
          <div className="space-y-2">
            <label className="text-gray-300 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <label className="text-gray-300 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <label className="text-gray-300 font-medium">ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-white shadow-md transition"
          >
            Update Booking
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingUpdateForm;
