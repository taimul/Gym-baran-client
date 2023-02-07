import React from 'react';
import './Programs.css';
import icon1 from '../../Assets/Icons/Group 4261.png';
import icon2 from '../../Assets/Icons/Group 4259.png';
import icon3 from '../../Assets/Icons/Group 4260.png';
import icon4 from '../../Assets/Icons/Group 4262.png';
import icon5 from '../../Assets/Icons/Group 4263.png';
import icon6 from '../../Assets/Icons/Group 4264.png';

const Programs = () => {
    return (
        <div className='mb-[120px]'>
            <div className='w-[558px] progress-header  text-center lg:text-[46px] text-[#262524] mx-auto mb-[60px]'><h1 className='font-face-sport '>Programs that can be taken</h1></div>            
            <div className='grid lg:grid-cols-3'>
                <div className='flex justify-items-center lg:mb-[78px]'>
                    <div><img src={icon6} alt="" className='lg:w-[108px] lg:h-[108px] w-[80px] h-[80px]'/></div>
                    <div className='w-[261px] h-[94px]'>
                        <h1 className='task-title'>Gets ABS in 2 weeks</h1>
                        <p className='task-description'>Exercise is a very important need for our body. </p>
                    </div>
                </div>
                <div className='flex justify-items-center'>
                    <div><img src={icon6} alt="" className='lg:w-[108px] lg:h-[108px] w-[80px] h-[80px] '/></div>
                    <div className='w-[261px] h-[94px]'>
                        <h1 className='task-title'>25 Mins full body workout</h1>
                        <p className='task-description'>Exercise is a very important need for our body.  </p>
                    </div>
                </div>
                <div className='flex justify-items-center'>
                    <div><img src={icon6} alt="" className='lg:w-[108px] lg:h-[108px] w-[80px] h-[80px]'/></div>
                    <div className='w-[261px] h-[94px]'>
                        <h1 className='task-title'>10 Mins toned arms workout</h1>
                        <p className='task-description'>Exercise is a very important need for our body.  </p>
                    </div>
                </div>
                <div className='flex justify-items-center'>
                    <div><img src={icon3} alt="" className='lg:w-[108px] lg:h-[108px] w-[80px] h-[80px]'/></div>
                    <div className='w-[261px] h-[94px]'>
                        <h1 className='task-title'>15 Mins full body fat burn</h1>
                        <p className='task-description'>Exercise is a very important need for our body. </p>
                    </div>
                </div>
                <div className='flex justify-items-center'>
                    <div><img src={icon3} alt="" className='lg:w-[108px] lg:h-[108px] w-[80px] h-[80px]'/></div>
                    <div className='w-[261px] h-[94px]'>
                        <h1 className='task-title'>25 Mins HIIT workout</h1>
                        <p className='task-description'>Exercise is a very important need for our body. </p>
                    </div>
                </div>
                <div className='flex justify-items-center'>
                    <div><img src={icon3} alt="" className='lg:w-[108px] lg:h-[108px] w-[80px] h-[80px]'/></div>
                    <div className='w-[261px] h-[94px]'>
                        <h1 className='task-title'>Intense lower Abs workout</h1>
                        <p className='task-description'>Exercise is a very important need for our body. </p>
                    </div>
                </div>
                
            </div>            

        </div>
    );
};

export default Programs;