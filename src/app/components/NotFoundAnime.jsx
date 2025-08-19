"use client";
import notFoundLottie from "@/notfoundLottie.json";
import LottieAnime from "@/lib/LottieAnime";

const NotFoundAnime = () => {
  return (
    <div>
      <LottieAnime anime={notFoundLottie} />
    </div>
  );
};

export default NotFoundAnime;
