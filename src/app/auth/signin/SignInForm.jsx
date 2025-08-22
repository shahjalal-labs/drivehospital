"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function SignInForm() {
  const router = useRouter();
  const handleSignIn = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({
      email,
      password,
    });

    try {
      const res = await signIn("credentials", {
        email,
        password,
        // callbackUrl: "/",
        redirect: false,
      });
      console.log(res, "[1;31mres in SignInForm.jsx at line 20[0m");

      if (res?.ok) {
        toast.success("Sign in successful!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      toast.error("Sign in failed: " + (error?.message || "Unknown error"));
      console.log("error from signin ", error);
    }
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="space-y-6 p-6 border rounded-lg shadow border-purple-500"
    >
      <h2 className="text-2xl font-bold text-center">Sign In</h2>

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
        className="w-full text-white font-bold py-2 btn btn-info rounded-full btn-outline"
      >
        Sign In
      </button>
      <p className="underline">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-blue-500">
          Register now
        </Link>
      </p>
    </form>
  );
}
