import React from 'react';
import useReviews from '../../hooks/UseReviews';
import ShowReview from '../showReview/ShowReview';
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h1>User Reviews</h1>
      <div className='user-reviews'>
        {
          reviews.map(review => <ShowReview
            key={review.id}
            review={review}
          ></ShowReview>)
        }
      </div>
    </div>
  );
};

export default Reviews;