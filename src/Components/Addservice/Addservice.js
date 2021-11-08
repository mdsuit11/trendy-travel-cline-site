import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data)
    axios.post('https://polar-brook-02820.herokuapp.com/spachial', data)
    .then(res => {
        // console.log(res);
        if(res.data.insertedId) {
            alert('added successfully');
            reset();
        }
    })
  };
    return (
        <div className='add-service mb-5 order-container'>
             <h2>Please add a service</h2>
            <div>
           
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
            {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
            <input type="number" {...register("price")} placeholder='price' />
            <textarea type="text" {...register("description")}cols="10" placeholder='description'></textarea>
            <input {...register("img")} placeholder="img url" />
            
            <input type="submit" />
    </form>
            </div>
        </div>
    );
};

export default AddService;