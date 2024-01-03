import {Link, Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';

const HomeLayout = () => {
    return(
       <div>
         <Navbar />
         <Outlet />
       </div>
    );
};
export default HomeLayout;