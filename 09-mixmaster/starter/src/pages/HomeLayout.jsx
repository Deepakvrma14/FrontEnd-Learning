import {Link, Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const HomeLayout = () => {
    const navigate = useNavigate();
    const isPageLoading = navigate.state === 'loading';
    const value = 'some value'
    return(


       <>
        <Navbar />
        <section className='page'>
            {isPageLoading? (
                <h2>Loading...</h2>
            ) : (
                <Outlet context={{value}} />
            )}
        </section>
       </>
    );
};
export default HomeLayout;