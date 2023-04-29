import React from 'react';
import Person from './Person.jsx'

const Namelist = () => {

    const persons = [
        {
            id : 1,
            name : 'Selva',
            age : 22,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Abu',
            age : 26,
            skill : 'Design'
        },
        {
            id : 3,
            name : 'Kalai',
            age : 21,
            skill : 'Figma'
        },
        {
            id : 4,
            name : 'Ragav',
            age : 22,
            skill : 'word Press'
        },
        {
            id : 5,
            name : 'soloman',
            age : 32,
            skill : 'Senior'
        },
        {
            id : 5,
            name : 'raja',
            age : 22,
            skill : 'Senior'
        }
    ]
    const personlist = persons.map( person => <Person key={person.id} person={person}/> );
  return (
    <>
        <h3>{personlist}</h3>
    </>
  )
}

export default Namelist