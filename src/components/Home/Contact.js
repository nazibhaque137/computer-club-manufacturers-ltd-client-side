import React from 'react';
import manufacturing from '../../images/manufacturing.jpg';

const Contact = () => {
    return (
        <div className="text-center my-20">

            <div className="container-fluid">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img alt="manufacturing" src={manufacturing} className="max-w-sm rounded-lg shadow-2xl " />
                        <div>
                            <h1 className="text-5xl font-bold">Contact Us</h1>
                            <p className="py-6">Have any queries? Want to know more about us? Just leave a message and we will be there for you.</p>
                            <a href="mailto:nazibhaque137@gmail.com"><button className="btn btn-primary">Get In Touch</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;