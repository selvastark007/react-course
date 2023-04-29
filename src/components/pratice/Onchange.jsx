import React,{useState} from 'react';
import ChildOnchange from './ChildOnchange';



const Onchange = () => {

    const [userName,setUserName] = useState('');

    const handler = e =>{
        setUserName(e.target.value)
        
    }

  return (
    <>
     <input type="text"  placeholder='i am parent' onChange={handler} /> <br />
     <h1>{userName}</h1>
     <ChildOnchange  username={userName}/>
    </>
  )
}

export default Onchange