import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://lit-basin-85287.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'>Reviews</h1>
                <div className="reviews-container">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;