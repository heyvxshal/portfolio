"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";

import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { LinkPreview } from "./linkPreview";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("heyvxshal@gmail.com");

    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{ background: "#000" }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className={`w-full h-full absolute`}>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          <img
            src={spareImg}
            alt={spareImg}
            className={"object-cover, object-center,w-full,h-full"}
          />
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className="font-agrandirRegular font-normal text-[#c1c2d3] text-xm md:text-xs lg:text-base z-10
"
          >
            {description}
          </div>

          <div
            className={`font-agrandirRegular text-lg lg:text-2xl max-w-96 z-10
`}
          >
            {title}
          </div>

          {/* github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {["ReactJS", "Express", "Typescript"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center  text-neutral-400  bg-[#0d0d0d]"
                  >
                    {item}
                  </span>
                ))}

                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#000]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#000]"></span>

                {["VueJS", "NuxtJS", "GraphQL"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center text-neutral-400 bg-[#0d0d0d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="flex justify-center items-center h-[20rem] flex-col px-2">
              <p className="font-agrandirRegular text-justify text-lg lg:text-2xl text-neutral-500 dark:text-neutral-400 md:text-3xl max-w-3xl mx-auto mb-10">
                I am a 20 year old engineer who&apos;s all about{" "}
                <LinkPreview url="https://x.com/heyvxshal">
                  building cool stuff.
                </LinkPreview>{" "}
                I love diving into{" "}
                <LinkPreview
                  url="https://x.com/heyvxshal"
                  className="font-bold"
                >
                  new technologies
                </LinkPreview>{" "}
                and picking up fresh skills to create{" "}
                <LinkPreview url="https://x.com/heyvxshal">
                  awesome products
                </LinkPreview>{" "}
                that make a difference.
              </p>
              <p className="font-agrandirRegular text-justify text-lg lg:text-2xl text-neutral-500 dark:text-neutral-400 md:text-3xl max-w-3xl mx-auto">
                Whether it&apos;s coding up a storm or{" "}
                <LinkPreview url="https://x.com/heyvxshal">
                  brainstorming innovative designs,
                </LinkPreview>{" "}
                I&apos;m on a mission to bring ideas to life and solve
                real-world problems.
              </p>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "XMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
