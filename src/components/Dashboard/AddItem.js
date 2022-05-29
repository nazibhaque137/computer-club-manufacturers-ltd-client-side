import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'db835733b5762d81682d12b9d2f71054';


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const item = {
                        name: data.name,
                        image: img,
                        short_description: data.short_description,
                        min_order_quantity: data.min_order_quantity,
                        available_quantity: data.available_quantity,
                        price_per_unit: data.price_per_unit
                    }
                    // send to your database 
                    fetch('http://localhost:5000/item', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            //authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(item)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Item added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the item');
                            }
                        })

                }

            })
    }

    return (
        <div className="w-50 mx-auto">
            <h2 className="text-2xl">Add a New Item</h2>
            <form className='d-flex flex-column ml-50' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Item Name"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Short Description"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("short_description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.short_description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.short_description.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Min order quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Min order quantity"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("min_order_quantity", {
                            required: {
                                value: true,
                                message: 'Min order quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.min_order_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.min_order_quantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("available_quantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.available_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs bg-white"
                        {...register("price_per_unit", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price_per_unit?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price_per_unit.message}</span>}
                    </label>
                </div>


                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;