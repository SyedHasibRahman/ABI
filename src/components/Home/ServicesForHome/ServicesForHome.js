import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ServicesForHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-chamber-32875.herokuapp.com/products3forhome')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className=" Our-Services py-4">
            <div className="container">

                <h2 className="py-4">Our Products</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        services.map(service => <div
                            key={ service._id }
                        >
                            <div className="col service-card mb-5 ">
                                <div className="card">
                                    <img height="250px" src={ service.img } className="card-img-top p-3" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{ service.name }</h5>
                                        <p className="card-text">{ service.discription }</p>
                                        <Rating
                                            initialRating={ service.star }
                                            readonly
                                            emptySymbol="fa fa-star-o fa-2x icon-color"
                                            fullSymbol="fa fa-star fa-2x icon-color"

                                        >
                                        </Rating >
                                        <h4>${ service.price }</h4>
                                        <Link className="btn btn-info " to={ `/Details/${service._id}` }>Buy Now</Link>
                                    </div>

                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <Link className="btn btn-info " to="/products">Explore All</Link>
            </div>
        </div>
    );
};

export default ServicesForHome;