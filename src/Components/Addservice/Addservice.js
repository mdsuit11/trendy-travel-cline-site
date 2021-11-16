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
        <div className='add-service mb-5 '>
             <h2>Please add a service</h2>
            <div>
           
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <input style={{width: '20%'}} {...register("name", { required: true, maxLength: 20 })} placeholder="name" /> <br />
            <input style={{width: '20%'}} type="number" {...register("price")} placeholder='price' /> <br />
            <textarea style={{width: '20%'}} type="text" {...register("description")}cols="10" placeholder='description'></textarea> <br />
            <input style={{width: '20%'}} {...register("img")} placeholder="img url" /> <br /> <br />
             
            <input type="submit" />
    </form>
            </div>
        </div>
    );
};

export default AddService;