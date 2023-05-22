import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const MarqueeSlider = () => {
    const [markData,setMarkData]=useState([])

    useEffect(()=>{
        fetch('https://project11-eight.vercel.app/addtoys')
        .then(res => res.json())
        .then(data => setMarkData(data))
    },[])

    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col>
                <Marquee>
                    {
                        markData.map(mark =><div>
                            <Link style={{textDecoration:'none',color:'black'}} to={`/addtoys/${mark._id}`}>
                                <img src={mark.imgUrl} style={{width:'400px'}} alt="" />
                                <h3>{mark.name}</h3>
                            </Link>
                        </div>)
                    }
                    </Marquee>
                </Col>
            </Row>
        </Container>
    );
};

export default MarqueeSlider;