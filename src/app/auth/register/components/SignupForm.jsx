"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin";
// import { registerUser } from "@/app/actions/auth/registerUser";

export default function SignupForm() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // Call your server action
      const res = await registerUser({ username, email, password });

      if (res?.insertedId) {
        toast.success("Registration successful!");
      } else {
        toast.error(
          "Registration failed: " + (res?.message || "Unknown error"),
        );
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("⚠️ Something went wrong.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className=" space-y-6 p-6 border rounded-lg shadow border-purple-500"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="username"
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
        <p className="underline">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </form>
      <SocialLogin />
    </>
  );
}
