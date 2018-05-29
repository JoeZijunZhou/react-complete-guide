import React, { Component } from 'react';

// class person extends Component {
//     render() {
//         return (
//             <h1>i am {props.name}the person{Math.random()}</h1>
//         );
//     }
// }
const person = (props) => {
    return (
        <div>
            <h1>i am {props.name} the person{Math.random()}</h1>
            <h2>{props.children}</h2>
        </div>
    )
};

export default person;