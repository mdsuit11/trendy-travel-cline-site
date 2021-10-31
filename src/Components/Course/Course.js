import React from 'react';
import './Cours.css';
import { Link, NavLink } from 'react-router-dom';


const Course = (props) => {
    
    const {_id, name, price, picture} = props.cours;
   
    return (
        <div className='cours-container'>
         
         <img src={picture} alt="" />
          <h2> Name : {name}</h2>
          <h3>Price : {price}</h3>
          <Link to={`/order/${_id}`}>
              <button className="btn btn-warning">BOOK NOW</button>
          </Link>
            {/* <NavLink to="/order">
                <button className="cours-btn">BOOK NOW</button>
                </NavLink> */}

        </div>
    );
};

export default Course;