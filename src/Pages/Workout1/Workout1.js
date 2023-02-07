import React from 'react';
import './Workout1.css';
import workout1 from '../../Assets/Group 3892.png'
import { FiArrowRight } from "react-icons/fi";


const Workout1 = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 mt-[120px] flex flex-col-reverse'>
            <div className='m-res'><img src={workout1} alt="" /></div>
            <div className='lg:p-[50px]'>
                <div><h1 className='font-face-sport lg:text-[46px] text-[28px] text-[#262524]'>Best full body workout to lose fat</h1></div>
                <div className='lg:mt-[30px] lg:w-[553px] workout1-description'><p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p></div>
                <div className='mt-[50px]'>
                    <a href='' className="btn normal-case button-link lg:text-[16px] text-[12px] text-[#FFFFFF] flex justify-between"> Get started <FiArrowRight className='w-[50px] text-[22px]' /> </a>
                </div>
            </div>
        </div>
    );
};

export default Workout1;