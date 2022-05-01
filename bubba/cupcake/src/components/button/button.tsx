import { forwardRef } from 'react'
import { ButtonProps, ButtonRef } from '../../lib/types'
import styles from '../../styles/button.module.css'
const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ onSubmit, style, children, disabled }, ref) => {
    return (
      <button
        ref={ref}
        style={style}
        className={styles.button}
        onClick={onSubmit}
        disabled={disabled}
      >
        {children}
      </button>
    )
  },
)

export default Button
