import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, discription, img, price, star } = props.service;
    // console.log(props.service);
    return (
        <div>
            <div className="col service-card mb-5">
                <div className="card">
                    <img height="250px" src={ img } className="card-img-top p-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ discription }</p>
                        <Rating
                            initialRating={ star }
                            readonly
                            emptySymbol="fa fa-star-o fa-2x icon-color"
                            fullSymbol="fa fa-star fa-2x icon-color"

                        >
                        </Rating >
                        <h4>${ price }</h4>
                        <Link className="btn btn-info " to={ `/Details/${_id}` }>Buy Now</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;