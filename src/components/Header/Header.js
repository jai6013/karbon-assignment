import React from 'react'
import Heading from '../Heading/Heading'
import UserIcon from '../UserIcon/UserIcon'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
        <Heading title={`USER'S INVENTORY`} headingClassName={styles.heading}/>
        <UserIcon/>
    </div>
  )
}

export default Header