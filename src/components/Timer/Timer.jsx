/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-expressions */

import { useState, useEffect } from 'react'

export default function Timer({ min, sec }) {
  // eslint-disable-next-line no-unused-vars
  const [[minStart, secStart], setTime] = useState([min, sec])
  const [zero, setZero] = useState(false)
  const [active, setActive] = useState(false)

  const update = () => {
    if (!active) return
    if (zero) {
      setTime([minStart, secStart + 1])
      secStart === 59 && setTime([minStart + 1, 0])
    } else {
      setTime([minStart, secStart - 1])
      secStart === 0 && setTime([minStart - 1, 59])
      if (minStart === 0 && secStart === 0) {
        setTime([0, 0])
        setActive(false)
      }
    }
  }

  const startTimer = () => {
    setActive(true)
    if (min === 0 && sec === 0) {
      setZero(true)
    }
  }

  function stopTimer() {
    setActive(false)
  }

  useEffect(() => {
    const interval = setInterval(() => update(), 1000)
    return () => clearInterval(interval)
  }, [secStart, active])

  return (
    <span className="description">
      <button type="button" className="icon icon-play" onClick={() => startTimer()} disabled={active} />
      <button type="button" className="icon icon-pause" onClick={() => stopTimer()} />
      <span className="timer">
        {minStart} min {secStart} sec
      </span>
    </span>
  )
}
