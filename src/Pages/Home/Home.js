import React from 'react';
import Challenges from '../Challenges/Challenges';
import Hero from '../Hero/Hero';
import Programs from '../Programs/Programs';
import Testimonials from '../Testimonials/Testimonials';
import Workout1 from '../Workout1/Workout1';
import Workout2 from '../Workout2/Workout2';
import WorkPlan from '../WorkPlan/WorkPlan';
import './Home.css';

const Home = () => {
    return (
        <div className='lg:w-[1440px] w-[333px] mx-auto'>
            <Hero/>
            <div className='grid lg:grid-cols-2 gap-4 mt-6'>
                <div className='lg:w-[558px] lg:h-[146px] font-face-sport lg:text-[46px] text-[28px] text-[#262524]'><h1>Healthy in side <br/>fresh out side</h1></div>
                <div className='description-text lg:mt-4'> <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p></div>
            </div>
            <Challenges/>
            <Workout1/>
            <Workout2/>
            <WorkPlan/>
            <Programs/>
            <Testimonials/>
        </div>
    );
};

export default Home;