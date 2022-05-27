import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { _id, name, rating, description } = review;


    return (
        <div className='review-container'>
            <h1>{name}</h1>
            <h2>{rating}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Review;