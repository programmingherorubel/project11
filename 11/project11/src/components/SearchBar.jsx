import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                    <div style={{display:'flex',alignItems:'center'}} className='mt-5 mb-5'>
                    <input type="text"placeholder='Search ...' className='p-3 form-control' />
                    <button className='btn mt-1 py-2 mx-4' style={{background:"#54092A",color:'white',fontWeight:'600'}}>Search </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;