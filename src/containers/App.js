import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
//import Radium from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';

//purecomponent: has build-in update check(shouldupdate func)
//use purecomponent only when no (many)need to render again

class App extends Component {
  //component create life cycle
  constructor(props) {
    super(props);
    console.log('inside constructor', props);    
  }

  componentWillMount() {
    console.log('inside componentwillmount');
  }
  
  componentDidMount() {
    console.log('inside didmount');
  }
  //component internal update life cycle
  shouldComponentUpdate(nextProps, nextState) {
    console.log('inside persons shouldupdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('inside persons willupdate');
  }

  componentDidUpdate() {
    console.log('inside persons didupdate');
  }

  //using state
  state = {
    persons: [
      {id:"a", name: "zzj", age: 24},
      {id:"b", name: "zz", age: 23},
      {id:"c", name: "z", age: 22}
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked+1
        //setState that do not affected by other updates
      }
    });
  }


  //use .bind()to pass parameter, assign val to parameter
  //use props(of certain defined tag) to refer method in other files
  render() {
    console.log('inside render')
    //styling => button
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1x solid blue',
    //   padding: '8px'
    // };

    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
        </div>
      );

      btnClass = classes.Red;
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
      <WithClass classes={classes.App}>
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
