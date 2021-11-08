import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import useAuth from '../../useFirebase/useAuth';
import './Courses.css';


const Courses = () => {
    const [course, setCourse] = useState([]);
    const {isLoding} = useAuth();
    

    useEffect( () => {
        fetch('https://polar-brook-02820.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, []);
    if(isLoding) {
        // return  <Spinner animation="border" variant="primary" />
        return <div class="spinner-border text-primary mt-5 mb-5 item-center" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    };


    return (
        <div>
                <div className="courses-container">
                {
                course.map(cours=> <Course cours={cours}
                key={cours._id}></Course>)

            }
           
                </div>
            
            
        </div>
    );
};

export default Courses;