import React from 'react';
import './Persons.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={ props.click}> I am a Person, name { props.name} age  {props.age} & my Profession is {props.profession }</p>
            <p> { props.children } </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;