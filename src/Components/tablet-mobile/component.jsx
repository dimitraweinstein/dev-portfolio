import React from 'react';
import './styles.css';

export const TabletMobilePortrait = (props) => {
    return (
        <div className="tablet-mobile">
            <p>Tablet-Mobile Mode dude!</p>
            <p>Anything below this is in Big Screen Mode</p>

        {props.children}
        </div>
    );
}