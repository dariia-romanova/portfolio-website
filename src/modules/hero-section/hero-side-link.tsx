
import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { HeroSideLinkProps } from "./hero-side-link.props";
import { motion } from 'framer-motion';

export const HeroSideLink: FC<HeroSideLinkProps> = ({ link, title }) => {

  return (
    <>
      <Link to={link} className="md:flex hidden flex-1 relative w-[7%]">
        <motion.div
          className="absolute left-1/2 2xl:bottom-20 bottom-6 w-screen origin-left -rotate-90 h-fit font-serif text-basic xl:text-lg sm:text-md text-sm"
          initial={{ y: 200, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: -90,  opacity: 1 }}
          transition={{ bounceStiffness: 0, delay: 0.3, duration: 0.7 }}
          >
          {title} 
        </motion.div>
      </Link>

      <Link to={link} className="md:hidden flex w-full py-3 px-6 h-[10%]">
        <motion.div
          className="flex font-serif text-basic sm:text-md text-sm w-full items-center"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ bounceStiffness: 0, delay: 0.3, duration: 0.7 }}
        >
          {title}
        </motion.div>
      </Link>
    </>
  );
}
