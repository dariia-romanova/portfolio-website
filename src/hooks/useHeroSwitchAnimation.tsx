import useSmallScreens from "@src/hooks/useSmallSceens";
import { useAnimation } from "framer-motion";
import { useEffect } from "react"

export const useHeroSwitchAnimation = ({
  activeId,
  chapterLength,
  mobileHeighPercentage = 10,
  desktopWidthPercentage = 7
} : {
  activeId: number,
  chapterLength: number,
  mobileHeighPercentage?: number,
  desktopWidthPercentage?: number
}) => {
  const controls = useAnimation();
  const isSmallScreen = useSmallScreens();

  const animationDirections = {
    vertical: (id: number) => ({
      x: 0,
      y: id <= activeId ? `${id * mobileHeighPercentage}%` : `${100 - (chapterLength - id) * mobileHeighPercentage}%`,
      transition: {
        ease: "easeOut", duration: 1,
      }
    }),
    verticalInstant: (id: number) => ({ 
      x: 0,
      y: id <= activeId ? `${id * mobileHeighPercentage}%` : `${100 - (chapterLength - id) * mobileHeighPercentage}%`,
      transition: {
        duration: 0,
      }
    }),
    horizontal: (id: number) => ({ 
      y: 0,
      x: id <= activeId ? `${id * desktopWidthPercentage}%` : `${100 - (chapterLength - id) * desktopWidthPercentage}%`,
      transition: {
        ease: "easeOut", duration: 1,
      }
    }),
    horizontalInstant: (id: number) => ({ 
      y: 0,
      x: id <= activeId ? `${id * desktopWidthPercentage}%` : `${100 - (chapterLength - id) * desktopWidthPercentage}%`,
      transition: {
        duration: 0,
      }
    }),
  }

  useEffect(() => {
    controls.start(isSmallScreen ? 'horizontal' : 'vertical')
  }, [activeId, controls])

  useEffect(() => {
    controls.start(isSmallScreen ? 'horizontalInstant' : 'verticalInstant')
  }, [isSmallScreen])

  return { controls, variants: animationDirections };
}