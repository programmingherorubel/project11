import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import '../Style/Banner.css'

const Banner = () => {
    const [content,setContent] = useState([])
    let settings = {
        dots: false,
        infinite: true,
        arrows:false,
        Autoplay:true,
        autoplaySpeed: 1000,
        pauseOnFocus:false,
        slickPlay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      useEffect(()=>{
        fetch('sliderData.json')
        .then(res => res.json())
        .then(data => setContent(data))
      },[])

      
     
    return (
        <Container fluid className='banner'>
            <Row>
                <Col md={10} className='mx-auto'>
                    <Slider {...settings}>
                        {
                            content.map(slide => <div key={slide.title}>
                                <h1 data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='mt-3' style={{color:'white'}}>{slide.shortTitles}</h1>
                                <h3 data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='mt-3' style={{color:'white'}}>{slide.title}</h3>
                                <p data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='mt-3' style={{color:'gray'}}>{slide.description}</p>
                                <button data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='btn border-border-1 px-4'style={{background:'#54092A',color:'white',fontWeight:'700'}}>Go Toys</button>
                            </div>)
                        }
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;