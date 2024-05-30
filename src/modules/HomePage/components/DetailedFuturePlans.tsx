import React from "react";

const DetailedFuturePlans = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-1/2 bg-gradient-1 py-5 px-4 rounded border-glass-1 flex gap-2 flex-col items-center justify-center self-start ml-4 -mb-2">
        <p className="text-xl text-center text-black-1000">
          Social media for all things in DeFi
        </p>
        <p className="text-black-700 text-center text-sm">
          A new social media type platform will be built where any new on-chain
          trade or other DeFi activity from any address will be posted and users
          can comment, like, and share the posts. <br />
          Let's say a big trader opened a high leverage position on a perp DEX,
          that trade will be posted and users can discuss in the comments,
          applaud the trader, or criticize him for being a degen. Everyone will
          be open to share their thoughts on any on-chain activity.
        </p>
      </div>
      <div className="w-1/2 bg-gradient-1 py-5 px-4 rounded border-glass-1 flex gap-2 flex-col items-center justify-center self-end mr-4 -mt-2">
        <p className="text-xl text-center text-black-1000">
          Follow your favorite traders and optimize your feed
        </p>
        <p className="text-black-700 text-center text-sm">
          Just as any other social media platform, you will find all kinds of
          traders on SuiMate, be it the intelligent ones, the big players, the
          market manipulators, the degens and the noobs getting liquidated.{" "}
          <br /> It's upto you to follow the traders you like and optimize your
          feed to see the posts from your favorite traders first. You can also
          set alerts for any trader and get notified whenever they place a
          trade.
        </p>
      </div>
      <div className="w-1/2 bg-gradient-1 py-5 px-4 rounded border-glass-1 flex gap-2 flex-col items-center justify-center self-start ml-4 -mt-4">
        <p className="text-xl text-center text-black-1000">
          Tip traders if their trade strategy made you money
        </p>
        <p className="text-black-700 text-center text-sm">
          The world has enough noob people tipping influencers on OnlyFans for
          just posting a picture. But SuiMate will give you a chance to be a
          grateful degen! <br />
          If you have been following a trader and their trade strategy for some
          time, and it has helped you grow your portfolio, you can tip them some
          Sui. This will be a great way to show your appreciation and motivate
          the traders to trade more on DEXs rather than a CEX.
        </p>
      </div>
      <div className="w-1/2 bg-gradient-1 py-5 px-4 rounded border-glass-1 flex gap-2 flex-col items-center justify-center self-end mr-4 -mt-4">
        <p className="text-xl text-center text-black-1000">
          Fund a pool for a trader, get a share of the profits
        </p>
        <p className="text-black-700 text-center text-sm">
          Have you got enough trust in a trader and are very sure that they will
          make profits? How about you lend your money to that trader and get a
          share of the profits? <br />
          SuiMate will allow you to fund a pool for a trader. The trader can use
          the funds to place a trade, condition being that 80% of the trade's
          margin will be his own funds, and only 20% comes from the pool. Get
          your share of profits when the trader makes a profitable trade.
        </p>
      </div>
      <div className="w-1/2 bg-gradient-1 py-5 px-4 rounded border-glass-1 flex gap-2 flex-col items-center justify-center self-start ml-4 -mt-4">
        <p className="text-xl text-center text-black-1000">
          Learn about DeFi, trade responsibly, and don't be a degen!
        </p>
        <p className="text-black-700 text-center text-sm">
          SuiMate's idea, and my personal views will always be in educating the
          traders about the DeFi stuff, rather than simply giving them a
          platform to copy trade. A good trader is a responsible trader who
          understands things. <br /> Don't blindly put your money in CLMMs, just
          holding the right tokens will most probably make you more money.
          SuiMate will also serve as an educational platform, teaching the users
          about how things in DeFi work, and then go deeper into how to make the
          most profits out of it.
        </p>
      </div>
    </div>
  );
};

export default DetailedFuturePlans;
