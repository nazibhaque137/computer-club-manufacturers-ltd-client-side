import React from 'react';
import errorNotFound from '../../images/errorNotFound.jpg';

const NotFound = () => {
    return (
        <div className="items-center justify-center">
            <img className="h-50 w-50" alt="not-found-img" src={errorNotFound}/>
            <h2>404 error! The page you're looking for cannot be found!</h2>
        </div>
    );
};

export default NotFound;