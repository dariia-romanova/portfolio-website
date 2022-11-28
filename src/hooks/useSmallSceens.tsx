import { useEffect, useState } from 'react'

function useSmallScreens(): boolean {
  const getMatches = (): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia('(min-width: 768px)').matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches())

  function handleChange() {
    setMatches(getMatches())
  }

  useEffect(() => {
    const matchMedia = window.matchMedia('(min-width: 768px)')

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return matches
}

export default useSmallScreens