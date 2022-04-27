import { ButtonProps } from '../../lib/types'
import styles from '../../styles/button.module.css'
const Button = ({ onSubmit, style, children }: ButtonProps) => {
  return (
    <button style={style} className={styles.button} onClick={onSubmit}>
      {children}
    </button>
  )
}

export default Button
