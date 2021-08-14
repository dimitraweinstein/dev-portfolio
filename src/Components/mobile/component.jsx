import React from 'react';
import './styles.css';

export const MobileOrTablet = (props) => {
    return (
        <div className="mobile">
        {props.children}
        </div>
    );
}