import React from 'react';
import './BusinessSummary.css';
import { faClock, faUserGroup, faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessSummary = () => {
    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Business Summary</h1>
                    <div className="summary-container">
                    <div>
                        <FontAwesomeIcon icon={faClock} />                        
                        <h5>1k+</h5>
                        <p>Products Delivered Properly Per Month</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />                        
                        <h5>500+</h5>
                        <p>New Users Every year</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComputer} />                        
                        <h5>10k+</h5>
                        <p>Computer Items Manufactured Successfully</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;