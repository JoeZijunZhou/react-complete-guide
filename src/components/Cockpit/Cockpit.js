import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    const assignedclasses = [];
    if (props.persons.length <= 2) {
      assignedclasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedclasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'am react</h1>
            <p 
            className={assignedclasses.join(' ')}
            >color/style changed depends on #of persons</p>
            <button
            className={btnClass}
            onClick={props.clicked}
            >Switch person</button>
        </div>
    );
};

export default cockpit;