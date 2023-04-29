import React, { useState } from 'react';

const Statehook = () => {

    const [count,setCount] = useState(0);

    const IncerseFive = () =>{
      for (let i=0;i<5;i++){
        setCount(sa => sa + 1)
      }
    }
  return (
    <div>
        <button onClick={IncerseFive}>increse</button>
        <p>current value of count is {count}</p>
        <button onClick={() => setCount(count-1)}>decrese</button>
    </div>
  )
}

export default Statehook;