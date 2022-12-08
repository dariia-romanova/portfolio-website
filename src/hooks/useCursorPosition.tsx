import { useEffect, useState } from "react";

export const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const trackCursor = (event: MouseEvent) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }
  
    window.addEventListener('mousemove', trackCursor);

    return () => {
      window.addEventListener('mousemove', trackCursor)
    }
  }, [])

  return ({ x: cursorPosition.x, y: cursorPosition.y })
}