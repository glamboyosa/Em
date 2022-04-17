import { InputProps } from '../../lib/types'
import styles from '../../styles/input.module.css'
const Input = ({ style }: InputProps) => {
  return (
    <input
      style={style}
      type="text"
      className={styles.input}
      placeholder="Enter a URL."
    />
  )
}

export default Input
