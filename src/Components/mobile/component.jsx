import React from 'react';
import './mobile.css';

export const MobileOrTablet = (props) => {
    return (
        <div className="mobile">
        {props.children}
        </div>
    );
}