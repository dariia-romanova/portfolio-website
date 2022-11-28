
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getChapterListings } from "~/models/chapters.server";
import clsx from "clsx";
import { HeroContent } from "./hero-content";
import { HeroSideLink } from "./hero-side-link";
import { HeroLogo } from "./hero-logo";
import { AnimatePresence, motion } from "framer-motion"
import useSmallScreens from "~/hooks/useSmallSceens";

type LoaderData = ReturnType<typeof getChapterListings>

export const loader: LoaderFunction = ({ params }) => {
  const chaptersList = getChapterListings(params?.slug);

  return json<LoaderData>(chaptersList)
}

export default function HeroSection() {
  const isSmallScreen = useSmallScreens();
  const chapters = useLoaderData() as LoaderData;

  if (!chapters) {
    return (<>Ops</>)
  }

  const animationDirections = {
    vertical: (id: number) => ({ 
      y: id <= activeId ? `${id * 10}%` : `${100 - (chapters.length - id) * 10}%` ,
    }),
    horizontal: (id: number) => ({ 
      x: id <= activeId ? `${id * 7}%` : `${100 - (chapters.length - id) * 7}%`,
    }),
  }

  const activeChapter = chapters.find(({ isActive }) => isActive);
  const activeId = activeChapter ? activeChapter.id : 5;
  const nextSlug = activeId >= chapters.length - 1 ? chapters[0].slug : chapters[activeId + 1].slug;
  const prevSlug = activeId === 0 ? chapters[chapters.length - 1].slug : chapters[activeId - 1].slug;

  return (
    <header className="overflow-y-hidden w-screen h-screen md:block flex flex-col">
      <div className="md:hidden block">
        <HeroLogo />
      </div>

      <div className="flex flex-row w-screen relative h-full">
        {chapters.map(({ id, slug, title, isActive, color, description }) => (
          <motion.div
            custom={id}
            variants={animationDirections}
            initial={{ x: 0, y: 0}}
            animate={isSmallScreen ? 'horizontal' : 'vertical'}
            transition={{ ease: "easeOut", duration: 1 }}
            className={clsx(
              'absolute md:h-screen h-full flex flex-col w-screen',
              color === 'pink' && 'bg-pink',
              color === 'green' && 'bg-green',
              color === 'blue' && 'bg-blue',
            )}
            key={id}
          >
            <AnimatePresence>
              {isActive ? (
                <motion.div className="md:h-screen flex-col w-[86%] flex" exit={{ opacity: 0 }} key={`hero-content-${slug}`}>
                  <div className="md:block hidden">
                    <HeroLogo />
                  </div>
                  <HeroContent
                    title={title}
                    subtitle={description}
                    nextUrl={`/portfolio/${nextSlug}`}
                    prevUrl={`/portfolio/${prevSlug}`}
                  />
                </motion.div> 
              ) : (
                <HeroSideLink link={`/portfolio/${slug}`} title={title} />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </header>
  );
}
