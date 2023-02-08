import React from 'react';
import './Footer.css';
import icon from '../../Assets/Group 4265.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#1C3764] text-base-content lg:p-32 p-7">
                <div>
                    <div className='flex mb-[30px]'>
                        <a className="normal-case text-xl footer-logo"><span className='logo-text'>Gym</span></a>
                        <h1 className='footer-logo-text mx-1'>baran</h1>
                    </div>
                    <p className='footer-text w-[315px] text-[18px]'>We take care of your health with regular and fun exercise</p>
                    <div className='flex justify-between w-[200px] mt-[36px]'>
                        <img src={icon} alt="" />
                        <img src={icon} alt="" />
                        <img src={icon} alt="" />
                        <img src={icon} alt="" />
                        <img src={icon} alt="" />
                    </div>
                </div>
                <div className='font-face-sport footer-gap' >
                    <h1 className="normal-case  text-white text-[18px] ">Program</h1>
                    <a className="link link-hover ">Workout</a>
                    <a className="link link-hover">Gym</a>
                    <a className="link link-hover">Cardio</a>
                    <a className="link link-hover">Zumba</a>
                </div>
                <div className='font-face-sport footer-gap'>
                    <span className=" normal-case  text-white text-[18px]">Blog</span>
                    <a className="link link-hover">Daily stretch</a>
                    <a className="link link-hover">Daily workout</a>
                </div>
                <div className='font-face-sport footer-gap'>
                    <span className="normal-case text-white text-[18px]">About Us</span>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Address</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;