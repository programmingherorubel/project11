import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useRouteTitle from '../hooks/useDaynamicTitle';
import { AuthContext } from '../provider/AuthProvider';

const MyToys = () => {
    useRouteTitle(' My Toys')
    const [myData,setMyData] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {user} = useContext(AuthContext)
    const [priceFilter,setPriceFilter] = useState('')

    useEffect(()=>{
        fetch(`https://project11-eight.vercel.app/mytoys/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyData(data))
    },[user?.email,myData])

    const deleteData = (id)=>{
        const confirmDelete = confirm ('are you sure you want to delete')

        if(confirmDelete){
            fetch(`https://project11-eight.vercel.app/mytoys/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => console.log(result))
        }
       
    }
    const handleClick = (tabName) => {
        setFilterPrice(tabName);
        console.log(tabName);
      };

    return (
        <Container fluid>
            <Row>
                <Col>
                {/* <button onClick={()=>handleClick('')}>Des</button><button onClick={()=>handleClick('')}>Aes</button> */}
                    <Table responsive striped bordered hover data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                        <thead>
                            <tr>
                                <th className='text-center'>Toy Name</th>
                                <th className='text-center'>Sub-category</th>
                                <th className='text-center'>Seller Name</th>
                                <th className='text-center'>Available Quantity</th>
                                <th className='text-center'>Price</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        {
                            myData.map(data => <tbody>
                                <tr data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                                    <td className='text-center'>{data.name}</td>
                                    <td className='text-center'>{data.category}</td>
                                    <td className='text-center'>{data.sallerName}</td>
                                    <td className='text-center'>{data.quantity}</td>
                                    <td className='text-center'>{data.price}</td>
                                    <td className='text-center'>
                                        <FontAwesomeIcon onClick={()=>deleteData(data._id)} className='mx-3' icon={faTrash}/>
                                        <Link to={`/edit/${data._id}`}><FontAwesomeIcon className='mx-3'onClick={handleShow} icon={faPen}/></Link>
                                    </td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default MyToys;