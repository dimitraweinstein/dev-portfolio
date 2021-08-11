import React from 'react';
import './styles.css';

export const Laptop = (props) => {
    return (
        <div className="laptop">
            <p>Laptop Mode dude!</p>
            <p>Anything below this is in Big Screen Mode</p>

        {props.children}
        </div>
    )
}