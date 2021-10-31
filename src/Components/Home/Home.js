import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import img1 from '../../img/slider/slider-1.jpg';
import img2 from '../../img/slider/slider-2.jpg';
import img3 from '../../img/slider/slider-3.jpg';
import SpachialService from '../SpachialService/SpachialService';

const Home = () => {
    return (
        <div className='main-container'> 

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 h-50" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
      <div>
      <SpachialService></SpachialService>
      </div>
        </div>
    );
};

export default Home;