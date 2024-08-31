import { useEffect, useState } from 'react'

const useMouse = () => {
  const [mouse, setMouse] = useState({x: 0, y: 0});

  const mouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMouse({
        x: clientX,
        y: clientY
    })
  }

  useEffect( () => {
    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  return mouse;
}

export default useMouse;