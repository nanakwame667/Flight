import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let style = {
    color: '#e3e3e3', fontFamily: 'sans-serif', fontSize: '30px', fontWeight: 'bold',
    'font-size': '200%',
    'font-weight': '500',
    'text-shadow': '1px 1px 1px black',
    'padding-bottom': '1rem'
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:'100%', height:'80%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../../Images/carousel3.jpg')}
          width="100%"
          height="80%"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={style}> Search for flight <br /> at Flight-Booky </h2>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../../Images/carousel1.jpg')}
          width="100%"
          height="80%"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2
            style={style}>Get the best deals</h2>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../../Images/cat4.jfif')}
          width="100%"
          height="80%"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2
            style={style}>Find low fares other search engines miss</h2>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../../Images/carousel2.jpg')}
          width="100%"
          height="80%"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2
            style={style}>Flight-Booky offers users a more interesting, fun way to book travel

          </h2>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )

}

export default HomeCarousel;
