import React from 'react';
import './Hero.css'
import image from '../../Assets/Group 4227.png';
import icon1 from '../../Assets/Group 3888.png'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import navicon from "../../Assets/Vector.png"


const Hero = () => {
    return (
        <div className='text-area'>
            <div className="grid lg:grid-cols-2 gap-4">
                <div>
                    <div className='lg:mt-32'>
                        <h1 className="lg:text-5xl text-4xl font-bold hero-font font-face-sport text-[#262524] mb-2">Healthy in side</h1>
                        <h1 className="lg:text-5xl text-4xl font-bold font-face-sport text-[#262524]"><span className='text-[#8382EB]'>fresh</span> out side</h1>
                        <p className="py-6">Exercise is a very important need for our body. Health and <br />fitness will be obtained if you can do regular exercise and <br />run a healthy routine.</p>
                        <div className='flex'>
                        <a className="btn normal-case login-btn text-white get-started-btn flex justify-between"> Get started <img src={navicon} /> </a>
                        {/* <button className='text-white get-started-btn grid grid-cols-2 gap-10 content-center'>Get started <img src={navicon} className="lg:mx-[50px] mx-[20px] w-[16px] h[16px] lg:w-[26px] lg:h-[26px] "/></button> */}
                        <a className="btn normal-case login-btn text-white learn-btn flex justify-center mx-3"><span className='text-2xl mx-4'><BsFillPlayCircleFill /></span> Learn more </a>
                        </div>
                    </div>
                    <p className="text-black mt-[51px]">Brands:</p>
                    <img src={icon1} alt="" />
                </div>
                <div><img src={image} className="w-full h-[584px] rounded-lg" /></div>
            </div>
        </div>
    );
};

export default Hero;