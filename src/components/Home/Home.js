import React from 'react';
import Banner from './Banner';
import Items from './Items';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Contact from './Contact';

const Home = () => {

    return (
        <div className='home-container'>
            <h1 className='text-primary text-center m-5'>Home</h1>
         <Banner></Banner>
         <Items></Items>
         <BusinessSummary></BusinessSummary>
         <Reviews></Reviews>
         <Contact></Contact>
        </div>
    );
};

export default Home;