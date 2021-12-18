import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router';
import './AddProducts.css';

const AddAProduct = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const redirect_uri = location.state?.from || '/products';
    const onSubmit = data => {
        axios.post('https://still-bastion-57482.herokuapp.com/products', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Order Successful!');
                    navigate(redirect_uri);
                    reset();
                }
            })
    };
    return (
        <div className="p-5 mt-5 addproducts">

            <h2 className="mt-2">Please  add a Products</h2>
            <hr />
            <hr />
            <form onSubmit={ handleSubmit(onSubmit) }>
                <input { ...register("name", { required: true }) } placeholder="Title" />
                <input type="number" { ...register("price",) } placeholder="Price" />
                <input type="number" { ...register("star",) } placeholder="star rating" />
                <input { ...register("info") } placeholder="Short Description" />
                <textarea  { ...register("discription") } placeholder="Description" />
                <input { ...register("img") } placeholder="Image URL" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;