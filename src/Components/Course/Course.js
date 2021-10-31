import React from 'react';
import './Cours.css';
import { NavLink } from 'react-router-dom';

const Course = (props) => {
    const {name, price, picture} = props.cours;
   
    return (
        <div className='cours-container'>
         
         <img src={picture} alt="" />
          <h2> Name : {name}</h2>
          <h3>Price : {price}</h3>
            <NavLink to="/order">
                <button className="cours-btn">BOOK NOW</button>
                </NavLink>

        </div>
    );
};

export default Course;