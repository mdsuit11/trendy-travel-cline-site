import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Spachial from '../Spachial/Spachial';
import './SpachialService.css';


const SpachialService = () => {
    const [services, setServices ] = useState([]);

    useEffect( () => {
        
        fetch('http://localhost:5000/spachial')
        .then(res => res.json())
        .then(data => setServices(data))
        console.log(services);

    },[])
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

    
   


           