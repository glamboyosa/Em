import { ButtonProps } from '../../lib/types'
import styles from '../../styles/button.module.css'
const Button = ({ onSubmit, style }: ButtonProps) => (
  <button style={style} className={styles.button} onSubmit={onSubmit}>
    Shorten!
  </button>
)

export default Button
