import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import useRouteTitle from '../hooks/useDaynamicTitle';

const Reg = () => {
    useRouteTitle(' Registration')
    const {newWebUser,error,googleSingin} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if(data.password !== data.confirmPassword){
            return toast.warning('Password did not matched try again!', {
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
        newWebUser(data.email,data.password,data.name,data.photoUrl)
    };
   
    return (
        <Container>
            <Row>
                <Col md={5} className='mx-auto' data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                        <h1>Sp<span style={{color:'tomato'}}>o</span>rts <span style={{color:'tomato'}}>M</span>arket</h1>
                        <input placeholder='inter your Name' className='form-control mt-4 p-2' {...register("name", { required: true})} />

                        <input placeholder='inter your Photo Url' className='form-control mt-4 p-2' {...register("photoUrl", { required: true})} />

                        <input placeholder='inter your Email' className='form-control mt-4 p-2' {...register("email", { required: true})} />

                        <input placeholder='inter your Password' className='form-control mt-4 p-2' {...register("password", { required: true})} />

                        <input placeholder='inter your Re-password' className='form-control mt-4 p-2' {...register("confirmPassword", { required: true})} />
                        {error && <h6>{error}</h6>}
                        <div className='mx-auto text-center mt-4'>
                            <button className='btn w-50'style={{background:'#54092A',color:'white'}} type='submit'>Submit</button>
                        </div>
                    </form>
                    <div className='mx-auto text-center mt-4'>
                        <button onClick={()=>googleSingin()} className='btn w-50'style={{background:'#54092A',color:'white'}} ><i class="fa-brands fa-google-plus-g"></i> Sing In With Google</button>
                    </div>
                    <div className='text-center'>
                        <b>if you have no already account pleace <Link to='/login'>Login</Link></b>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Reg;