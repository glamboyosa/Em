import React from 'react'
import styles from '../../styles/progress.module.css'
import { Root, Indicator } from '@radix-ui/react-progress'
import useTimeOfDay from './useTimeOfDay'
import usePrefersColorScheme from './usePrefersColorScheme'
const useProgress = () => {
  const timeOfDay = useTimeOfDay()
  const [colorScheme] = usePrefersColorScheme(timeOfDay)
  const [progress, setProgress] = React.useState(10)
  const timeoutReference = React.useRef<NodeJS.Timer | null>(null)
  const Progress = () => (
    <Root className={styles.root}>
      <Indicator
        style={
          colorScheme === 'light'
            ? {
                backgroundColor: '#fff',
                transform: `translateX(${progress.toString()}%)`,
              }
            : { transform: `translateX(${progress.toString()}%)` }
        }
        className={styles.indicator}
      />
    </Root>
  )
  const startProgress = React.useCallback(() => {
    const interval = setInterval(
      () => setProgress((prevProgress) => prevProgress + 5),
      1200,
    )
    timeoutReference.current = interval
  }, [])

  const stopProgress = React.useCallback(() => {
    const interval = setInterval(() => setProgress(100), 0)
    clearInterval(interval)
    clearInterval(timeoutReference.current!)
  }, [])

  return { Progress, stopProgress, startProgress }
}
export default useProgress
