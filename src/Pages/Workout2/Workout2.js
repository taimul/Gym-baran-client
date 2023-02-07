import React from 'react';
import workout2 from '../../Assets/Group 3883.png'
import { FiArrowRight } from "react-icons/fi";
import './Workout2.css';

const Workout2 = () => {
    return (
        <div className='lg:grid lg:grid-cols-2  mt-[120px]'>
            <div className='lg:p-[50px]'>
                <div><h1 className='font-face-sport lg:text-[46px] text-[28px] text-[#262524]'>Daily morning workout in home</h1></div>
                <div className='lg:mt-[30px] mt-[16px] lg:text-[16px] text-[12px] lg:w-[553px]'><p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p></div>
                <div className='lg:mt-[50px] mt-[40px]'>
                    <a href='' className="btn normal-case butn-link lg:text-[16px] text-[12px] text-[#FFFFFF] flex justify-between"> Get started <FiArrowRight className='w-[50px] text-[22px]' /> </a>
                </div>
            </div>
            <div className='card-image'><img src={workout2} alt="" /></div>
        </div>
    );
};

export default Workout2;