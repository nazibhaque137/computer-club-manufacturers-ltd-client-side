import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useItemInfo from '../../hooks/useItemInfo';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Purchase = () => {

    const { itemId } = useParams();
    const [item] = useItemInfo(itemId);
    
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            user: user.email,
            userName: user.displayName,
            item: item._id,
            itemName: item.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value
        }
        axios.post('https://lit-basin-85287.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is placed!');
                    event.target.reset();
                    navigate('/');
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Item Details</h2>
            <img className='w-100 item-img' src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>BDT {item.price_per_unit}</p>
            <p><small>{item.short_description}</small></p>
            <p>Min Order Quantity: {item.min_order_quantity}</p>
            <p>Available Quantity: {item.available_quantity}</p>


            <h2>Place Order For: {item.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='w-100 mb-2' type="text" name="quantity" placeholder='quantity' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );

};

export default Purchase;