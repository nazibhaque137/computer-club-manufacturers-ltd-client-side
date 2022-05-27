import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {

    //Google Sign In
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return 'Loading...';
    }

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>;
    }

    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <button className="btn btn-primary m-2" onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default SocialLogin;