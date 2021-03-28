import React from 'react';

const Loader = ({ children }) => {
    return (
        <div className="spinner">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            { children }
        </div>
    )
};

export default Loader;