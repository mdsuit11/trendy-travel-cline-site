import React from 'react';

const OrderDetils = ({order}) => {
    const {_id, createdAt} = order;


    /* axios.delete('http://localhost:5000/orders', data)
        .then(res => res.json())
        .then(data => console.log(data)) */

       const handleOnclick = id => {
        
           const url = (`https://polar-brook-02820.herokuapp.com/orders/${id}`)
          fetch(url, {
              method: 'DELETE',          
          })
          .then()
        
       }
    return (
        <div className="order-detials d-flex  p-2">
            <p><span className="mr-5">My Order Id :</span>{_id}</p>
            {/* <p>time{createdAt}</p> */}
            <button onClick={()=> handleOnclick(_id)} type="button"  className="btn btn primary">Delete Order</button>
        </div>
    );
};

export default OrderDetils;