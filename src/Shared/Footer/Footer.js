import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#1C3764] text-base-content">
                <div>
                    <div className='flex'>
                        <a className="normal-case text-xl footer-logo"><span className='logo-text'>Gym</span></a>
                        <h1 className='text mx-1'>baran</h1>
                    </div>
                    <p className='footer-text'>We take care of your health with <br /> regular and fun exercise</p>
                </div>
                <div>
                    <span className="footer-title">Program</span>
                    <a className="link link-hover">Workout</a>
                    <a className="link link-hover">Gym</a>
                    <a className="link link-hover">Cardio</a>
                    <a className="link link-hover">Zumba</a>
                </div>
                <div>
                    <span className="text-white footer-title">Blog</span>
                    <a className="link link-hover">Daily stretch</a>
                    <a className="link link-hover">Daily workout</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="text-white footer-title">About Us</span>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Address</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;