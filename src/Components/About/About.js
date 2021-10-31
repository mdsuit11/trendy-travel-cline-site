import React from 'react';
import './About.css';
import img1 from './images.jpg'

const About = () => {
    return (
        <div className="about">
            <h2>About Us</h2>
            <p className="item-center">
           Travelin’ is known for high quality footwear, made from natural and durable materials. Designed in The Netherlands, produced in Europe and created especially for those who love to live outside. It’s where we walk...
           </p>
           <section className="d-flex">
           <div>
           <img className="w-75" src={img1} alt="" />
           </div>

          <div>
           <h3>
           An invitation to explore
           </h3>
           <p>
           Whilst exploring the not-so-rugged landscapes of the Dutch hill ridge in Utrecht, two colleagues from the industry pondered over the question: “what makes a good shoe”? It should be comfortable, sure. It should be functional and look good too. But more than anything, they agreed, it should take you places. A good shoe is an invitation to explore, every day again.
           </p>
           <h3>
           The journey
           </h3>
           <p>Combining 45 years of experience and passion, the two men designed their first Travelin’ collection. They pledged to focus on the use of natural materials and to continue to invest in the development of innovative technologies. Surely, they were able to create a premium brand that seamlessly aligned with their vision on quality, design, function and life.</p>
           <h3>
           Today
           </h3>
           <p>
           Today, every Travelin’ Outdoor shoe is still designed in The Netherlands and produced in Europe. We continue to explore new technologies, innovative solutions and good designs, ensuring you don’t ever have to stop exploring. Will you walk with us?
           </p>
           
          </div>
           </section>
        </div>
    );
};

export default About;