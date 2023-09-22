import React from 'react'

const Icon = ({imgSource, iconClassName}) => {
  return (
    <img src={imgSource} className={iconClassName} alt='error'/>
  )
}

export default Icon