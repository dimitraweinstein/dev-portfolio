import React from 'react';
import './styles.css'

export const BigScreen = (props) => {
    return (
        <div className="big-screen">
            <p>Big Screen Mode</p>
            <p>Base of the Pyramid</p>

        {props.children}
        </div>
    )
 }