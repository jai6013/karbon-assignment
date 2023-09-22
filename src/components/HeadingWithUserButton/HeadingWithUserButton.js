import React from 'react'

import Heading from '../Heading/Heading'
import AddUserButton from '../AddUserButton/AddUserButton'

import styles from './headingWithUserButton.module.scss'

const HeadingWithUserButton = ({handleUserModalOpen}) => {
  return (
    <div className={styles.headingWithUserBtn}>
        <Heading title={`LIST OF USERS`} headingClassName={styles.heading}/>
        <AddUserButton handleOpenUserModal={handleUserModalOpen}/>

    </div>
  )
}

export default HeadingWithUserButton