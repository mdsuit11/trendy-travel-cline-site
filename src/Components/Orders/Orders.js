import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../useFirebase/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const {user} = useAuth();

    useEffect(() => {
        fetch(`https://polar-brook-02820.herokuapp.com/orders?email=${user.email}`, {
            headers:{
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res =>{
            if(res.status === 200){
                return res.json()
            }
            else if(res.status === 401){
                    history.push('/login')
            }
        })
        .then(data => setOrders(data));
    },[])
    return (
        <div className="my-3">
            <h2 className="my-5"> Oders Is: {orders.length}</h2>
            {
                orders.map(order=> <li key={order._id}>

                    {order._id}
                </li>)
            }
        </div>
    );
};

export default Orders;