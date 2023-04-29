import React from 'react'

const ChildComponet = (props) => {
  return (
    <>
    <button onClick={() => props.greetComponet('selva',[[1],[2],[3]])}>Greet parent</button>
    </>
  )
}

export default ChildComponet