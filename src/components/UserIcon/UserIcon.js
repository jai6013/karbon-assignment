import React from 'react'

import Icon from '../Icon/Icon'

import userImage from '../../assets/Images/user-icon.png'
import styles from './userIcon.scss'

const UserIcon = () => {
  return (
    <div className={styles.userIcon}>
        <Icon imgSource={userImage}/>
    </div>
  )
}

export default UserIcon