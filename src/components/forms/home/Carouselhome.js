import React,{useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel (){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../../Images/carousel3.jpg')}
          width="100%"
          height="900px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 
          style={
            {color:'Black',fontFamily:'sans-serif',fontSize:'30px',fontWeight:'bolder'}}>You're wasting time and money <br/>if you don't point your browser<br/> directly to Flight-Booky </h2>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../../Images/carousel1.jpg')}
          width="100%"
          height="900px"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h2 
        style={
          {color:'Black',fontFamily:'sans-serif',fontSize:'30px',fontWeight:'bolder'}}>Get the best deals</h2>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('../../../Images/cat.jfif')}
        width="100%"
        height="900px"
        alt="Second slide"
      />
      <Carousel.Caption>
      <h2 
      style={
        {color:'Black',fontFamily:'sans-serif',fontSize:'30px',fontWeight:'bolder'}}>100% price transparency</h2>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../../Images/cat6.jfif')}
      width="100%"
      height="900px"
      alt="Second slide"
    />
    <Carousel.Caption>
    <h2 
    style={
      {color:'Black',fontFamily:'sans-serif',fontSize:'30px',fontWeight:'bolder'}}>Trusted and free</h2>
   
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={require('../../../Images/cat4.jfif')}
    width="100%"
    height="900px"
    alt="Second slide"
  />
        <Carousel.Caption>
          <h2 
          style={
            {color:'Black',fontFamily:'sans-serif',fontSize:'30px',fontWeight:'bolder'}}>Find low fares other search engines miss</h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../../../Images/carousel2.jpg')}
          width="100%"
          height="900px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 
          style={
            {color:'Black',fontFamily:'sans-serif',fontSize:'30px',fontWeight:'bolder'}}>Flight-Booky offers users a more interesting, fun way to book travel

          </h2>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )

}

export default HomeCarousel;
