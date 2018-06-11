import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Person from '../components/Persons/Person/person';

class App extends Component {
  //using state
  state = {
    persons: [
      {id:"a", name: "zzj", age: 24},
      {id:"b", name: "zz", age: 23},
      {id:"c", name: "z", age: 22}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (nameVar) => {
    //setState method to update state DOM
    //only state and props can be dynamically update in DOM
    //arrow function can pass parameter into setState
    this.setState(
      {
        persons: [
          {name: nameVar, age: 22},
          {name: "zz", age: 23},
          {name: "z", age: 22}
        ]
      }
    )
  }

  changeNameHandler = (event, id) => {
    //event handler
    //two way binding
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //create new obj to store the array//immutably
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;//change name
    
    this.setState({persons: persons});

    // this.setState(
    //   {
    //     persons: [
    //       {name: "zzj", age: 22},
    //       {name: event.target.value, age: 23},
    //       {name: "z", age: 22}
    //     ]
    //   }
    // )
  }

  //delete a person
  //get a copy of the array and modify//immutably
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  //show or hide persons handler
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  //use .bind()to pass parameter, assign val to parameter
  //use props(of certain defined tag) to refer method in other files
  render() {
    //styling => button
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.changeNameHandler(event, person.id)}
            />
          })}
        </div>
      );
    }
    //assign key to each element in the list
    //click(onClick property in person.js) to delete person
    //index list elements
    //use list(this.state.persons.map()) istead of plain JSX
        // <Person
        // name = {this.state.person[0].name}
        // click={this.switchNameHandler.bind(this, "joe")}
        // changed={this.changeNameHandler} >i am child </Person>
        // <Person name = {this.state.person[1].name}/>
        // <Person name = {this.state.person[2].name}/>
        


    return (
      <div className="App">
        <h1>Hi, I'am react</h1>
        <button
         onClick={this.togglePersonsHandler}
         style={style} >Switch person</button>
        {persons}
      </div>
    );
  }
}

export default App;
