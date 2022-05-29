import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
                <div className='my-5'>
            <h5 className='text-primary'>Name</h5>
            <p>Nazibul Haque</p>
            </div>
                <div className='my-5'>
            <h5 className='text-primary'>Email</h5>
            <p>nazibhaque137@gmail.com</p>
</div>
                    <div className='my-5'>
            <h5 className='text-primary'>Education</h5>
            <li>Bsc in Computer Science and Engineering at Brac University</li>
            <li>A Levels from Manarat International</li>
            <li>A Levels from Manarat International</li>
</div>
                        <div className='my-5'>
            <h5 className='text-primary'>Skills as a Web Developer</h5>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JS</li>
            <li>React JS</li>
            <li>Mongo DB</li>
</div>
                            <div className='my-5'>
            <h5 className='text-primary'>Projects (Click to see the live site)</h5>
                <a href="https://warehouse-management-296a8.firebaseapp.com/">ProManager Grocery Management System</a>
                <br/>
                <a href="https://independent-service-prov-7e413.firebaseapp.com/">NH Photography</a>
                <br />
                <a href="https://superb-froyo-68bcd5.netlify.app/">Smart Watch World</a>
                <br />
        </div>
        </div>
    );
};

export default MyPortfolio;