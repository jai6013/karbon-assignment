import React from 'react'

const PropertyControlledComponent = ({controller, children}) => {
  if(controller){
    return children;
  }
  else{
    return null
  }
}

export default PropertyControlledComponent