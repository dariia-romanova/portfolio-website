import clsx from "clsx";
import { motion } from "framer-motion";
import { useColorScheme } from "@src/hooks/useColorScheme";
import { SchemeColors } from "@src/utils.tsx/colorScemes";

export const TapIcon = () => {
  const { colorScheme: { mainColor } } = useColorScheme()

  return (
    <div className="relative flex items-center justify-center">
    <motion.div
      className="absolute rounded-full border-[2px] border-basic w-14 h-14"
      animate={{
        scale: [1, 2],
        opacity: [0, 1, 1, 1, 1, 0],
      }}
      transition={{
        duration: 1.8,
        ease: 'linear',
        repeat: Infinity,
        repeatDelay: 1.2,
      }}
    />
      <motion.div 
        className="absolute rounded-full border-[2px] border-basic w-14 h-14"
        animate={{
          scale: [1, 1.5],
          opacity: [0, 1, 1, 1, 1, 0]
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
          delay: 0.5,
          repeatDelay: 1,
        }}
      />
      <div className={clsx(
        'w-14 h-14 rounded-full relative text-basic text-sm font-serif p-2 z-10 flex items-center justify-center',
        mainColor === SchemeColors.First && 'bg-firstColor',
        mainColor === SchemeColors.Second && 'bg-secondColor',
        mainColor === SchemeColors.Third && 'bg-thirdColor'
      )}>
        tap
      </div>
    </div>
  )
}