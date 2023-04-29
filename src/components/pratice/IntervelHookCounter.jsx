import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const IntervelHookCounter = () => {
    const [count,setCount] = useState(0)

    const tick = () => {
        setCount( ps=> ps + 1)
    }

    useEffect(()=>{
        const intervel = setInterval(tick,1000)
        console.log('rerender');

        return() =>{
            clearInterval(intervel)
        }
    },[count])

  return (
    <>
        <h1>{count}</h1>
    </>
  )
}

export default IntervelHookCounter