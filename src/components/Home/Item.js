import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, image, short_description, min_order_quantity, available_quantity, price_per_unit } = item;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className='item-container'>
            <img className='w-100 item-img' src={image} alt="" />

            <h2>{name}</h2>
            <p>BDT {price_per_unit}</p>
            <p><small>{short_description}</small></p>
            <p>Min Order Quantity: {min_order_quantity}</p>
            <p>Available Quantity: {available_quantity}</p>
        {/*
            <Link to={`/purchase/${_id}`}>
            <button disabled={available_quantity === 0} className='btn btn-primary purchase-btn'>Purchase: {name}</button>
            </Link>
    */}
            <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary'>Purchase: {name}</button>
        </div> 
    );
};

export default Item;

