import React from 'react';
import { faClock, faUserGroup, faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessSummary = () => {
    return (
<div>
            <h1 className='text-4xl font-bold uppercase my-5'>These stats say it all</h1>
<div class="stats shadow bg-white">
  
  <div class="stat">
    <div class="stat-figure text-2xl">
<FontAwesomeIcon icon={faClock} />     
</div>
                <div class="stat-title text-lg">Total</div>
    <div class="stat-value text-primary">1k+</div>
    <div class="stat-desc">Products Delivered Properly Per Month</div>
  </div>
  
  <div class="stat">
                <div class="stat-figure text-2xl">
    <FontAwesomeIcon icon={faUserGroup} />                        
    </div>
                <div class="stat-title text-lg">Yearly</div>
    <div class="stat-value text-primary">500+</div>
    <div class="stat-desc">New Users</div>
  </div>
  
  <div class="stat">
                <div class="stat-figure text-2xl">
     <FontAwesomeIcon icon={faComputer} />                        
    </div>
                <div class="stat-title text-lg">On Average</div>
     <div class="stat-value text-primary">10k+</div>
    <div class="stat-desc">Computer Items Manufactured Successfully</div>
  </div>
  </div>
        </div>
    );
};

export default BusinessSummary;