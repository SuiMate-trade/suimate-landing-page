import React from "react";
import CurrentFeatures from "./components/CurrentFeatures";
import Hero from "./components/Hero";
import WhatIsSuimate from "./components/WhatIsSuimate";

const HomePageModule = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start max-w-[1200px]">
      <Hero />
      <WhatIsSuimate />
      <CurrentFeatures />
    </div>
  );
};

export default HomePageModule;
