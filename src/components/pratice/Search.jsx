import React from 'react';

const student = [
    {
        id : '1',
        name : 'selva'
    },
    {
        id : '2',
        name : 'raj'
    },
    {
        id : '3',
        name : 'sri'
    },
    {
        id : '4',
        name : 'jithu'
    },
    {
        id : '5',
        name : 'Adhi'
    },
    {
        id : '6',
        name : 'muttas'
    },
    {
        id : '7',
        name : 'muttas'
    },
    {
        id : '8',
        name : 'muttas'
    },
]

const search = () => {
  return (
    <>
      {student.map((roll)=>{
        return <div key={roll.id} className="main">
                <h1>{roll.name}</h1>
                
        </div>
      })}
      <input type="search" name="" id="" onChange={(event)=>{
            // console.log(event.target.value)
            const filterMonster = student.filter((boy)=>{
            const array = event.target.value.toLowerCase();
            return boy.name.toLowerCase().includes(array)

        } );
         
            return {boy : filterMonster}
         
      }} />
    </>
  )
}

export default search