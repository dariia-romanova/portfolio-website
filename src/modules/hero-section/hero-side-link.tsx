
import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { HeroSideLinkProps } from "./hero-side-link.props";

export const HeroSideLink: FC<HeroSideLinkProps> = ({ link, title }) => {

  return (
    <>
      <Link to={link} className="md:flex hidden flex-1 relative w-[7%]">
        <div className="absolute left-1/2 2xl:bottom-20 bottom-6 w-screen origin-left -rotate-90 h-fit font-serif text-basic xl:text-lg sm:text-md text-sm">
          {title} 
        </div>
      </Link>

      <Link to={link} className="md:hidden flex w-full py-3 px-6 h-[10%]">
        <div className="flex font-serif text-basic sm:text-md text-sm w-full items-center">
          {title}
        </div>
      </Link>
    </>
  );
}
