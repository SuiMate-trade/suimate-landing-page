import React from "react";

import Image from "next/image";

const Conclusion = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <p className="text-black-1000 text-xl text-center">
        These are just some basic ideas that I am planning to build on. In my
        imagination, SuiMate will one day become a platform that a user opens on
        a daily basis to get insights on what's happening in Sui DeFi space, see
        what the other people think about the DeFi protocols, the trading
        strategies of a trader, or the investment plannings, while also getting
        some new knowledge about new developments in DeFi everyday.
      </p>
      <p className="text-black-1000 text-xl text-center">
        Working hard to make this imagination a reality. Stay tuned! 🚀
      </p>
      <p className="text-black-1000 text-xl text-center">Contact me at:</p>
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

export default Conclusion;
