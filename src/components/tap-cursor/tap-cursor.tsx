import type { FC } from "react"
import type { TapCursorProps } from "./tap-cursor.props"
import { motion } from 'framer-motion';
import { TapIcon } from "../tap-icon/tap-icon";
import { createPortal } from "react-dom";
import { useCursorPosition } from "@src/hooks/useCursorPosition";

const Tap: FC<TapCursorProps> = ({ isShown }) => {
  const { x, y } = useCursorPosition();

  return (
    <motion.div
      onClick={(event) => event.preventDefault()}
      className="fixed z-50 top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      animate={{ x: x - 20, y: y - 20 }}
      transition={{
        type: "tween",
        duration: 0,
      }}
    >
      {isShown && <TapIcon />}
    </motion.div>
  )
}

export const TapCursor: FC<TapCursorProps> = ({ isShown }) => {
  if (typeof window === 'undefined') {
    return null;
}

  const placeholder = document.getElementById("body")

  if (!placeholder) {
    return null;
  };

  return (
    <>
      {createPortal(
        <Tap isShown={isShown}  />,
        placeholder
      )}
    </>
  )
}



