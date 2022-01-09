import React from 'react'
import Person from "./Person"

function NameList() {
    const names = ['Bruce', 'Lee', 'Diana', 'Bruce']

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 23,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Dianss',
            age: 40,
            skill: 'JS'
        },
    ]

    //  const personList = persons.map(person => 
    //     <Person key={person.id} person ={person}></Person>
    //  )
    const nameList = names.map((name, value) => <h2 key={value}>{value} {name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList
