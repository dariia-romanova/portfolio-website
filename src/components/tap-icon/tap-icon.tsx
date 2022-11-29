import { motion } from "framer-motion";

export const TapIcon = () => {
  return (
    <div className="relative flex items-center justify-center">
    <motion.div
      className="absolute rounded-full border border-basic w-10 h-10"
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
        className="absolute rounded-full border border-basic w-10 h-10"
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
      <div className=" text-basic text-sm font-serif p-2">
        tap
      </div>
    </div>
  )
}