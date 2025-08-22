"use client";
import LottieAnime from "@/lib/LottieAnime";
import AuthLottieJson from "@/authLottie.json";
export const Authlayout = ({ children }) => {
  return (
    <div className="pb-10 border">
      <h2>Auth Layout</h2>
      <div className="lg:flex  ">
        <div className="max-w-[450px] mx-auto">
          <LottieAnime anime={AuthLottieJson} />
        </div>
        <div className="max-w-[450px] mx-auto border">{children}</div>
      </div>
    </div>
  );
};

export default Authlayout;
