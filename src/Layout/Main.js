import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div className='home-container'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;