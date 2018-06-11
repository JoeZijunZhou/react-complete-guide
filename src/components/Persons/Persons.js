import React from 'react';
import Person from './Person/person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
    click={() => props.clicked(index)}
    name={person.name}
    age={person.age}
    key={person.id}
    changed={(event) => props.changed(event, person.id)}
    />
  });
  //three properties: persons, clicked, changed

  //must export this component so that other files can use
  export default persons;
