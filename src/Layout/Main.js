import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div className='lg:w-[1440px] m-auto'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;