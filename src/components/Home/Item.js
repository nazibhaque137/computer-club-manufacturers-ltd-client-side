import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, image, short_description, min_order_quantity, available_quantity, price_per_unit } = item;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className='grid place-items-center'>
        <div class="card w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img alt="items-img" src={image} class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h4>BDT {price_per_unit}</h4>
                <p>{short_description}</p>
                <p>Min Order Quantity: {min_order_quantity}</p>
                <p>Available Quantity: {available_quantity}</p>
    <div class="card-actions">
        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary'>Purchase: {name}</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Item;

