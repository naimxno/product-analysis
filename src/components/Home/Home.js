import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/UseReviews';
import HomeReview from '../homeReview/HomeReview';
import './Home.css'

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const homeReviews = reviews.slice(0, 3);
  return (
    <div>
      <div className='home'>
        <div>
          <h1>What's New for 2022?</h1>
          <h1>Lamborghini Aventador!!</h1>
          <p>With a raucous 769-hp V-12 engine and an exotic exterior, the 2022 Lamborghini Aventador is the definition of a hyper car. While competitors such as the Ferrari SF90 embrace an electrified future, the Lambo's 12-cylinder mill swills fuel like a frat bro chugs a beer. Its scissor doors, wide and low proportions, and heavily vented bodywork double as a theater on wheels that's perpetually playing the Fast and Furious movies..</p>
          <button className='btn'>READ MORE</button>
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/2022-lamborghini-aventador-109-1625607587.jpg?crop=0.750xw:0.632xh;0.183xw,0.233xh&resize=1200:*" alt="" />
        </div>
      </div>
      <div className='home-review'>
        <h1>User Reviews</h1>
        {
          homeReviews.map(reviews => <HomeReview
            key={reviews.id}
            reviews={reviews}
          ></HomeReview>)
        }
        <button className='btn'>
          <Link className='btn' to="/reviews">SEE MORE REVIEWS</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;