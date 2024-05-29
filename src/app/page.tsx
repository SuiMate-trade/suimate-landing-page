import Header from "@/components/Header";
import HomePageModule from "@/modules/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SuiMate - The only platform for all things DeFi on Sui",
  description:
    "A platform to analyze and get insights on all on-chain activity in the Sui DeFi space",
  applicationName: "SuiMate",
  authors: {
    name: "Harsh Kumar Jha",
    url: "https://x.com/defi_or_defuck",
  },
  icons: [
    {
      rel: "icon",
      url: "https://www.suimate.trade/assets/images/meta-image.png",
    },
    {
      rel: "apple-touch-icon",
      url: "https://www.suimate.trade/assets/images/meta-image.png",
    },
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@defi_or_defuck",
    images: "https://www.suimate.trade/assets/images/meta-image.png",
    title: "SuiMate",
    description:
      "A platform to analyze and get insights on all on-chain activity in the Sui DeFi space",
  },
};

export default function Index() {
  return (
    <div className="w-full flex justify-center items-start relative overflow-auto max-h-screen">
      <Header />
      <div className="w-full flex justify-center items-start z-10">
        <HomePageModule />
      </div>
      <img
        src="/assets/images/background.png"
        alt="SuiMate"
        className="fixed top-0 left-0 w-full h-full object-cover bottom-0 right-0 z-0"
      />
    </div>
  );
}
