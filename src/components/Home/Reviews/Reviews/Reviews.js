import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [ratings, setRatings] = useState([]);
    useEffect(() => {
        fetch('https://still-bastion-57482.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, []);
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 g-4">
                        {
                            ratings.map(rating =>
                                <Review
                                    rating={ rating.info }
                                    ratings={ rating }
                                ></Review>)
                        }


                    </div>
                </div>
            </div>




        </div>
    );
};

export default Reviews;