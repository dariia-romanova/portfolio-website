import { HeroImageDecoration1 } from "@src/assets/svg/hero-image-decoration-1";
import { HeroImageDecoration2 } from "@src/assets/svg/hero-image-decoration-2";
import { HeroImageDecoration3 } from "@src/assets/svg/hero-image-decoration-3";
import { SchemeColors } from "@src/utils.tsx/colorScemes";
import { useState } from "react";
import type { FC } from "react";
import type { HeroImageProps } from "./hero-image.props";
import { motion } from "framer-motion";
import { TapCursor } from "@src/components/tap-cursor/tap-cursor";

export const HeroImage: FC<HeroImageProps> = ({ bgColor }) => {
  const [showTapCursor, setShowCursor] = useState(false);

  return (
    <>
      <TapCursor isShown={showTapCursor} />
    
      <motion.div
        className="relative cursor-none"
        onMouseEnter={() => {setShowCursor(true)}}
        onMouseLeave={() => {setShowCursor(false)}}
      >
        {bgColor === SchemeColors.First ? (
          <div className="grid grid-cols-2 w-fit h-fit relative md:mr-12">
            <div className="w-[105px] h-[105px] bg-basic justify-self-center rounded-full" />
            <div className="w-[210px] h-[105px] bg-black rounded-t-full" />
            <div className="w-[210px] h-[210px] bg-firstColorLighter" />
            <div className="w-[210px] h-[210px] bg-thirdColor rounded-full" />
            <div className="absolute right-0 bottom-0 translate-x-1/2">
              <HeroImageDecoration1 inverted />
            </div>
          </div>
        ) : bgColor === SchemeColors.Second ? (
          <div className="flex flex-col md:mr-12">
            <div className="relative self-end">
              <div className="w-[210px] h-[105px] bg-black rounded-b-full" />
              <div className="absolute left-0 bottom-0 -translate-x-2/3">
                <HeroImageDecoration2 inverted />
              </div>
            </div>
            <div className="flex">
              <div className="w-[210px] h-[105px] bg-firstColor" />
              <div className="w-[105px] h-[105px] bg-basic rounded-full translate-y-2" />
            </div>
            <div className="w-[210px] h-[210px] bg-thirdColor rounded-full self-end" />
          </div>
        ) : (
          <div className="flex relative items-end md:mr-12">
            <div className=" flex flex-1 flex-col items-center translate-x-10">
              <div className="w-[105px] h-[105px] bg-basic rounded-full flex items-center justify-center" >
                <div className="w-[50px] h-[50px] bg-black rounded-full" />
              </div>
              <div className="w-[210px] h-[105px] border-black border-[50px] border-b-transparent rounded-t-full" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[105px] h-[105px] bg-firstColorLighter rounded-full" />
              <div className="w-[210px] h-[105px] bg-secondColor rounded-b-full" />
              <div className="w-[210px] h-[210px] bg-firstColor" />
            </div>

            <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-2">
              <HeroImageDecoration3 inverted />
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};