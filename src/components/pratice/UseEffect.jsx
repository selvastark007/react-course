import React, { useState, useEffect } from 'react'


const UseEffect = () => {

  const initialCount = 0

  const [count, setCount] = useState(initialCount);
  const [name,setName] = useState('')

  const countCalc = () => {
    setCount(ps => ps + 1)
  }
  const reset = () => {
    setCount(() => initialCount)
  }
  const changeEvent = (e) =>{
    setName(()=> e.target.value)
  }
  useEffect(() => {
    console.log('useEffect is upadated');
    document.title = `you cliked ${count} times`
  },[])
  return (
    <>
      <button onClick={countCalc}>click {count} times</button>
      <button onClick={reset}>reset</button>
      <input type="text" value={name} onChange={changeEvent}/>
      <p>{name}</p>
    </>
  )
}

export default UseEffect