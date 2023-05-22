import React from 'react';
import Layout from '../components/Layout';
import CustomNavbar from '../Share/CustomNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer';
import useRouteTitle from '../hooks/useDaynamicTitle';

const Home = () => {
    useRouteTitle(' Home')
    return (
        <>
             <CustomNavbar/>  
                <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Home;