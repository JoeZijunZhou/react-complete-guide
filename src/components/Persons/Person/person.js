import React, { Component } from 'react';
//import diy css
import classes from './person.css';
// class person extends Component {
//     render() {
//         return (
//             <h1>i am {props.name}the person{Math.random()}</h1>
//         );
//     }
// }

//input onchange dynamically update event
class Person extends Component {
    constructor(props) {
      super(props);
      console.log('inside person constructor', props);    
    }
  
    componentWillMount() {
      console.log('inside person componentwillmount');
    }
    
    componentDidMount() {
      console.log('inside person didmount');
    }
    
    render() {
        console.log('inside person render');
        return (
            <div className={classes.person}>
                <h1 onClick={this.props.click}>i am {this.props.name} the person {Math.random()}</h1>
                <h2>{this.props.children}</h2>
                <input type="text" onChange={this.props.changed} />
            </div>
        )
    }
}

export default Person;