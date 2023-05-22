import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/subscribe.css'

const Subscribe = () => {
    return (
        <Container fluid className="subscribe" data-aos="fade-up"data-aos-anchor-placement="top-bottom">
            <Row>
                <Col md={6} className='mx-auto'>
                <form data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                    <h1 className='text-center text-white' data-aos="fade-up"data-aos-anchor-placement="top-bottom">Contact Us</h1>
                    <div class="form-group" data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                        <b for="name " style={{color:'white',fontWeight:'600'}}>Name:</b>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                    <div class="form-group" data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                        <b for="email " style={{color:'white',fontWeight:'600'}}>Email:</b>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                    </div>
                    <div class="form-group" data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                        <b for="message " style={{color:'white',fontWeight:'600'}}>Message:</b>
                        <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                    </div>
                    <div className='text-center mt-4' data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                    <button data-aos="fade-up"data-aos-anchor-placement="top-bottom" type="submit" class="btn w-50" style={{background:'#54092A',color:'white',fontWeight:'700'}}>Send Message</button>
                    </div>
                </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Subscribe;