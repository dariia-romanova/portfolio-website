import clsx from "clsx"
import type { FC } from "react"
import type { H2Props } from "./h2.props"

export const H2: FC<H2Props> = ({ title, className }) => {
  return (
    <h2
      className={clsx(
        '2xl:text-xxl lg:text-xl text-lg font-bold lg:pb-12 pb-3',
        className
      )}
    >
        {title}
    </h2>
  )
}