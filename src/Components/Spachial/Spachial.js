import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../useFirebase/useAuth';
import './Spachial.css';

const Spachial = (props) => {
    const {_id} = useAuth();
    console.log(props.service);
    const {name, price, picture, description} = props.service;
    return (
        <div >
           <div className=" home-spimg mt-5 mx-5 mb-5">
           <img src={picture} alt="" />
            <h4>name: {name}</h4>
            <p>price: {price}</p>
            <p>{description}</p>
            <Link to={`/order/${_id}`}>
              <button className="btn btn-warning">BOOK NOW</button>
          </Link>
            <div>
            </div>
           </div>
           
        </div>
    );
};

export default Spachial;