import { HeroImageDecoration2 } from "@src/assets/svg/hero-image-decoration-2";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const LoadingImage = () => {
  const size = 155;
  const radius = size / 2;
  const xCoef = (2 * radius * Math.PI) / 360;

  const rotate = useMotionValue(-20);
  const x = useTransform(rotate, value => value * xCoef);

  return (
    <>
      <motion.div
        className="relative flex justify-center"
        >
          <div className="grid grid-cols-2 w-fit h-fit relative md:mr-12">
            <motion.div
              className="relative z-10"
            >
              <div className="absolute -left-4 -bottom-12 origin-center"
              >
                <HeroImageDecoration2 />
              </div>
            </motion.div>
            <motion.div
              className="w-[155px] h-[77.5px] bg-firstColor rounded-b-full"
              style = {{width: size, height: radius, rotate, x, transformOrigin: 'center top' }}
              animate={{ rotate: 20 }}
              transition={{
                repeat: Infinity, repeatType: 'reverse', duration: 2.5, delay: 0.25,
              }}
            />
            <div className="relative">
              <motion.div
                style={{ width: size, height: size, }}
                animate={{ y: [0, -radius, 0],  scale: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, type: 'spring' , duration: 2.5, repeatDelay: 1 }}
                className="bg-thirdColor rounded-full origin-bottom"
              />
              <motion.div
                style={{ width: size, height: radius, bottom: 0 }}
                className="absolute bg-firstColor rounded-t-full origin-bottom"
                animate={{ scale: [0, 1, 0] }}
                transition={{ repeat: Infinity, type: 'spring', duration: 2.5, repeatDelay: 1 }}
              />
            </div>
            <div className="relative flex justify-center items-center">
              <motion.div
                style={{ width: size, height: size }}
                className="bg-secondColor origin-top"
                transition={{ repeat: Infinity, type: 'spring', duration: 2.5, repeatDelay: 0.5, delay: 1.5 }}
              /> 
            </div>

          </div>
      </motion.div>
    </>
  );
};
