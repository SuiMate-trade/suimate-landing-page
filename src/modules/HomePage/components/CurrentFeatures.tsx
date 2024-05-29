import React from "react";

const CurrentFeatures = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <p className="text-5xl font-semibold text-black-900">
        What can users do with <span className="text-blue-200">SuiMate</span>{" "}
        currently?
      </p>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <div className="w-full flex justify-center items-stretch gap-5">
          <div className="bg-gradient-1 py-3 px-4 rounded border-glass-1 flex flex-col w-full justify-center items-center gap-2 border border-transparent hover:border-black-700">
            <p className="text-xl text-center text-black-1000">
              Analyze and copy trades placed on perp DEXs
            </p>
            <p className="text-black-700 text-center text-sm">
              Have a habit of copying trades on CEXs and want to do the same on
              on Perp DEXs? SuiMate has got you covered. You can view the trades
              placed by any address on Perp DEXs and get realtime alerts on your
              Telegram whenever they place a trade.
            </p>
          </div>
          <div className="bg-gradient-1 py-3 px-4 rounded border-glass-1 flex flex-col w-full justify-center items-center gap-2 border border-transparent hover:border-black-700">
            <p className="text-xl text-center text-black-1000">
              View the spot exchanges and holdings of any address
            </p>
            <p className="text-black-700 text-center text-sm">
              Curios about what crypto the biggest players in DeFi space are
              holding? SuiMate is here to get you the answers. You can see the
              past spot exchanges and the current holdings, and get alerts
              whenever a trader buys or sells a token.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-stretch gap-5">
          <div className="bg-gradient-1 py-3 px-4 rounded border-glass-1 flex flex-col w-full justify-center items-center gap-2 border border-transparent hover:border-black-700">
            <p className="text-xl text-center text-black-1000">
              Check where the rich guys have provided liquidity
            </p>
            <p className="text-black-700 text-center text-sm">
              Now that you own some tokens, you might want to know where the big
              players are providing liquidity. On SuiMate, You can see the
              liquidity provided by any address on any DEX and the total amount
              of rewards they have claimed from each pool.
            </p>
          </div>
          <div className="bg-gradient-1 py-3 px-4 rounded border-glass-1 flex flex-col w-full justify-center items-center gap-2 border border-transparent hover:border-black-700">
            <p className="text-xl text-center text-black-1000">
              Get realtime alerts directly on your Telegram
            </p>
            <p className="text-black-700 text-center text-sm">
              Never miss the right time of entry or exit on any trade. On
              SuiMate, turn on the alerts for any address and get notified on
              your Telegram whenever they place a trade on perp dex, make a spot
              exchange, provide liquidity, or claim rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentFeatures;
