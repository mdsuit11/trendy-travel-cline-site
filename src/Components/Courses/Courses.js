import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [course, setCourse] = useState([])
    
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [])

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