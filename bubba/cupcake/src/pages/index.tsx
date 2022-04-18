import { useRef, SyntheticEvent } from 'react'
import styles from '../styles/index.module.css'
import Nav from '../components/navigation/nav'
import TypeAnimation from 'react-type-animation'
import Input from '../components/input/input'
import Button from '../components/button/button'
import useTimeOfDay from '../lib/hooks/useTimeOfDay'
import usePrefersColorScheme from '../lib/hooks/usePrefersColorScheme'

const Index = () => {
  const timeOfDay = useTimeOfDay()
  const [colorScheme] = usePrefersColorScheme(timeOfDay)
  const url = useRef('')
  const inputHandler = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement

    url.current = target.value
  }
  const onSubmitHandler = async () => {
    console.log('oj?')
    console.log(url.current)
  }

  return (
    <>
      <header className={styles.appHeader}>
        <Nav
          style={
            colorScheme === 'dark'
              ? { border: '1px solid white' }
              : { border: '1px solid black' }
          }
        />
        <span
          className={[
            styles.animations,
            styles.animationControls,
            styles.rocketAnimation,
          ].join(' ')}
        >
          🚀
        </span>
        <span
          className={[
            styles.animations,
            styles.animationControls,
            styles.chartAnimation,
          ].join(' ')}
        >
          📉
        </span>
        <span
          className={[
            styles.animations,
            styles.animationControls,
            styles.lightningAnimation,
          ].join(' ')}
        >
          ⚡️
        </span>
        <span
          className={[
            styles.animations,
            styles.animationControls,
            styles.confettiAnimation,
          ].join(' ')}
        >
          🎉
        </span>
        <main className={styles.mainContent}>
          <h1 className={styles.mainHeading}>Em - Create short links! 🚀 </h1>
          <p className={styles.primaryTagLine}>Fast. Easy. Dead Simple.</p>
          <p className={styles.secondaryTagLine}>
            Built for:{' '}
            <span className={styles.animationSpan}>
              <TypeAnimation
                cursor={true}
                sequence={[
                  'Influencers',
                  1500,
                  'Youtubers',
                  1500,
                  'Small Businesses',
                  2000,
                  'More!',
                  1500,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </span>{' '}
          </p>
          <div className={styles.flex}>
            <Input
              onChange={inputHandler}
              style={
                colorScheme === 'light'
                  ? { boxShadow: '4px 4px 7px rgba(0,0,0,0.5)' }
                  : {}
              }
            />
            <Button
              style={
                colorScheme === 'dark'
                  ? { backgroundColor: 'white' }
                  : { backgroundColor: 'black', color: 'white' }
              }
              onSubmit={onSubmitHandler}
            />
          </div>
        </main>
      </header>
      <main className={styles.customLinkSection}>
        <h1 className={styles.secondaryHeading}>
          Do more with custom links ⚡️
        </h1>
      </main>
    </>
  )
}
export default Index
