import { useState, useEffect, useCallback } from 'react'

type TiltDirection = 'none' | 'up' | 'down'

const hasPermissionAPI = typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function'

export function CharaderScreen() {
  const [direction, setDirection] = useState<TiltDirection>('none')
  const [showPermissionButton, setShowPermissionButton] = useState(hasPermissionAPI)

  const requestPermission = async () => {
    const DeviceOrientationEventTyped = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }
    if (typeof DeviceOrientationEventTyped.requestPermission === 'function') {
      const permission = await DeviceOrientationEventTyped.requestPermission()
      if (permission === 'granted') {
        setShowPermissionButton(false)
      }
    }
  }

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    const beta = event.beta
    const gamma = event.gamma

    if (beta === null && gamma === null) return

    const absBeta = Math.abs(beta ?? 0)
    const absGamma = Math.abs(gamma ?? 0)

    const useGamma = absGamma > 30 || absBeta < 30

    if (useGamma && gamma !== null) {
      if (gamma > 30) {
        setDirection('down')
      } else if (gamma < -30) {
        setDirection('up')
      } else {
        setDirection('none')
      }
    } else if (beta !== null) {
      if (beta > 30) {
        setDirection('up')
      } else if (beta < -30) {
        setDirection('down')
      } else {
        setDirection('none')
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('deviceorientation', handleOrientation)
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [handleOrientation])

  if (showPermissionButton) {
    return (
      <div className="charader-screen charader-none">
        <h1>Charader</h1>
        <button className="start-button" onClick={requestPermission}>
          Aktivera rörelsekontroll
        </button>
        <p className="charader-hint">Tryck för att aktivera sensorer</p>
      </div>
    )
  }

  return (
    <div className={`charader-screen charader-${direction}`}>
      <h1>Charader</h1>
      <p className="charader-hint">Vinkla mobilen upp för RÄTT, ner för PASS</p>
    </div>
  )
}