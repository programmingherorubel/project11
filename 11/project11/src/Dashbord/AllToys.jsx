import { faArrowRight, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useRouteTitle from '../hooks/useDaynamicTitle';


const AllToys = () => {
    useRouteTitle(' All Toys')
    const [alldata,setAllData] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const location = useLocation()
    console.log(location)

    useEffect(()=>{
        fetch(`https://project11-eight.vercel.app/alltoys`)
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])

    const onclickFunction = e =>{
        fetch(`https://project11-eight.vercel.app/searchvalue/${searchValue}`)
        .then(res => res.json())
        .then(data => setAllData(data))
    }

  

    return (
        <Container fluid>
             <Row>
                <Col md={6} className='mx-auto' data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                    <div style={{display:'flex',alignItems:'center'}} className='mt-5 mb-5'>
                    <input onChange={(e)=>setSearchValue(e.target.value)} type="text"placeholder='Search ...' className='p-3 form-control' />
                    <button onClick={onclickFunction} className='btn mt-1 py-2 mx-4' style={{background:"#54092A",color:'white',fontWeight:'600'}}>Search </button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table responsive striped bordered hover data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                            <thead>
                                <tr>
                                    <th className='text-center'>Toy Name</th>
                                    <th className='text-center'>Seller</th>
                                    <th className='text-center'>Category</th>
                                    <th className='text-center'>Price</th>
                                    <th className='text-center'>Available Quantity</th>
                                    <th className='text-center'>View</th>
                                </tr>
                                </thead>
                                {
                                    alldata.map(item => <tbody key={item._id}>
                                        <tr>
                                            <td className='text-center'>{item.name}</td>
                                            <td className='text-center'>{item.sallerName}</td>
                                            <td className='text-center'>{item.category}</td>
                                            <td className='text-center'> <FontAwesomeIcon icon={faDollar}/> {item.price}</td>
                                            <td className='text-center'>{item.quantity}</td>
                                            <td className='text-center'><Link style={{textDecoration:'none',color:'black'}} to={`/addtoys/${item._id}`}> <FontAwesomeIcon icon={faArrowRight}/> Details</Link></td>
                                        </tr>
                                    </tbody>)
                                }
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AllToys;

