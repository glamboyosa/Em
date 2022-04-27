import React from 'react'
import styles from '../../styles/progress.module.css'
import { Root, Indicator } from '@radix-ui/react-progress'
import useTimeOfDay from './useTimeOfDay'
import usePrefersColorScheme from './usePrefersColorScheme'
const useProgress = () => {
  const timeOfDay = useTimeOfDay()
  const [colorScheme] = usePrefersColorScheme(timeOfDay)
  const [progress, setProgress] = React.useState(10)
  let timeoutReference: NodeJS.Timer | null = null
  const Progress = () => (
    <Root className={styles.root}>
      <Indicator
        style={
          colorScheme === 'light'
            ? {
                color: '#000',
                transform: `translateX(${progress.toString()}%)`,
              }
            : { transform: `translateX(${progress.toString()}%)` }
        }
        className={styles.indicator}
      />
    </Root>
  )
  React.useLayoutEffect(() => {
    const interval = setInterval(
      () => setProgress((prevProgress) => prevProgress + 5),
      5000,
    )
    timeoutReference = interval
  }, [])

  const stopProgress = () => {
    setProgress(100)
    clearInterval(timeoutReference!)
  }

  return { Progress, stopProgress }
}
export default useProgress
