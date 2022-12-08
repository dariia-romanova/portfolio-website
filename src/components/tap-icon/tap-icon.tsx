import clsx from "clsx";
import { motion } from "framer-motion";
import { useColorScheme } from "@src/hooks/useColorScheme";
import { SchemeColors } from "@src/utils.tsx/colorScemes";

export const TapIcon = () => {
  const { colorScheme: { mainColor } } = useColorScheme()

  return (
    <div className="relative flex items-center justify-center">
      <motion.div 
        className="absolute rounded-full w-16 h-16 bg-basic "
        animate={{
          scale: [1, 1.5],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className={clsx(
          'absolute w-14 h-14 rounded-full text-basic text-sm z-10 flex items-center justify-center ',
          mainColor === SchemeColors.First && 'bg-firstColor',
          mainColor === SchemeColors.Second && 'bg-secondColor',
          mainColor === SchemeColors.Third && 'bg-thirdColor'
        )}
        animate={{
          scale: [1, 1.5],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.1,
        }}
      />
      <motion.div
        className={clsx(
          'w-14 h-14 rounded-full relative text-basic text-smd font-serif font-bold p-2 z-10 flex items-center justify-center ',
          mainColor === SchemeColors.First && 'bg-firstColor',
          mainColor === SchemeColors.Second && 'bg-secondColor',
          mainColor === SchemeColors.Third && 'bg-thirdColor'
        )}
      >
        tap
      </motion.div>
    </div>
  )
}