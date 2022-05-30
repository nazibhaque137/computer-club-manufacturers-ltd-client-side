import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const MyProfile = () => {
    
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {

        const email = user.email;

        console.log(data);

        const url = `https://lit-basin-85287.herokuapp.com/user/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Your profile is updated!');
                console.log(result);
            })
        }
    

    return (
        <div>
            <h1 className="text-2xl">My Profile</h1>

            <h2><span className='text-primary'>User:</span> {user.displayName} </h2>
            <h2><span className='text-primary'>Email:</span> {user.email} </h2>


            <div className='w-50 mx-auto'>
                <h2>Update Profile Info</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered bg-white mb-2' placeholder='Your Education' type="text" {...register("education", { required: false })} />
                    <input className='input input-bordered bg-white mb-2' placeholder='Your Location' type="text" {...register("location", { required: false })} />
                    <input className='input input-bordered bg-white mb-2' placeholder='Phone Number' type="text" {...register("phone", { required: false })} />
                    <input className='input input-bordered bg-white mb-2' placeholder='Linkedin URL' type="text" {...register("linkedin_url", { required: false })} />
                    
                     <input className="btn btn-primary" type="submit" value="Update Profile" />
                </form>
            </div>
    
        </div>
    );
     
};

export default MyProfile;