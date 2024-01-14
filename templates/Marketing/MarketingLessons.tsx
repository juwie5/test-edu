import React from "react";
import GoogleAppleButton from "../layout/GoogleAppleButton";

export const MarketingLessons = () => {
    return (
        <section className="px-5 md:px-80 py-20 md:py-56">
            <div className="flex flex-col md:flex-row items-start md:items-center 2xl:justify-center gap-4">
                <h2 className='hidden md:block text-[#0D224A] text-[68px] font-bold leading-[82px] w-[692px]'>Stress-free Lessons</h2>
                <h2 className='block md:hidden text-[#0D224A] text-[40px] font-bold leading-[43px]'>Stress-free <br></br> Lessons</h2>
                <p className="text-xl text-[#6D7D9C] leading-6 font-medium p-0">From matching your child to the best tutor to organizing <br></br> payment - everything's in one place</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-x-6 gap-y-6 mt-24 mb-32 w-full">
                <div className="w-[297px] h-[233px] py-8 px-14 lessons-gradient flex  flex-col gap-4 items-center justify-between">
                        <div>
                            <img src="images/daily.svg" alt="" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl text-[#0D224A] font-bold">Daily Lessons</h4>
                            <p className="text-base text-[#6D7D9C] font-medium">Your child can join tutoring at a time that suits you and your child best.</p>
                        </div>
                </div>
                <div className="w-[297px] h-[233px] py-8 px-14 lessons-gradient flex  flex-col gap-4 items-center justify-center">
                        <div>
                            <img src="images/calendar.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl text-[#0D224A] font-bold">LIVE & Interactive</h4>
                            <p className="text-base text-[#6D7D9C] font-medium">We provide a real online classroom. Your child can ask questions in class  </p>
                        </div>
                </div>
                <div className="w-[297px] h-[233px] py-8 px-14 lessons-gradient flex  flex-col gap-4 items-center justify-center">
                        <div>
                            <img src="images/better-grades.svg" alt="" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl text-[#0D224A] font-bold">Better Grades </h4>
                            <p className="text-base text-[#6D7D9C] font-medium">92% of our students see an improvement in one term or less</p>
                        </div>
                </div>
                <div className="w-[297px] h-[233px] py-8 px-14 lessons-gradient flex  flex-col gap-4 items-center justify-center">
                        <div>
                            <img src="images/learn.svg" alt="" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl text-[#0D224A] font-bold">Learn from Home</h4>
                            <p className="text-base text-[#6D7D9C] font-medium">Tutors must undergo our strict hiring processes, which includes verification.</p>
                        </div>
                </div>
                <div className="w-[297px] h-[233px] py-8 px-14 lessons-gradient flex  flex-col gap-4 items-center justify-center">
                        <div>
                            <img src="images/affordable-card.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl text-[#0D224A] font-bold">Affordable</h4>
                            <p className="text-base text-[#6D7D9C] font-medium">Pay as little as N3750 when you pay annually. All major payment methods are accepted.</p>
                        </div>
                </div>
                <div className="w-[297px] h-[233px] py-8 px-14 lessons-gradient flex  flex-col gap-4 items-center justify-center">
                        <div>
                            <img src="images/security.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl text-[#0D224A] font-bold">Security</h4>
                            <p className="text-base text-[#6D7D9C] font-medium">We guarantee complete security for your data while it's in our possession.</p>
                        </div>
                </div>
            </div>
          
            <div className="lessons-background rounded-[18px] px-28 py-16">
                <div className="flex flex-col md:flex-row items-center justify-cewnter justify-around">
                    <div>
                        <h2 className="text-white  text-[24px] md:text-[68px] font-bold leading-20 md:leading-[73px]">Download and <br></br> learn LIVE on <br></br> the go.</h2>
                        <div className="text-white py-9">
                            <p className="text-[18px] font-semibold leading-[30px]">Connect to a tutor instantly</p>
                            <p className="text-[18px] font-semibold leading-[30px]">Live Interactive Classes</p>
                            <p className="text-[18px] font-semibold leading-[30px]">Learn from the Comfort of your home</p>
                        </div>
                        <div className="hidden  md:block bg-white w-[410px] rounded-[13px] p-5">
                            <GoogleAppleButton size={"md"}/>
                        </div>
                        <div className="block md:hidden bg-white w-[262px] rounded-[13px] p-5 my-4 md:my-0">
                            <GoogleAppleButton size={"mob"}/>
                        </div>
                    </div>
                    <div>
                        <img src="images/lesson-iPhone14.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}