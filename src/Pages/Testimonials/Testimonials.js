import React from "react";
import "./Testimonials.css";
import icon from "../../Assets/Group 3799.png";

const Testimonials = () => {
    return (
        <div className="mb-[120px]">
            <div className="w-[558px] lg:text-center lg:text-[46px] text-[28px]  text-[#262524] mx-auto mb-[40px] lg:mb-[50px]">
                <h1 className="font-face-sport ">Testimonials</h1>
            </div>
            <div className="lg:flex lg:justify-between">
                <div className="user-card lg:p-10 p-7 mb-[24px]">
                    <p className="t-text mb-[24px]">
                    It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.
                    </p>
                    <div className="flex justify-items-center lg:mb-[78px] user-details">
                        <div>
                            <img src={icon} alt="" className="" />
                        </div>
                        <div className="lg:w-[260px] w-[164px]  mx-[30px]">
                            <h1 className="task-title lg:mb-[10px] text-[14px] lg:text-[16px]">Suketi Mantapo</h1>
                            <p className="text-[12px] lg:text-[16px]">Designer Graphic </p>
                        </div>
                    </div>
                </div>
                <div className="user-card lg:p-10 p-7">
                    <p className="t-text mb-[24px]">
                        exercise used to be a boring thing for me, but after following the
                        gymbaran I became fond of sports and sports became my new hobby. I
                        participate in sports 5 times a week.
                    </p>
                    <div className="flex justify-items-center lg:mb-[78px] user-details">
                        <div>
                            <img src={icon} alt="" className="" />
                        </div>
                        <div className="lg:w-[260px] w-[164px]  mx-[30px]">
                            <h1 className="task-title lg:mb-[10px] text-[14px] lg:text-[16px]">Ada Apose</h1>
                            <p className="text-[12px] lg:text-[16px]">Designer Graphic </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
