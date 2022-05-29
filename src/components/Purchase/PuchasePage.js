import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import useItemInfo from '../../hooks/useItemInfo';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const PurchasePage = () => {
    const { register, formState: { errors }, formState, handleSubmit, reset } = useForm({
    mode: "onChange"
  });

    const { itemId } = useParams();
    const [item] = useItemInfo(itemId);
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const order = {
            user: user.email,
            userName: user.displayName,
            item: item._id,
            itemName: item.name,
            address: data.address.value,
            phone: data.phone.value,
            quantity: data.quantity.value
        }
        
        const url = "http://localhost:5000/order";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                toast('Your Order is placed!');
                console.log(result);
            })
    };


    return (
        <div className='w-50 mx-auto text-center'>
            <h1 className='text-4xl font-bold uppercase my-5'>Item Details</h1>
            <img className='w-100 item-img' src={item.image} alt="" />
            <h2><span className='text-primary'>Item Name: </span>{item.name}</h2>
            <p><span className='text-primary'>BDT: </span>{item.price_per_unit}</p>
            <p><span className='text-primary'>Description: </span><small>{item.short_description}</small></p>
            <p><span className='text-primary'>Min Order Quantity: </span>{item.min_order_quantity}</p>
            <p><span className='text-primary'>Available Quantity: </span>{item.available_quantity}</p>

            <h2>Place an Order for {item.name}</h2>
            <h2><span className='text-primary'>User:</span> {user.displayName} </h2>
            <h2><span className='text-primary'>Email:</span> {user.email} </h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Enter address"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Enter phone"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: 'Phone is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Enter quantity"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                    </label>
                </div>

                <input disabled={!formState.isValid}  className='btn w-full max-w-xs text-white' type="submit" value="Place Order" />

                </form>
        </div>
    );
};

export default PurchasePage;