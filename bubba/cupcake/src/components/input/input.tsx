import { forwardRef } from 'react'
import { InputProps, InputRef } from '../../lib/types'
import styles from '../../styles/input.module.css'
const Input = forwardRef<InputRef, InputProps>(({ style }, ref) => {
  return (
    <input
      style={style}
      type="text"
      ref={ref}
      className={styles.input}
      placeholder="Enter a URL."
    />
  )
})

export default Input
