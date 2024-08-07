import React from 'react';
import './About.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

// Import video files
import vid1 from './vid1.mp4';
// Import other video files similarly...

const videos = [
  { title: 'Video 1', subtitle: 'Introduction', src: vid1 },
  { title: 'How Bridget Works', subtitle: 'Feature Overview', src: vid1 },
  { title: 'Video 3', subtitle: 'How it Works', src: vid1 },
  { title: 'Video 4', subtitle: 'Benefits', src: vid1 },
  { title: 'Video 5', subtitle: 'Testimonials', src: vid1 },
  { title: 'Video 6', subtitle: 'Pricing', src: vid1 },
  { title: 'Video 7', subtitle: 'FAQ', src: vid1 },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-wrapper">
        <div className="about-content">
          <h1>Bridget</h1>
          <p>
            Our EdTech app uses the latest technologies like AR/VR and AI to provide an immersive learning experience.
          </p>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            transitionTime={600}
            showStatus={false}
          >
            {videos.map((video, index) => (
              <div key={index} className="carousel-item">
                <h2>{video.title}</h2>
                <h4>{video.subtitle}</h4>
                <video className="carousel-video" controls>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;
