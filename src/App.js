import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'am react</h1>
        <Person name = "zzj">i am child </Person>
        <Person name = "zz"/>
        <Person name = "z"/>
      </div>
    );
  }
}

export default App;
