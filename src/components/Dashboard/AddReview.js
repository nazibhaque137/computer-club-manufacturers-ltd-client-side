import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = "https://lit-basin-85287.herokuapp.com/review";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Your Review is posted!');
                console.log(result);
            })
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Add a Review</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Rating' type="text" {...register("rating", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true })} />
                <input type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;