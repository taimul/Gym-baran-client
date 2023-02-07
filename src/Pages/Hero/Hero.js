import React from 'react';
import './Hero.css'
import image from '../../Assets/Group 4227.png';
import icon1 from '../../Assets/Group 3888.png'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import navicon from "../../Assets/Vector.png"


const Hero = () => {
    return (
        <div className='text-area'>
            <div className="lg:grid lg:grid-cols-2 gap-4">
                <div className='grid'>
                    <div className='lg:mt-32'>
                        <h1 className="lg:text-5xl text-4xl font-bold hero-font font-face-sport text-[#262524] mb-2">Healthy in side</h1>
                        <h1 className="lg:text-5xl text-4xl font-bold font-face-sport text-[#262524]"><span className='text-[#8382EB]'>fresh</span> out side</h1>
                        <p className="py-6 hero-text mb-3">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                        <div className='flex'>
                        <a className="btn normal-case login-btn text-white get-started-btn flex justify-between"> Get started <img src={navicon} /> </a>
                        {/* <button className='text-white get-started-btn grid grid-cols-2 gap-10 content-center'>Get started <img src={navicon} className="lg:mx-[50px] mx-[20px] w-[16px] h[16px] lg:w-[26px] lg:h-[26px] "/></button> */}
                        <a className="btn normal-case login-btn text-white learn-btn flex justify-center mx-3"><span className='lg:text-2xl text-xl mx-4'><BsFillPlayCircleFill /></span> Learn more </a>
                        </div>
                    </div>
                    <p className="text-black mt-[51px]">Brands:</p>
                    <img className='lg:w-3/5 w-[310px] ' src={icon1} alt="" />
                </div>
                <img src={image} className="w-full lg:h-[584px] rounded-lg image-card" />
            </div>
        </div>
    );
};

export default Hero;