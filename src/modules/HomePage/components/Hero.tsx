import React from "react";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-1 relative">
      <Image
        src="/assets/images/logo-white.png"
        alt="SuiMate"
        width={100}
        height={100}
        unoptimized={true}
      />
      <p className="text-6xl text-black-1000 font-semibold">SuiMate</p>
      <p className="text-2xl text-blue-200">
        A platform to analyze and get insights on all on-chain activity in the
        Sui DeFi space
      </p>
      <div className="absolute bottom-8 left-[50%] translate-x-[-50%] flex flex-col items-center justify-center">
        <p className="text-black-700 text-base">Scroll to know more</p>
        <Image
          src="/assets/images/arrow-down.svg"
          alt="Arrow Down"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Hero;
