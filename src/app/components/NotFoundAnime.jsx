"use client";
import notFoundLottie from "@/notfoundLottie.json";
import LottieAnime from "@/lib/LottieAnime";
import Link from "next/link";

const NotFoundAnime = () => {
  return (
    <div className="mb-10">
      <div className="max-w-[900px] mx-auto -mt-7">
        <LottieAnime anime={notFoundLottie} />
      </div>
      <div className="flex flex-col items-center justify-center  sm:-mt-14 -mt-8">
        <p className=" text-lg text-gray-400">
          The page you're looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="btn btn-info btn-outline mt-2 text-lg font-semibold rounded-full"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundAnime;
