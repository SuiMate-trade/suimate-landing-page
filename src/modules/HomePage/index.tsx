import React from "react";
import Conclusion from "./components/Conclusion";
import CurrentFeatures from "./components/CurrentFeatures";
import DetailedFuturePlans from "./components/DetailedFuturePlans";
import FuturePlans from "./components/FuturePlans";
import Hero from "./components/Hero";
import WhatIsSuimate from "./components/WhatIsSuimate";

const HomePageModule = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start max-w-[1200px]">
      <Hero />
      <WhatIsSuimate />
      <CurrentFeatures />
      <FuturePlans />
      <DetailedFuturePlans />
      <Conclusion />
    </div>
  );
};

export default HomePageModule;
