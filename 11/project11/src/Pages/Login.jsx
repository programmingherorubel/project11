import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useRouteTitle from '../hooks/useDaynamicTitle';


const Login = () => {
    useRouteTitle(' Login')
    const {loginUser,error,googleSingin} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'
    const onSubmit = data => {
        loginUser(data.email,data.password)
        navigate(from)
    };
    return (
        <Container>
        <Row>
            <Col md={5} className='mx-auto' data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    <h1>Sp<span style={{color:'tomato'}}>o</span>rts <span style={{color:'tomato'}}>M</span>arket</h1>
                  
                    <input placeholder='inter your Email' className='form-control mt-4 p-2' {...register("email", { required: true})} />

                    <input placeholder='inter your Password' className='form-control mt-4 p-2' {...register("password", { required: true})} />

                    {error && <h6>{error}</h6>}
                    <div className='mx-auto text-center mt-4'>
                        <button className='btn w-50'style={{background:'#54092A',color:'white'}} type='submit'>Submit</button> <br />
                    </div>

                </form>
                <div className='mx-auto text-center mt-4'>
                        <button onClick={()=>googleSingin()} className='btn w-50'style={{background:'#54092A',color:'white'}} ><i class="fa-brands fa-google-plus-g"></i> Sing In With Google</button>
                    </div>
                <div className='text-center'>
                    <b>if you have no account pleace <Link to='/reg'>Registration</Link></b>
                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default Login;