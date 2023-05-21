'use client'
import { useState, useEffect } from 'react'

export default function TimerCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount((prevCount) => prevCount + 1), 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button
        className="font-sm my-3 rounded bg-indigo-600 py-3 px-3 text-white hover:bg-indido"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
