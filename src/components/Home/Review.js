import React from 'react';

const Review = ({ review }) => {
    const { _id, rating, description } = review;


    return (
        <div className='grid place-items-center'>
        <div class="bg-slate-100 card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
    <h2 class="card-title">
      {rating} / 5
    </h2>
    <p>{description}</p>
  </div>
</div>
</div>
    );
};

export default Review;