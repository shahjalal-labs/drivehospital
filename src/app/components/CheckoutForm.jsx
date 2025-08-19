"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CheckoutForm({ service }) {
  const router = useRouter();
  console.log(service, "service CheckoutForm.jsx", 5);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingPayload = {
      ...formData,
      service_id: service?._id,
      serviceName: service?.title,
      serviceImg: service?.img,
      servicePrice: service?.price,
    };

    const res = await fetch(`http://localhost:3000/api/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingPayload),
    });

    const respone = await res.json();
    if (respone?.insertedId) {
      toast.success("Booking Successful!");
      setTimeout(() => {
        router.push(`/my-bookings`);
      }, 1500);
    }
    console.log(respone, "respone CheckoutForm.jsx", 38);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-6 rounded-2xl shadow-lg text-gray-200 md:h-screen"
      >
        <h2 className="badge-xl badge-outline badge-info text-2xl font-bold -ml-4">
          Checkout
        </h2>

        <h3 className="text-xl font-semibold text-white">Shipping Address</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
              focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          required
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
              focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          type="text"
          required
          name="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
              focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <div className="flex gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-1/2 p-3 rounded-lg bg-gray-800 border border-gray-700 
                focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            className="w-1/2 p-3 rounded-lg bg-gray-800 border border-gray-700 
                focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition 
              rounded-xl font-semibold text-white shadow-lg"
        >
          Confirm & Continue
        </button>
      </form>
    </div>
  );
}
