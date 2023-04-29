import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const MouseEventUseEffect = () => {

    const [x,setX] = useState('')
    const [y,setY] = useState('')

    const logMousePosition = (e) =>{
        console.log('mouse event is called')
        setX(e.clientX)
        setY(e.clientY)
    }

     useEffect(()=>{
        console.log('useEffect is called');
        window.addEventListener('mousemove',logMousePosition)
        document.title='mouse event'

        return () => {
            console.log('addEventListner is unmounted');
            window.removeEventListener('mousemove',logMousePosition)
        }
     },[])
  return (
    <>
        <h1>
            x value is {x} <br />
            y value is {y}
        </h1>
    </>
  )
}

export default MouseEventUseEffect