"use client";

import React from "react";
// import { registerUser } from "@/app/actions/auth/registerUser";

export default function SignupForm() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(`name: ${name}, email: ${email}, password: ${password}`);
    /* try {
      // Call your server action
      const res = await registerUser({ name, email, password });

      if (res?.success) {
        alert("✅ User registered successfully!");
        form.reset();
      } else {
        alert("❌ Registration failed: " + (res?.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("⚠️ Something went wrong.");
    } */
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-full max-w-md mx-auto space-y-6 p-6 border rounded-lg shadow border-purple-500"
    >
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>

      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="input input-bordered w-full mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="input input-bordered w-full mt-1"
        />
      </div>

      <div>
        <label className="block font-medium">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="input input-bordered w-full mt-1"
        />
      </div>

      <button
        type="submit"
        className="w-full  text-white font-bold py-2  btn btn-info rounded-full btn-outline"
      >
        Sign Up
      </button>
    </form>
  );
}
