import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <>
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
        <Toaster></Toaster>
        </>
    );
};

export default Root;
