import React from 'react';
import { NavLink } from 'react-router-dom';
import './Spachial.css';

const Spachial = (props) => {
    console.log(props.service);
    const {name, price, picture} = props.service;
    return (
        <div >
           <div className=" home-spimg mt-5 mx-5 mb-5">
           <img src={picture} alt="" />
            <h4>name: {name}</h4>
            <p>price: {price}</p>
           <NavLink to="/order">
           <button className="btn btn-primary">BOOK NOW</button>
           </NavLink>
            <div>
            </div>
           </div>
           
        </div>
    );
};

export default Spachial;