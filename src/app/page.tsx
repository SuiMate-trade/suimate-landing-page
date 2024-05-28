import Header from "@/components/Header";
import HomePageModule from "@/modules/HomePage";

export async function generateMetadata() {
  return {
    title: "SuiMate - The only platform for all things DeFi on Sui",
    description:
      "SuiMate is a platform built to cater to all your DeFi needs on Sui. From copy trading to liquidity provision to spot exchanges, we have it all. Not sure how to manage your crypto assets? Checkout where big traders have their money invested on SuiMate.",
  };
}

export default function Index() {
  return (
    <div className="w-full flex justify-center items-center relative overflow-hidden max-h-screen">
      <Header />
      <div className="w-full flex justify-center items-center z-10">
        <HomePageModule />
      </div>
      <img
        src="/assets/images/background.png"
        alt="SuiMate"
        className="absolute top-0 left-0 w-full h-full object-cover bottom-0 right-0 z-0"
      />
    </div>
  );
}
