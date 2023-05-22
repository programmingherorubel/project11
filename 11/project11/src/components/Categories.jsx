import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleCategoryData from './SingleCategoryData';

const Categories = () => {
    const [categoryData,setCategoryData] = useState([])
    const [activeData,setActiveData] = useState('Exotic Sports Cars')
    useEffect(()=>{
        fetch('https://project11-eight.vercel.app/addtoys')
        .then(res => res.json())
        .then(data => setCategoryData(data))
    },[])
    
    return (
        <Container>
            <Row>
            <h1 className='mt-5 mb-5 text-center' style={{color:'gray'}}>Categories</h1>
                <Col className='mx-auto text-center mt-5 mb-5'>
                    <button data-aos="fade-up"data-aos-anchor-placement="top-bottom" onClick={()=>setActiveData('Exotic Sports Cars')} className='btn mt-3 mx-2' style={{background:"#54092A",color:'white'}}>Exotic Sports Cars</button>

                    <button data-aos="fade-up"data-aos-anchor-placement="top-bottom" onClick={()=>setActiveData('Supercars')} className='btn mt-3 mx-2' style={{background:"#54092A",color:'white'}}>Supercars</button>

                    <button data-aos="fade-up"data-aos-anchor-placement="top-bottom" onClick={()=>setActiveData('Track-ready Sports Cars')} className='btn mt-3 mx-2' style={{background:"#54092A",color:'white'}}>Sports Cars</button>
                    
                    <button data-aos="fade-up"data-aos-anchor-placement="top-bottom" onClick={()=>setActiveData('Hypercars')} className='btn mt-3 mx-2' style={{background:"#54092A",color:'white'}}>Hypercars</button>
                </Col>
            </Row>
            <Row>

                    {
                        categoryData.map(singleData => singleData.category === activeData && <SingleCategoryData key={singleData._id} singleData={singleData}></SingleCategoryData>)
                    }

            </Row>
        </Container>
    );
};

export default Categories;