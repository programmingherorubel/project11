import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import useRouteTitle from '../hooks/useDaynamicTitle';

const ViewDetail = () => {
    useRouteTitle(' Details')
    const {_id,name,sallerName,email,category,price,ratings,quantity,imgUrl,description} = useLoaderData() 
    
    return (
        <Container>
            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Col md={6}>
                    <div className='p-4' data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                        <h3 data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='p-2'>{name}</h3>
                        <Rating
                            placeholderRating={ratings}
                            emptySymbol={<i className="text-warning fa-sharp fa-regular fa-star"></i>}
                            placeholderSymbol={<i className="text-warning fa-sharp fa-solid fa-star"></i>}
                            fullSymbol={<i className="text-warning fa-sharp fa-solid fa-star"></i>}
                        /><br /><br />
                        <p data-aos="fade-up"data-aos-anchor-placement="top-bottom" >Quantity<b>{quantity}</b></p>
                        <b style={{background:'#54092A',color:'white',borderRadius:'6px'}} className='p-2'>{sallerName}</b> <br /> <br />
                        <b data-aos="fade-up"data-aos-anchor-placement="top-bottom" >Price: <FontAwesomeIcon style={{color:'red'}} icon={faDollar} /> {price}</b>
                        <p data-aos="fade-up"data-aos-anchor-placement="top-bottom"  style={{color:'gray'}}>{description}</p>
                        
                    </div>
                </Col>
                <Col md={6}>
                    <img data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={imgUrl} className='img-fluid' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default ViewDetail;