import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../useFirebase/useAuth';
import './Login.css';
const Login = () => {
    const {error, logInInput, SignInGoogle} = useAuth();
    const location = useLocation();
    const histry = useHistory();
    const redirectUrl = location.state?.from || '/home'


    const handleSumitlogin = e => {

        logInInput()
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        SignInGoogle()
      .then(result => {
            // console.log(result.user);
            histry.push(redirectUrl)
            // setUser (result.user)    
        });

    }
    return (
        <div className="login-container rgs-from">
            <div className='registation-from'>
           <form onSubmit={handleSumitlogin}>
           <h1>Please Login</h1>
            <input type="email" placeholder="type your email"  required />
            <br />
            <input type="password" placeholder="type your pass" required />
            <br />
            <button type="submit" className='mt-5'>Log In</button>
           </form>
        
                <p className='text-danger'>{error}</p>
                <button className='btn btn-primary mt-3' onClick={handleGoogleLogin}>Google Sign In</button>
            <Link to="/profile">
            <p>creat an accoutn</p>
            </Link>
            
            </div>
            <br />
            <br />
            <div className='mb-5'></div>
        </div>
    );
};

export default Login;