import React from 'react';
import Banner from './Banner';
import Items from './Items';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Contact from './Contact';
import Offer from './Offer';

const Home = () => {

    return (
        <div>
         <Banner></Banner>
         <Items></Items>
         <BusinessSummary></BusinessSummary>
         <Reviews></Reviews>
         <Offer></Offer>
         <Contact></Contact>
        </div>
    );
};

export default Home;