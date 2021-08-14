import React from 'react';
import './styles.css';

export const LaptopOrDesktop = (props) => {
    return (
        <div className="laptop">
        {props.children}
        </div>
    )
}