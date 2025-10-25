import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <>
        <div>
            <Navbar></Navbar>
            <div className='max-h-fit'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
        <Toaster></Toaster>
        </>
    );
};

export default Root;
