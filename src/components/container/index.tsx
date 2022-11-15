import type { FC } from "react";
import type { ContainerProps } from "./container.props";

export const Container: FC<ContainerProps>  = ({ children }) => {
  return (
    <div className="2xl:max-w-[1420px] max-w-auto 2xl:mx-auto mx-10">
      { children }
    </div>
  );
};
