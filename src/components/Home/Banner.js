import React from 'react';
import './Banner.css';
import manufacturing from '../../images/manufacturing.jpg';

const Banner = () => {
    return (
            <div className="banner-container">
            <div className="banner-text-container">
                <h1 className="text-left">The Ultimate Club of Manufacture</h1>
                <p className="text-left">Welcome to Computer Club Manufacturers Ltd. We are the pro of manufacturing from A to Z for Computers. Just give us a try!</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="banner-img-container">
                <img src={manufacturing} className="banner-img" />
            </div>
            </div>
    );
};

export default Banner;