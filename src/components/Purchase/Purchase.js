import React from 'react';
import { useParams } from 'react-router-dom';
import useItemInfo from '../../hooks/useItemInfo';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Purchase = () => {

    const { itemId } = useParams();
    const [item] = useItemInfo(itemId);
    
    const [user] = useAuthState(auth);

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
                }
            })
    }
/*
    const handleOrderQuantity = (quantity) =>{
        
        if (quantity < item.min_order_quantity && quantity > item.available_quantity){
            alert('Quantity invalid')
    }
    }
*/
    return (
        <div className='w-50 mx-auto text-center'>
            <h1 className='text-4xl font-bold uppercase my-5'>Item Details</h1>
            <img className='w-100 item-img' src={item.image} alt="" />
            <h2><span className='text-primary'>Item Name: </span>{item.name}</h2>
            <p><span className='text-primary'>BDT: </span>{item.price_per_unit}</p>
            <p><span className='text-primary'>Description: </span><small>{item.short_description}</small></p>
            <p><span className='text-primary'>Min Order Quantity: </span>{item.min_order_quantity}</p>
            <p><span className='text-primary'>Available Quantity: </span>{item.available_quantity}</p>


            <h2>Place Order for {item.name}</h2>
            <form className="my-5" onSubmit={handlePlaceOrder}>
                <input className='input input-bordered bg-slate-50 w-100 mb-2 bg-white' type="email" disabled value={user?.email || ''} name="email" placeholder='email'/>
                <br />
                <input className='input input-bordered bg-slate-50 w-100 mb-2 bg-white' type="text" disabled value={user?.displayName || ''} name="name" placeholder='name'/>
                <br />
                <input className='input input-bordered bg-slate-50 w-100 mb-2' type="text" name="address" placeholder='Enter address' autoComplete='off' required />
                <br />
                <input className='input input-bordered bg-slate-50 w-100 mb-2' type="text" name="phone" placeholder='Enter phone' required />
                <br />
                <input className='input input-bordered bg-slate-50 w-100 mb-2' type="text" name="quantity" placeholder='Enter quantity' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );

};

export default Purchase;