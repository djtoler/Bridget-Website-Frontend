import React from 'react';
import './GlobalTitleChar.css';

const GlobalTitleChar = () => {
    return (
        <div className="overlay-container-modules-char">
            <div className="container-modules-char">
                <h1 className="title-modules-char">Bridget</h1>
                <img src="bridget1.png" alt="Bridget" className="overlay-image-modules-char" />
            </div>
            {/* <div className="line-under-title-char"></div> */}
        </div>
    );
};

export default GlobalTitleChar;
