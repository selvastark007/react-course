import React from 'react'

const Welcome = props => {
  return (
     <>
      <h1>hello {props.name}</h1>
      {props.children} 
     </>
  )
}

export default Welcome