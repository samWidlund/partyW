import { useState, useEffect, useRef } from 'react'
import { getRandomWord } from './data/words'
import { Timer } from './components/Timer'
import './App.css'

const DEFAULT_TIME = 40

function App() {
  const [word, setWord] = useState<string>('')
  const [timeRemaining, setTimeRemaining] = useState<number>(DEFAULT_TIME)
  const [isRoundActive, setIsRoundActive] = useState<boolean>(false)
  const [timerInput, setTimerInput] = useState<string>('')
  const intervalRef = useRef<number | null>(null)

  const generateWord = () => {
    const seconds = timerInput ? parseInt(timerInput, 10) : DEFAULT_TIME
    setWord(getRandomWord())
    setTimeRemaining(seconds)
    setIsRoundActive(true)
  }

  useEffect(() => {
    if (!isRoundActive) return

    intervalRef.current = window.setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsRoundActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRoundActive])

  return (
    <>
      <section id="center">
        {isRoundActive ? (
          <>
            <div className="word-display">
              <h1 className="word">{word}</h1>
            </div>
            <Timer seconds={timeRemaining} />
            <button
              className="stop-button"
              onClick={() => setIsRoundActive(false)}
            >
              Stop
            </button>
          </>
        ) : (
          <div className="generate-section">
            <h1>partyW</h1>
            <input
              type="number"
              className="timer-input"
              placeholder={String(DEFAULT_TIME)}
              value={timerInput}
              onChange={(e) => setTimerInput(e.target.value)}
            />
            <button className="generate-button" onClick={generateWord}>
              Generate Word
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default App
