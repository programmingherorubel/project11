import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Style/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='footer mt-5 border border-top-1'>
            <Row>
                <Col md={4} className='mx-auto text-center'>
                    <div>
                        <h1 style={{color:'#54092A'}}>Sp<span style={{color:'tomato'}}>o</span>rts <span style={{color:'tomato'}}>M</span>arket</h1>
                        <h6 style={{color:'#54092A'}}>A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, the thrill of driving and racing capability. Sports cars originated in Europe in the early 1900s and are currently produced by many manufacturers around the world.</h6>
                    </div>
                </Col>
                <Col md={4} className='mx-auto text-center'>
                    <h1 className='text-cenetr ' style={{color:'#54092A'}}>
                        Links
                    </h1>
                    <ul>
                        <li style={{listStyle:'none'}}><Link to='/' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Home</Link></li>
                        <li style={{listStyle:'none'}}><Link to='/blogs' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Blogs</Link></li>
                        <li style={{listStyle:'none'}}><Link to='/login' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Login</Link></li>
                        <li style={{listStyle:'none'}}><Link to='/reg' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Registration </Link></li>
                    </ul>
                </Col>

                <Col md={4}>
                    <div class="input-group mb-3">
                        <input className='footerBotton form-control' type="text" class="form-control" placeholder="Input Your Email" style={{background:'transparent'}}/>
                        <button style={{background:'#54092A',color:'white',fontWeight:'700'}} class="btn" type="button" id="button-addon2">Subscribe</button>
                    </div>
                    <h4 className='text-center text-white'>Contact Us</h4>
                    <p className='text-center text-white'><b>Email</b> : fardintazbeed@gmail.com</p>
                    <p className='text-center text-white'><b>Email</b> : md.rubel007@gmail.com</p>
                    <p className='text-center text-white'><b> Number</b> ++880 1907626245</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;