import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../useFirebase/useAuth';
import './Profile.css';

const Profile = () => {
    const { SignInGoogle, error, handleRegistation, handlepasswordCheng, handleEmailCheng } = useAuth();
    const histry = useHistory();
    const location = useLocation();
    const uri = location.state?.form || '/home';

    const handleSubmitFrom = e => {
        handleRegistation();
        histry.push(uri)
        e.preventDefaSult();
        
    }

        const handleGoogleSignUp = (location) => {
            SignInGoogle()
            
            histry.push(location)
            
        }
    return (
        <div className="login-container rgs-from">

            <div className='registation-from'>
            <form onSubmit={handleSubmitFrom}>
            <input type="text" placeholder="name"/> <br />
            <input type="text" placeholder="last name"/> 
            <br />
            <input onBlur={handleEmailCheng} type="email" placeholder="type your email"/>
             <br />
            <input onBlur={handlepasswordCheng} type="password" placeholder="type password"/> 
            <br />
            {/* <input type="checkbox" name="male" id="" /> Male 
            <input type="checkbox" name="male" id="" /> Female <br /> <br /> */}
                <h3 className='text-danger'>{error} </h3>

                <button className="btn btn-primary" type="submit">Submit</button>

           
            </form>
            <button className='btn btn-primary mt-3' onClick={handleGoogleSignUp}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Profile;