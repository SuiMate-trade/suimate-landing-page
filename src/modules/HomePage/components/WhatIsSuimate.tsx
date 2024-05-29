import React from "react";

import Image from "next/image";

const WhatIsSuimate = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
      <p className="text-5xl font-semibold text-black-900">
        What is <span className="text-blue-200">SuiMate</span>?
      </p>
      <p className="max-w-[800px] text-center text-black-800 text-xl">
        Currently in very early stages of development, SuiMate is being built as
        a platform to serve all your DeFi curiosities. SuiMate, once fully
        built, will serve as the first stop for anyone entering the DeFi space
        in the Sui ecosystem.
      </p>
      <p className="text-2xl mt-8 font-semibold text-black-800 ">About Me</p>
      <p className="max-w-[800px] text-center text-black-800 text-xl">
        I am Harsh Kumar Jha. I entered the blockchain space in 2022 when I
        joined Martian Wallet's team as a Founding Engineer. I have seen Aptos
        and Sui blockchains rise from the very beginning to what they are today.
      </p>
      <p className="max-w-[800px] text-center text-black-800 text-xl">
        I strongly believe that the future of DeFi will be built on Sui and I
        want to contribute my part in growing the DeFi ecosystem. Building
        SuiMate is an attempt to make DeFi on Sui accessible to everyone.
      </p>
      <div className="flex w-full justify-center items-center gap-8 mt-2">
        <a href="https://t.me/me_hkj" target="_blank" rel="noreferrer noopener">
          <Image
            src="/assets/images/social/telegram.svg"
            alt="Telegram"
            height={60}
            width={60}
          />
        </a>
        <a
          href="https://twitter.com/defi_or_defuck"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/assets/images/social/twitter.svg"
            alt="X"
            height={60}
            width={60}
            className="rounded-full"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatIsSuimate;
