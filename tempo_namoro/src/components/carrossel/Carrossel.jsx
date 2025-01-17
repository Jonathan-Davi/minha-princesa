import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrossel.css';

const Carrossel = () => {
  return (
    <div className="carrossel-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src="./src/images/foto1.jpeg" alt="Foto 1" />
        </div>
        <div>
          <img src="./src/images/foto2.jpeg" alt="Foto 2" />
        </div>
        <div>
          <img src="./src/images/foto3.jpeg" alt="Foto 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carrossel;