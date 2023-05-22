import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useRouteTitle from '../hooks/useDaynamicTitle';
import { AuthContext } from '../provider/AuthProvider';

const AddAToys = () => {
    useRouteTitle(' Add A Toys')
    const { register, handleSubmit ,reset} = useForm();
    const {user} = useContext(AuthContext)
    console.log(user)
  const onSubmit = data => {
    fetch(`https://project11-eight.vercel.app/addtoys/`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        if(result.acknowledged){
            toast.success('new Toy Inserted Successfull', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    })
    reset()
  };
    return (
        <Container>
            <Row>
                <Col className='mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5' data-aos="fade-up"data-aos-anchor-placement="top-bottom">

                    <div style={{display:'flex',gap:'10px',margin:'0 auto',flexWrap:'warp'}}>
                        <input placeholder='Product Name' className=' mt-3 p-3  form-control' {...register("name", { required: true})} />
                        <input placeholder='Saller Name' className=' mt-3 p-3  form-control' {...register("sallerName", { required: true})} />
                    </div>
                    <div style={{display:'flex',gap:'10px',margin:'0 auto',flexWrap:'warp'}}>
                        <input value={user?.email} className=' mt-3 p-3 form-control' {...register("email", { required: true})} />
                        <select placeholder='na' {...register("category", { required: true})}  className='mt-3 p-2  form-control'>
                            <option defaultValue="">Select Your Product Category</option>
                            <option defaultValue="Exotic Sports Cars">Exotic Sports Cars</option>
                            <option defaultValue="Supercars">Supercars</option>
                            <option defaultValue="Track-ready Sports Cars">Track-ready Sports Cars</option>
                            <option defaultValue="Hypercars">Hypercars</option>
                        </select>
                    </div>
                    <div style={{display:'flex',gap:'10px',margin:'0 auto',flexWrap:'warp'}}>
                        <input placeholder='Price' type="number" className=' mt-3 form-control' {...register("price", { required: true})} />
                        <input placeholder='Ratings minimum 0 - max value 5' type='number' className=' mt-3 p-3 form-control' {...register("ratings", { required: true,  min: 0, max: 5 })} />
                    </div>
                    
                    <div style={{display:'flex',gap:'10px',margin:'0 auto',flexWrap:'warp'}}>
                        <input placeholder='Quantity' className=' mt-3 p-3 form-control' type="number" {...register("quantity", { required: true, })} />
                        <input placeholder='imgUrl' className=' mt-3 p-3 form-control' {...register("imgUrl", { required: true})} />
                    </div>
                    <textarea rows={4} placeholder='Description' className=' mt-2 p-3  form-control' {...register("description", { required: true})} />

                    <div className='text-center'><button style={{background:'#54092A',color:'white',fontWeight:'700'}} className='btn mt-3 w-50'type='submit'>Add New Product</button></div>
                    
                </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddAToys;