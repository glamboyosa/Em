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
  console.log(colorScheme)
  const onSubmitHandler = async () => {}
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
              style={
                colorScheme === 'light'
                  ? { boxShadow: '4px 4px 7px black' }
                  : {}
              }
            />
            <Button
              style={
                colorScheme === 'dark'
                  ? { backgroundClip: 'white' }
                  : { backgroundColor: 'black' }
              }
              onSubmit={onSubmitHandler}
            />
          </div>
        </main>
      </header>
    </>
  )
}
export default Index