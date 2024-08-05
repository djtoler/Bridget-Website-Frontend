import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Home.css';
import Subhead1 from './Subhead1';

const Home = () => {
  const [imageMoved, setImageMoved] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleImageClick = () => {
    const newImageMovedState = !imageMoved;
    setImageMoved(newImageMovedState);
    setShowCarousel(newImageMovedState); 
    setTimeout(() => setShowCarousel(newImageMovedState), 600); // Delay the visibility change for smooth transition

  };


  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1 // Show one item at a time
    }
  };

  return (
    <div className="overlay-container-home">
      <h1 className="title-home">Bridget</h1>
      <div className="container-home">
        <img 
          src={`${process.env.PUBLIC_URL}/bridget1.png`} 
          alt="Bridget" 
          className={`overlay-image ${imageMoved ? 'moved' : 'floating'}`}
          onClick={handleImageClick}
        />
        {showCarousel && (
          <div className={`carousel-container ${showCarousel ? 'visible' : ''}`}>
            <Carousel 
              responsive={responsive}
              showDots={true}
              infinite={true}
              autoPlay={false}
              arrows={true}
              renderDotsOutside={false}
              containerClass="carousel-container-class"
            >
              <div><img src={`${process.env.PUBLIC_URL}/cimg1.png`} alt="Slide 1" /></div>
              <div><img src={`${process.env.PUBLIC_URL}/cimg3.png`} alt="Slide 2" /></div>
              <div><img src={`${process.env.PUBLIC_URL}/cimg5.png`} alt="Slide 3" /></div>
              {/* Add more slides as needed */}
            </Carousel>
          </div>
        )}
      </div>
      <Subhead1 />
    </div>
  );
};

export default Home;
