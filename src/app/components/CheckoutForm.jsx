"use client";
import { useState } from "react";

export default function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onSubmit?.(formData);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-900 p-6 rounded-2xl shadow-lg text-gray-200"
      >
        <h2 className="badge-xl badge-outline badge-info text-2xl font-bold -ml-4">
          Checkout
        </h2>

        <h3 className="text-xl font-semibold text-white">Shipping Address</h3>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
              focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
              focus:ring-2 focus:ring-purple-500 outline-none"
        />

        <input
          type="text"
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
