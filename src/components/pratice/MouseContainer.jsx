import React from 'react'
import { useState } from 'react'
import MouseEventUseEffect from './MouseEventUseEffect'

const MouseContainer = () => {

    const [display,setDisplay] = useState(true)
  return (
    <>
        <button onClick={()=> setDisplay(!display)}>Toogle Button</button>
        {
            display && <MouseEventUseEffect/>
        }
    </>
  )
}

export default MouseContainer