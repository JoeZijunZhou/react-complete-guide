import React, { Component } from 'react';
//import diy css
import './person.css';
// class person extends Component {
//     render() {
//         return (
//             <h1>i am {props.name}the person{Math.random()}</h1>
//         );
//     }
// }

//input onchange dynamically update event
const person = (props) => {
    return (
        <div className="person">
            <h1 onClick={props.click}>i am {props.name} the person {Math.random()}</h1>
            <h2>{props.children}</h2>
            <input type="text" onChange={props.changed} />
        </div>
    )
};

export default person;