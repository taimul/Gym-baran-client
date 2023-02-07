import React from 'react';
import './Challenges.css';
import icon0 from '../../Assets/icon0.png'
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import { AiOutlineArrowRight } from "react-icons/ai";


const Challenges = () => {
    return (
        <div className='background-color lg:h-[274px] h-[390px] lg:mt-[120px] mt-[60px] '>
            <div className='lg:flex lg:justify-between lg:p-24 p-5'>
                <div className='flex gap-[30px] mb-[40px]'>
                    <div><img className='w-[100px] h-[]100px] rounded-[20px]' src={icon0} alt="" /></div>
                    <div className=''>
                        <h1 className='w-[170px] h-[56px] text-[20px] text-[#FFFFFF]'>Get thst 11 line in 30 days</h1>
                        <a href='' className='mt-2 w-[120px] flex justify-between'> Learn more <AiOutlineArrowRight className='mt-1' /></a>
                    </div>
                </div>
                <div className='flex gap-[30px] mb-[40px]'>
                    <div><img className='w-[100px] h-[]100px] rounded-[20px]' src={icon1} alt="" /></div>
                    <div className=''>
                        <h1 className='w-[170px] h-[56px] text-[20px] text-[#FFFFFF]'>14 days shed challenge</h1>
                        <a href='' className='mt-2 w-[120px] flex justify-between'> Learn more <AiOutlineArrowRight className='mt-1' /></a>

                    </div>
                </div>
                <div className='flex gap-[30px] mb-[40px]'>
                    <div><img className='w-[100px] h-[]100px] rounded-[20px]' src={icon2} alt="" /></div>
                    <div className=''>
                        <h1 className='w-[170px] h-[56px] text-[20px] text-[#FFFFFF]'>Get fiat belly in 30 days</h1>
                        <a href='' className='mt-2 w-[120px] flex justify-between'> Learn more <AiOutlineArrowRight className='mt-1' /></a>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Challenges;