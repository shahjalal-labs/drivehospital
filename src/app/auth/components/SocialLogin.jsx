"use client";

import { signIn } from "next-auth/react";
import { Github, Chrome } from "lucide-react"; // Google icon isn't in Lucide, so we’ll use Chrome for simplicity
import Link from "next/link";

export default function SocialLogin() {
  return (
    <>
      <h2 className="divider divider-info">Or</h2>
      <div className="flex flex-col space-y-3 w-full">
        {/* GitHub Login */}
        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 text-gray-200 transition"
        >
          <Github className="w-5 h-5" />
          <span>Continue with GitHub</span>
        </button>

        {/* Google Login */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 text-gray-200 transition"
        >
          <Chrome className="w-5 h-5 text-red-400" />
          <span>Continue with Google</span>
        </button>
      </div>
    </>
  );
}
