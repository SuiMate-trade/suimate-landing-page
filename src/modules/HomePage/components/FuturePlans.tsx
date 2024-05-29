import React from "react";

const FuturePlans = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-2">
      <p className="text-5xl font-semibold text-black-900">
        What the future of <span className="text-blue-200">SuiMate</span> will
        look like
      </p>
      <p className="text-base text-black-800 text-center">
        Along with the current sub platforms that SuiMate has for copy trading
        and analyzing on-chain activities in DeFi
        <br />
        SuiMate will soon include some new platforms:
      </p>
      <div className="bg-gradient-1 py-2 px-2 rounded border-glass-1 flex flex-col w-2/3 justify-center items-center gap-2 border border-transparent hover:border-black-700">
        <p className="text-base text-center text-black-1000">
          A social media platform for all DeFi traders, the degens, and the
          intelligent apes
        </p>
      </div>
      <div className="bg-gradient-1 py-2 px-2 rounded border-glass-1 flex flex-col w-2/3 justify-center items-center gap-2 border border-transparent hover:border-black-700">
        <p className="text-base text-center text-black-1000">
          A very comprehensive liquidity pools analytics platform
        </p>
      </div>
      <div className="bg-gradient-1 py-2 px-2 rounded border-glass-1 flex flex-col w-2/3 justify-center items-center gap-2 border border-transparent hover:border-black-700">
        <p className="text-base text-center text-black-1000">
          An extensive educational platform for traders who are new to DeFi and
          want to learn
        </p>
      </div>
    </div>
  );
};

export default FuturePlans;
