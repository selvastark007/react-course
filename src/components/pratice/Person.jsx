import React from 'react'

const Person = ({person}) => {
  return (
    <>
    <p>I am {person.name}.I am {person.age} old.My Skill is {person.skill}</p>
    </>
  )
}

export default Person