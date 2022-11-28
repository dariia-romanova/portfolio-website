import { Link } from "@remix-run/react";
import clsx from "clsx";
import type { FC } from "react";
import type { ArrowButtonProps } from "./arrow-button.props";

export const ArrowButton: FC<ArrowButtonProps> = ({ direction, url }) => {
  return (
    <Link to={url} className="border-basic border-2 rounded-full w-14 h-14 flex justify-center items-center">
      <div className={clsx(
        'w-0 h-0 border-y-[12px] border-y-transparent',
        direction === 'next' && 'border-l-[22px] border-l-basic translate-x-1',
        direction === 'prev' && 'border-r-[22px] border-r-basic -translate-x-1'
      )} />
    </Link>
  );
};
