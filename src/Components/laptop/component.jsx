import React from 'react';
import './styles.css';

export const LaptopOrDesktop = (props) => {
    return (
        <div className="laptop">
            <p>Laptop Mode dude!</p>

        {props.children}
        </div>
    )
}