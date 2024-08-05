import React from 'react';
import './About.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const videos = [
  { title: 'Video 1', subtitle: 'Introduction', src: 'video1.mp4' },
  { title: 'How Bridget Works', subtitle: 'Feature Overview', src: 'video2.mp4' },
  { title: 'Video 3', subtitle: 'How it Works', src: 'video3.mp4' },
  { title: 'Video 4', subtitle: 'Benefits', src: 'video4.mp4' },
  { title: 'Video 5', subtitle: 'Testimonials', src: 'video5.mp4' },
  { title: 'Video 6', subtitle: 'Pricing', src: 'video6.mp4' },
  { title: 'Video 7', subtitle: 'FAQ', src: 'video7.mp4' },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-wrapper">
        <div className="about-content">
          <h1>
            Bridget
          </h1>
          {/* <img src={`${process.env.PUBLIC_URL}/bridget1.png`} className="bridget-image" alt="Bridget" /> */}
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
