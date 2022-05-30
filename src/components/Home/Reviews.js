import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://lit-basin-85287.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold uppercase my-5'>Recent Reviews from our customers</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    
                    reviews.slice(reviews.length-3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                       
                }
                </div>
            </div>
    );
};

export default Reviews;