import React from 'react';
import card from '../../Assets/Group 3885.png'
import './WorkPlan.css';

const WorkPlan = () => {
    return (
        <div className='lg:grid lg:grid-cols-2  lg:mt-[140px] mt-[120px] lg:mb-[120px] flex flex-col-reverse'>
            <div><img className=' h-[444px]' src={card} alt="" /></div>
            <div>
                <div><h1 className='lg:text-[46px] text-[28px] font-face-sport text-[#262524] mb-8'>How its works?</h1></div>
                <div className='card'>
                    <a className='carousel'><h1 className='carousel-text'>The body becomes sick because of rarely exercise</h1></a>
                </div>
                <div className='mt-[14px] card'>
                    <div className='carousel'><h1 className='carousel-text'>Don't give up in order to get a healthy and ideal body</h1></div>
                </div>
                <div className='mt-[14px] card'>
                    <div className='carousel'><h1 className='carousel-text'>Become addicted to the exercise that is given</h1></div>
                </div>
            </div>
        </div>
    );
};

export default WorkPlan;