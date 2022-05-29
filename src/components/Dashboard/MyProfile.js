import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h1 className="text-2xl">My Profile</h1>

            <h2><span className='text-primary'>User:</span> {user.displayName} </h2>
            <h2><span className='text-primary'>Email:</span> {user.email} </h2>


            

        </div>
    );
};

export default MyProfile;