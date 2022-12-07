import { Link } from "@remix-run/react";
import { useColorScheme } from "@src/hooks/useColorScheme";
import { SchemeColors } from "@src/utils.tsx/colorScemes";
import clsx from "clsx";
import type { FC } from "react";
import type { ArrowButtonProps } from "./arrow-button.props";

export const ArrowButton: FC<ArrowButtonProps> = ({ direction, url, inverted }) => {
  const { colorScheme: { mainColor } } = useColorScheme();

  return (
    <Link
      to={url}
      className={clsx(
        'border-2 rounded-full md:w-14 md:h-14 w-10 h-10 flex justify-center items-center',
        mainColor === SchemeColors.First && 'border-firstColor',
        mainColor === SchemeColors.Second && 'border-secondColor',
        mainColor === SchemeColors.Third && 'border-thirdColor',
        inverted && 'border-basic'
      )}
    >
      <div className={clsx(
        'w-0 h-0',
        mainColor === SchemeColors.First && 'border-firstColor',
        mainColor === SchemeColors.Second && 'border-secondColor',
        mainColor === SchemeColors.Third && 'border-thirdColor',
        direction === 'next' && 'md:border-y-[12px] border-y-[9px] border-y-transparent md:border-l-[22px] border-l-[16px] translate-x-1 ',
        direction === 'next' && inverted && 'border-l-basic',
        direction === 'prev' && 'md:border-y-[12px] border-y-[9px]  border-y-transparent md:border-r-[22px] border-r-[16px] -translate-x-1',
        direction === 'prev' && inverted && 'border-r-basic',
        direction === 'up' && 'md:border-x-[12px] border-x-[9px] border-x-transparent md:border-b-[22px] border-b-[16px] -translate-y-1',
        direction === 'up' && inverted && 'border-b-basic',
      )} />
    </Link>
  );
};
