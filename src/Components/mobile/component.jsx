import React from 'react';
import './styles.css';

export const MobileOrTablet = (props) => {
    return (
        <div className="mobile">
            <p>Now you're in Mobile Mode dude!</p>

        {props.children}
        </div>
    );
}