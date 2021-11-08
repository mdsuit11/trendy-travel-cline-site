import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../useFirebase/useAuth';
import './Order.css';

const Order = () => {
    const { reset } = useForm();
    const {user} = useAuth();
    const [bookingInfo, setBookingInfo] = useState();

    const date = new Date();

       const handleOnblur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);
        console.log(newInfo);
       }
    const handleBookingSubmit = () => {
        // collect data
        const booking = {
            ...bookingInfo,
            serviceName:user.displayName,
            date: date.toLocaleString(),
        }
        console.log(booking);
       fetch('https://polar-brook-02820.herokuapp.com/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking) 
       })
       .then(res => res.json())
       .then(data => console.log(data))
       
       
       /* */
    }

    return (
        <div className="order-container ">
            
            <h2>Booking Now</h2>
            
            <div>
            <form onSubmit={handleBookingSubmit}>
           <input 
            onBlur={handleOnblur}
            name="patientName" 
            defaultValue={user.displayName} 
            class="form-control form-control-lg" 
            type="text" />
          <input  
            onBlur={handleOnblur} 
            name="email" 
            defaultValue={user.email} 
            class="form-control" 
            type="text" />
          {/* <input  name="patientName" class="form-control form-control-sm" type="text" /> */}
          <input  
            onBlur={handleOnblur} 
            class="form-control form-control-sm" 
            type="text" 
            name="date"
            defaultValue={(new Date).toLocaleDateString()} />
          <input 
            name="phone" 
            onBlur={handleOnblur}
            class="form-control form-control-sm" 
            type="text" 
            placeholder="your phone number" />
          <button type="submit" className="btn btn-primary mt-3">Send</button>
           </form>
            </div>
          
        </div>
    );
};

export default Order;



// { pattern: /^[A-Za-z]+$/i }