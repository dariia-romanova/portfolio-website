import clsx from "clsx";
import type { FC } from "react";
import type { ContainerProps } from "./container.props";

export const Container: FC<ContainerProps>  = ({ children, className }) => {
  return (
    <div className={clsx('2xl:max-w-[1420px] max-w-auto 2xl:mx-auto md:mx-10 mx-6', className)}>
      { children }
    </div>
  );
};
