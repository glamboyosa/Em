import { useRef, useMemo, useState, useEffect } from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import 'react-toastify/dist/ReactToastify.css'
import { ReactComponent as Analytics } from '../components/illustrations/Scenes05.svg'
import { ReactComponent as MadeForYou } from '../components/illustrations/wfh_3.svg'
import { ReactComponent as Transfer } from '../components/illustrations/concept-of-securing-money-in-business-startup.svg'
import { ReactComponent as MoneyTransfer } from '../components/illustrations/men-doing-money-transfer.svg'
import styles from '../styles/index.module.css'
import Nav from '../components/navigation/nav'
import ReactTypingEffect from 'react-typing-effect'
import icons from 'currency-icons'
import Input from '../components/input/input'
import Button from '../components/button/button'
import Check from '../components/check/check'
import useTimeOfDay from '../lib/hooks/useTimeOfDay'
import usePrefersColorScheme from '../lib/hooks/usePrefersColorScheme'
import useLocale from '../lib/hooks/useLocale'
import { ButtonRef, countries, InputRef } from '../lib/types'
import useToast from '../lib/hooks/useToast'

const Index = () => {
  const timeOfDay = useTimeOfDay()
  const [colorScheme] = usePrefersColorScheme(timeOfDay)
  const [{ country }] = useLocale()
  const [notify, ToastContainer] = useToast()

  const currency = useMemo(() => {
    if (country === countries.Nigeria) {
      return `${icons['NGN']?.symbol}1000`
    } else if (country === countries.England) {
      return `${icons['GBP']?.symbol}2`
    } else if (country === countries.America) {
      return `${icons['USD']?.symbol}2`
    }
  }, [country])

  const inputRef = useRef<InputRef | null>(null!)
  const buttonRef = useRef<ButtonRef | null>(null!)

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const onSubmitHandler = async () => {
    if (!inputRef.current!.value.includes('.')) {
      notify('error', 'Invalid website.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setData(
        (prevData) =>
          prevData.concat([inputRef.current!.value as never]) as any,
      )
    }, 3500)
  }

  useEffect(() => {
    if (!loading && data.length && inputRef.current?.value) {
      inputRef.current.value = ''
      setTimeout(() => {
        buttonRef.current!.innerHTML = 'Shorten!'
      }, 1500)
    }
  }, [data, loading])

  return (
    <>
      <ToastContainer />
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
          ????
        </span>
        <span
          className={[
            styles.animations,
            styles.animationControls,
            styles.chartAnimation,
          ].join(' ')}
        >
          ????
        </span>
        <span
          className={[
            styles.animations,
            styles.animationControls,
            styles.lightningAnimation,
          ].join(' ')}
        >
          ??????
        </span>
        <span
          className={[
            styles.animations,
            styles.animationControls,
            styles.confettiAnimation,
          ].join(' ')}
        >
          ????
        </span>
        <main className={styles.mainContent}>
          <h1 className={styles.mainHeading}>Em - Create short links! ???? </h1>
          <p className={styles.primaryTagLine}>Fast. Easy. Dead Simple.</p>
          <p className={styles.secondaryTagLine}>
            Built for:{' '}
            <span className={styles.animationSpan}>
              <ReactTypingEffect
                typingDelay={200}
                eraseSpeed={200}
                eraseDelay={200}
                text={['Influencers', 'Youtubers', 'Small Businesses', 'More!']}
              />
            </span>{' '}
          </p>
          <div className={styles.flex}>
            <Input
              ref={inputRef}
              style={
                colorScheme === 'light'
                  ? { boxShadow: '4px 4px 7px rgba(0,0,0,0.5)' }
                  : {}
              }
            />
            <Button
              ref={buttonRef}
              disabled={loading}
              style={
                colorScheme === 'dark'
                  ? { backgroundColor: 'white' }
                  : { backgroundColor: 'black', color: 'white' }
              }
              onSubmit={onSubmitHandler}
            >
              {!loading && !data.length ? 'Shorten!' : <Check />}
            </Button>
          </div>
        </main>
      </header>
      <main className={styles.customLinkSection}>
        <h1 className={styles.secondaryHeading}>
          Do more with custom links??????
        </h1>
        <div className={styles.grid}>
          <div className={styles.column}>
            <MadeForYou
              style={{ marginTop: '1rem' }}
              height={200}
              width={200}
            />
            <h3>Made for you.</h3>
            <p className={styles.description}>
              Instead of boring old short links do more with links customized
              for you.
              <p className={[styles.description, styles.whiteSpace].join(' ')}>
                <span className={styles.link}>em.xyz/ew23rd</span>{' '}
                <ArrowRightIcon />{' '}
                <span className={styles.link}>em.xyz/osa</span>{' '}
              </p>
            </p>
          </div>
          <div className={styles.column}>
            {colorScheme === 'light' ? (
              <Transfer
                style={{ marginTop: '1rem' }}
                height={200}
                width={200}
              />
            ) : (
              <MoneyTransfer
                style={{ marginTop: '1rem' }}
                height={200}
                width={200}
              />
            )}
            <h3>Pay for what you use.</h3>
            <p className={styles.description}>
              No subscriptions, no recurring bills. We verify the custom link is
              available and charge you {currency} to own it for life.
            </p>
          </div>
          <div className={styles.column}>
            <Analytics style={{ marginTop: '1rem' }} height={200} width={200} />
            <h3>Analytics, for you.</h3>
            <p className={styles.description}>
              Track clicks and know just how much traffic your site is
              generating.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
export default Index
