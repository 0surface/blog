import { useEffect, useState } from 'react'

const scrollStyle = (width, height = '8', gradient, duration = '1') => ({
  margin: 0,
  padding: 0,
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: '99',
  height: `${height}px`,
  width: `${width}`,
  backgroundImage: `${gradient}`,
  transitionProperty: 'width',
  transitionDuration: `${duration}s`,
  transitionTimingFunction: `ease-out`,
})

function ScrollProgressBar(props) {
  const {
    height = 8,
    duration = 0.5,
    bgColor1 = '#ff5f6d',
    bgColor2 = '#ffc371',
  } = props

  const colorGradient = `linear-gradient(to right, ${bgColor1}, ${bgColor2})`

  const [width, setWidth] = useState()

  const scrolling = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100

    setWidth(height > 0 ? `${scrolled}%` : 0)
  }
  useEffect(() => {
    window.addEventListener('scroll', scrolling)
    return () => {
      window.removeEventListener('scroll', scrolling)
    }
  })

  return <div style={scrollStyle(width, height, colorGradient, duration)} />
}

export default ScrollProgressBar
