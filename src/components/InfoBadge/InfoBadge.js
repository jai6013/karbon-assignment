import React from 'react'
import cx from 'classnames'

import styles from './infoBadge.module.scss'

const InfoBadge = ({label, value, containerClassName}) => {
  return (
    <div className={cx(styles.infoBadgeContainer, containerClassName)}>
        <label>{label}:</label>
        <strong>{value}</strong>
    </div>
  )
}

export default InfoBadge