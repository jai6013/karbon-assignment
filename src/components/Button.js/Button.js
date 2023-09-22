import React from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

const Button = ({buttonText, onClick, buttonClassName}) => {
  return (
    <button className={cx(styles.button, buttonClassName)} onClick={onClick} >{buttonText}</button>
  )
}

export default Button