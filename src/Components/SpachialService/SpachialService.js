import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../useFirebase/useAuth';
import Spachial from '../Spachial/Spachial';
import './SpachialService.css';


const SpachialService = () => {
    const [services, setServices ] = useState([]);
    const {isLoding} = useAuth();

    useEffect( () => {
        
        fetch('https://polar-brook-02820.herokuapp.com/spachial')
        .then(res => res.json())
        .then(data => setServices(data))
        console.log(services);

    },[])

    if(isLoding) {
        // return  <Spinner animation="border" variant="primary" />
        return <div class="spinner-border text-primary mt-5 mb-5 item-center" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    };
    return (
        <div>
           

            <div className="spachil-service">
                 {
                     services.map(service => <Spachial service={service}
                     key={service._id}>

                    </Spachial>)
                 }
            

            </div>
        
             
           
        </div>
    );
};

export default SpachialService;

    
   


           