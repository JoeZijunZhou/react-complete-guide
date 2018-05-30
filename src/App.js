import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person';

class App extends Component {
  //using state
  state = {
    person: [
      {name: "zzj", age: 24},
      {name: "zz", age: 23},
      {name: "z", age: 22}
    ]
  }

  switchNameHandler = (nameVar) => {
    //setState method to update state DOM
    //only state and props can be dynamically update in DOM
    //arrow function can pass parameter into setState
    this.setState(
      {
        person: [
          {name: nameVar, age: 22},
          {name: "zz", age: 23},
          {name: "z", age: 22}
        ]
      }
    )
  }

  changeNameHandler = (event) => {
    //event handler
    //two way binding
    this.setState(
      {
        person: [
          {name: "zzj", age: 22},
          {name: event.target.value, age: 23},
          {name: "z", age: 22}
        ]
      }
    )
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

    return (
      <div className="App">
        <h1>Hi, I'am react</h1>
        <button
         onClick={this.switchNameHandler.bind(this, "yue")}
         style={style} >Switch person</button>
        <Person
         name = {this.state.person[0].name}
         click={this.switchNameHandler.bind(this, "joe")}
         changed={this.changeNameHandler} >i am child </Person>
        <Person name = {this.state.person[1].name}/>
        <Person name = {this.state.person[2].name}/>
      </div>
    );
  }
}

export default App;
