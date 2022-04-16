import styles from '../styles/index.module.css'
import Nav from '../components/navigation/nav'
import TypeAnimation from 'react-type-animation'
import Input from '../components/input/input'
import Button from '../components/button/button'

const Index = () => {
  const onSubmitHandler = async () => {}
  return (
    <>
      <header className={styles.appHeader}>
        <Nav />
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
            <Input />
            <Button onSubmit={onSubmitHandler} />
          </div>
        </main>
      </header>
    </>
  )
}
export default Index
