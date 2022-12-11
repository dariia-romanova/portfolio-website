import { Link } from "@remix-run/react";
import clsx from "clsx";
import type { FC } from "react";
import type { LogoProps } from "./logo.props";

export const Logo: FC<LogoProps> = ({ inverted }) => {
  return (
    <Link
      to="/"
      className={clsx(
        'font-serif lg:text-lg text-sm md:text-basic text-firstColor',
        inverted && 'text-black',
      )}
      prefetch="intent"
    >
      <span className="font-bold">_</span>
      dashimi
    </Link>
  );
};
