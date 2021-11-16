import React from 'react';
import { useForm } from 'react-hook-form';

const OrderDetils = ({order}) => {
    const {_id, name, address, } = order;
    const { reset } = useForm();
            //  delete ORders 
        const handleDeleteORders = id => {
            console.log(id);
            const url = `https://polar-brook-02820.herokuapp.com/orders/${id}`
            fetch(url,{
                method: 'DELETE',
                headers:{
                    
                }
            })
            .then(res => res.json())
            .then(data=> {
                if(data.deletedCount > 0) {
                    alert('Delete Successfully')
                    reset();
                }
            })
            
        }
    return (
        <div className="order-detials d-flex  p-2">
            <p><span className="mr-5">Name :</span>{name} <br />
            <span className="mr-5">address :</span>{address} <br />
            <span className="mr-5">My Order Id :</span>{_id}
            </p>
            
            
            {/* <p>time{createdAt}</p> */}
            <button onClick={() =>handleDeleteORders(_id)} type="button"  className="btn btn primary">Delete Order</button>
        </div>
    );
};

export default OrderDetils;