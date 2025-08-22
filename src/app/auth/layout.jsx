"use client";
import LottieAnime from "@/lib/LottieAnime";
import AuthLottieJson from "@/authLottie.json";
import SocialLogin from "./components/SocialLogin";
export const Authlayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="max-w-6xl mx-auto order">
        <div className="lg:flex  ">
          <div className="max-w-[450px] mx-auto">
            <LottieAnime anime={AuthLottieJson} />
          </div>
          <div className="lg:w-[450px] max-w-[450px] mx-auto flex justify-center items-center ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
