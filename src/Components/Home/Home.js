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

<div className="mt-5 home-post ">
      <h2 className="title mt-10">Traveling or Travelling?</h2>
      <p className="travel-post">
      It’s wonderful to travel—to meet new people, see new places, experience different cultures, live life the way life is lived somewhere else. Plenty of good things are associated with travel, but there’s one particular issue that can make traveling annoying: the spelling. Travel is easy enough to spell and not at all confusing, but “traveling,” “traveler,” “traveled”? These words are a common cause of confusion because some people spell them with one L while others use two. <br />  <br />
      Traveling or travelling depends on where is your audience. Traveling is the preferred spelling in the U.S. Travelling is the preferred spelling in the UK or in the Commonwealth. This American-British spelling difference carries for other forms: traveled or travelled and traveler or traveller.
      </p>
      </div>
                
      <div>
        <h1 className="my-5">Our Service</h1>
      <SpachialService></SpachialService>
      </div>
        </div>
    );
};

export default Home;