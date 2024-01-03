import {Link, Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';

const HomeLayout = () => {
    return(
       <>
        <Navbar />
        <section className='page' >
         <Outlet />
        </section>
       </>
    );
};
export default HomeLayout;