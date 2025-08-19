"use client";
import notFoundLottie from "@/notfoundLottie.json";
import LottieAnime from "@/lib/LottieAnime";

const NotFoundAnime = () => {
  return (
    <div className="mb-10">
      <div className="max-w-[900px] mx-auto">
        <LottieAnime anime={notFoundLottie} />
      </div>
      <div className="flex flex-col items-center justify-center  -mt-24">
        <p className="mt-6 text-lg text-gray-400">
          The page you're looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="btn btn-info btn-outline mt-3 text-lg font-semibold rounded-full"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundAnime;
