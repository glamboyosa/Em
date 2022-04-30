import { forwardRef } from 'react'
import { ButtonProps, ButtonRef } from '../../lib/types'
import styles from '../../styles/button.module.css'
const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ onSubmit, style, children }, ref) => {
    return (
      <button
        ref={ref}
        style={style}
        className={styles.button}
        onClick={onSubmit}
      >
        {children}
      </button>
    )
  },
)

export default Button
