import React from 'react';

const HomeReview = (props) => {
  const { name, img, Review, rating } = props.reviews;
  return (
    <div className='review-container'>
      <p>"{Review}"</p>
      <div className='review-info'>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>Rating : {rating}</p>
      </div>
    </div>
  );
};

export default HomeReview;