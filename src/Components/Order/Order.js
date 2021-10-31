import React from 'react';
import { useForm } from 'react-hook-form';
import './Order.css';

const Order = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (e) => {
        console.log('this is warking');
        console.log(e.target.value);
    }
    return (
        <div className="main-container">
            <h2>send your detiels</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="frist name" /> <br />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="last name" /> <br />
                <input {...register("text", { pattern: /^[A-Za-z]+$/i })} placeholder="your address" /> <br />
                <input type="number" {...register("age", { min: 18, max: 99 })} placeholder="your phone number" /> <br />
                <input type="submit" />
           </form>
        </div>
    );
};

export default Order;