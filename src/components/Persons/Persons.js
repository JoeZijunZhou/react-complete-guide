import React, {Component} from 'react';
import Person from './Person/person';

  class Persons extends Component {
    //component create life cycle
    constructor(props) {
      super(props);
      console.log('inside persons constructor', props);    
    }
  
    componentWillMount() {
      console.log('inside persons componentwillmount');
    }
    
    componentDidMount() {
      console.log('inside persons didmount');
    }

    //component update life cycle
    componentWillReceiveProps(nextProps) {
      console.log('inside persons willreceive');
    }//only external changes have this

    shouldComponentUpdate(nextProps, nextState) {
      console.log('inside persons shouldupdate');
      return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
      console.log('inside persons willupdate');
    }

    componentDidUpdate() {
      console.log('inside persons didupdate');
    }

    render() {
        console.log('inside persons render');
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
