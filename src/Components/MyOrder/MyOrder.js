import React, { useEffect, useState } from 'react';
import OrderDetils from './OrderDetils/OrderDetils';
import './myOReder.css';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('https://polar-brook-02820.herokuapp.com/orders')
        .then(res=> res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders);
    return (
        <div className="orderd-container">
            {
                orders.map(order => <OrderDetils order={order}
                    key={order._id}
                ></OrderDetils>)
            }
           
            
        </div>
    );
};

export default MyOrder;