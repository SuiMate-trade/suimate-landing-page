"use client";

import React from "react";

import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full fixed top-0 z-50 backdrop-blur-[3px] flex justify-start items-center py-4 px-5 border-b-[0.4px] border-black-300 gap-5">
      <div className="flex justify-start items-center gap-2">
        <Image
          src="/assets/images/logo-white.png"
          alt="SuiMate"
          width={40}
          height={40}
          unoptimized={true}
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl font-semibold text-black-1000 leading-7 ">
            SuiMate
          </p>
        </div>
        <a href="https://perps.suimate.trade" target="_blank" className="ml-10">
          <p className="text-black-900 text-base font-medium hover:text-blue-200 transition-all duration-200">
            Perps
          </p>
        </a>
        <a href="https://spot.suimate.trade" target="_blank" className="ml-10">
          <p className="text-black-900 text-base font-medium hover:text-blue-200 transition-all duration-200">
            Spot
          </p>
        </a>
        <a
          href="https://liquidity.suimate.trade"
          target="_blank"
          className="ml-10"
        >
          <p className="text-black-900 text-base font-medium hover:text-blue-200 transition-all duration-200">
            Liquidity Supply
          </p>
        </a>
        <a
          href="https://t.me/suimate_defi_helper_bot"
          target="_blank"
          className="ml-10"
        >
          <p className="text-black-900 text-base font-medium hover:text-blue-200 transition-all duration-200">
            DeFi Helper Bot
          </p>
        </a>
      </div>
    </div>
  );
};

export default Header;
