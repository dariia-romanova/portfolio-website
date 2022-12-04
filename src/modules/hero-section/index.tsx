
import type { ChaptersLoaderData } from "~/routes/portfolio/$slug";
import clsx from "clsx";
import { HeroContent } from "./hero-content";
import { HeroSideLink } from "./hero-side-link";
import { HeroLogo } from "./hero-logo";
import { AnimatePresence, motion } from "framer-motion"
import { useHeroSwitchAnimation } from "../../hooks/useHeroSwitchAnimation";
import { getBgColor } from "@src/utils.tsx/getBgColor";


export default function HeroSection({ chapters } : { chapters: ChaptersLoaderData }) {
  const activeChapterIndex = chapters.findIndex(({ isActive }) => isActive);

  const { controls, variants } = useHeroSwitchAnimation({activeId: activeChapterIndex, chapterLength: chapters.length});

  // handle errors
  if (!chapters) {
    return (<>Ops</>)
  }


  const nextSlug = activeChapterIndex >= chapters.length - 1 ? chapters[0].slug : chapters[activeChapterIndex + 1].slug;
  const prevSlug = activeChapterIndex === 0 ? chapters[chapters.length - 1].slug : chapters[activeChapterIndex - 1].slug;

  return (
    <header className="overflow-hidden w-screen h-screen md:block flex flex-col">
      <div className="md:hidden block">
        <HeroLogo />
      </div>

      <div className="flex flex-row w-screen relative h-full">
        {chapters.map(({ id, slug, title, isActive, subtitle }, index) => {
          const color = getBgColor(id);
          return (
          <motion.div
            custom={index}
            variants={variants}
            initial={{ x: 0, y: 0 }}
            animate={controls}
            className={clsx(
              'absolute md:h-screen h-full flex flex-col w-screen overflow-hidden',
              color === 'pink' && 'bg-pink',
              color === 'green' && 'bg-green',
              color === 'blue' && 'bg-blue',
            )}
            key={id}
          >
            <AnimatePresence>
              {isActive ? (
                <motion.div
                  className="md:h-screen flex-col w-[86%] flex"
                  key={`hero-content-${slug}`}
                >
                  <motion.div
                    className="md:block hidden"
                    exit={{ y: -100, opacity: 0 }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ bounceStiffness: 0, duration: 0.5 }}
                  >
                    <HeroLogo />
                  </motion.div>
                  <HeroContent
                    title={title}
                    subtitle={subtitle}
                    nextUrl={`/portfolio/${nextSlug}`}
                    prevUrl={`/portfolio/${prevSlug}`}
                    bgColor={color}
                  />
                </motion.div> 
              ) : (
                <HeroSideLink link={`/portfolio/${slug}`} title={title} />
              )}
            </AnimatePresence>
          </motion.div>
        )})}
      </div>
    </header>
  );
}
