import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justity-center">
          <h2 className="uppercase tracking-widest test-xs text-center text-blue-100 max-w-80 font-mono">
            <span className="text-purple font-bold"> SOFTWARE</span> ↔ DEVELOPER
          </h2>
          <TextGenerateEffect
            className="text-center text-[60px] md:text-5xl lg:text-9xl font-schaboCondensed"
            words="VISHAL PATIL"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl font-hansonBold">
            BASED IN <span className="text-purple">INDIA</span> ㋡
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
