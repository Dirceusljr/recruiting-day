import { useState, useEffect } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return {
    width,
    height,
    isSm: width <= 640,
    isMd: width > 640 && width <= 768,
    isLg: width > 768 && width <= 1024,
    isXl: width > 1024 && width <= 1280,
    is2xl: width >= 1536,
  }
}
