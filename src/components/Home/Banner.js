import React from 'react';
import manufacturing from '../../images/manufacturing.jpg';

const Banner = () => {
    return (
<div className="container-fluid">
            <div className="hero h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt="manufacturing" src={manufacturing} className="max-w-sm rounded-lg shadow-2xl " />
                <div>
                    <h1 className="text-5xl font-bold">The Ultimate Club of Computer Manufacturing</h1>
                    <p className="py-6">Welcome to Computer Club Manufacturers Ltd. We are the pro of manufacturing from A to Z for Computers. Just give us a try!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;