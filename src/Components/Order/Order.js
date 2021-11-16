import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../useFirebase/useAuth';
import './Order.css'


const Order = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();

  const onSubmit = data => {
    console.log(data)
    fetch('https://polar-brook-02820.herokuapp.com/orders', {
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data=> {
        console.log(data);
        if(data.insertedId) {
                    alert('added Your Products successfully');
                    reset();
                }
    })
    
    // .then(data=> {
    //     console.log(data);
    //     
  };
    return (
        <div className='add-service mb-5 order-container'>
            <h2>BOOK NOW</h2>
            
                
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} /> <br />
            {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
            <input type="email" {...register("eamil")} defaultValue={user.email} /> <br />
            <textarea type="text" {...register("address")}cols="10" placeholder='type your addres'></textarea><br />
            <input {...register("zipcode")} placeholder="zip code" /><br />
            
            <input type="submit" />
    </form>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio mollitia eius excepturi dignissimos tempora dolorum,*/}
        </div>
    );
};


export default Order;



// { pattern: /^[A-Za-z]+$/i }