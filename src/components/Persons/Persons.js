import React, {Component} from 'react';
import Person from './Person/person';

  class Persons extends Component {
      render() {
        return this.props.persons.map((person, index) => {
          return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          />
        });
      }
  }  
  //three properties: persons, clicked, changed

  //must export this component so that other files can use
  export default Persons;
