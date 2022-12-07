import { Link } from "react-router-dom";
import { ArrowButton } from "../../components/arrow-button";
import { Container } from "../../components/container"
import type { FC } from "react";
import type { HeroContentProps } from "./hero-content.props";
import { motion } from 'framer-motion';
import { HeroImage } from "./hero-image";
  

export const HeroContent:FC<HeroContentProps> = ({ title, subtitle, prevUrl, nextUrl, bgColor }) => {
  return (
    <section className="h-full 2xl:pt-24 2xl:pb-24 xl:pb-12 lg:pt-0 lg:pb-8 py-6">
      <Container className="flex flex-col justify-between h-full">
        <div className="grid md:grid-cols-2 gap-14 grid-cols-1 items-center">
            <motion.div
              exit={{ y: -100, opacity: 0 }}
              transition={{ bounceStiffness: 0, delay: 0.1, duration: 0.5 }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <h1 className="2xl:mb-6 xl:mb-4 sm:mb-2 mb-1 font-serif 2xl:text-4xl xl:text-3xl sm:text-xxl text-lg text-basic font-bold leading-tight">
                {title}
              </h1>

              <p className="font-serif xl:text-lg sm:text-md text-sm text-basic ">{subtitle}</p>
            </motion.div>
          <div className="justify-self-end">
            <HeroImage bgColor={bgColor} />
          </div>
        </div>

        <motion.div
          className="flex justify-between lg:mt-4 2xl:mt-6 xl:mt-4 sm:mt-2 mt-1"
          exit={{ y: -100, opacity: 0 }}
          transition={{ bounceStiffness: 0, delay: 0.2, duration: 0.5 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link to="./details" className="text-basic font-serif xl:text-lg sm:text-md text-sm font-bold">
            Read more
          </Link>

          <div className="md:flex hidden gap-x-6 items-center">
            <ArrowButton direction="prev" url={prevUrl} inverted />
            <ArrowButton direction="next" url={nextUrl} inverted />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
