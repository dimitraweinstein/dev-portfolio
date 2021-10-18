import React from 'react';
import './laptop.css';

export const LaptopOrDesktop = (props) => {
    return (
        <div className="laptop">
        {props.children}
        </div>
    )
}