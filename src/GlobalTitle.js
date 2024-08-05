import React from 'react';
import './GlobalTitle.css';

const GlobalTitle = () => {
    return (
        <div className="overlay-container-modules">
            <div className="container-modules">
                <h1 className="title-modules">Bridget</h1>
                <img src="bridget1.png" alt="Bridget" className="overlay-image-modules" />
            </div>
            <div className="line-under-title"></div>
        </div>
    );
};

export default GlobalTitle;
