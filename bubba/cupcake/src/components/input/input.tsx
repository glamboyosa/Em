import { InputProps } from '../../lib/types'
import styles from '../../styles/input.module.css'
const Input = ({ style, onChange }: InputProps) => {
  return (
    <input
      style={style}
      type="text"
      onChange={onChange}
      className={styles.input}
      placeholder="Enter a URL."
    />
  )
}

export default Input
