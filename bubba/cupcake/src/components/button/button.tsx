import ButtonProps from '../../lib/types'
import styles from '../../styles/button.module.css'
const Button = ({ onSubmit }: ButtonProps) => (
  <button className={styles.button} onSubmit={onSubmit}>
    Shorten!
  </button>
)

export default Button
