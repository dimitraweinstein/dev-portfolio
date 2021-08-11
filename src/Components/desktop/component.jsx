import React from 'react';
import './styles.css';

export const Desktop = (props) => {
    return (
        <div className="desktop">
            <p>Desktop Mode dude!</p>
            <p>Anything below this is in Laptop Mode</p>
        {props.children}
        </div>
    )
}