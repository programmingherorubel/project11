import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../assets/h (1).jpg'
import img2 from '../assets/h (2).jpg'
import img3 from '../assets/h (3).jpg'
import img4 from '../assets/w (1).jpg'
import img5 from '../assets/w (2).jpg'
import img6 from '../assets/w (3).jpg'
import '../Style/Gallery.css'

const Gallery = () => {
    return (
        <Container>
            <Row >
                <Col lg={4} sm={6} data-aos-anchor-placement="top-bottom">
                    <div  className='mt-3'><img data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={img4} className='img img-fluid' alt="" /></div>
                    <div  className='mt-3'><img data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={img1} className='img img-fluid' alt="" /></div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className='mt-3'><img data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={img2} className='img img-fluid' alt="" /></div>
                    <div className='mt-3'><img data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={img5} className='img img-fluid' alt="" /></div>
                </Col>
                <Col lg={4} sm={6}>
                    <div className='mt-3'><img data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={img6} className='img img-fluid' alt="" /></div>
                    <div className='mt-3'><img data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={img3} className='img img-fluid' alt="" /></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;