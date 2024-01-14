import React from 'react'
import GoogleAppleButton  from '../layout/GoogleAppleButton'

export const MarketingParents = () => {
    return (
        <section className=''>
            <div className="w-full parents-background px-5 md:px-80 py-8 md:py-56">
                <div className='flex flex-col md:flex-row items-center justify-between 2xl:justify-evenly'>
                    <div className='text-white'>
                        <div>
                            <h3 className='text-[40px] md:text-[68px] font-bold leading-[50px] md:leading-[73.44px]'>Parents love <br></br> Edukoya.</h3>
                            <div className='pt-11 pb-8 text-[#B8C9FD] text-xl font-medium leading-7'>
                                <p className='pb-6'>Edukoya has earned a reputable international rating and <br></br>has gained the trust of numerous parents and students.</p>
                                <p>
                                    With their dedication to providing high-quality education<br></br>
                                    and exceptional service, Edukoya has become a reliable
                                    <br></br>
                                    choice for families seeking a trustworthy institution.
                                </p>
                            </div>
                            <div className="shadow bg-white rounded-2xl w-[410px] p-6">
                                <GoogleAppleButton  size={"md"}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative my-10'>
                            <div className='w-[365px] h-[330px] p-11 bg-[#FFF] parent-card z-30 md:absolute -top-80 bottom-2 right-16'>
                                <div className=''>
                                    <div className='mb-40'>
                                        <p className='text-[#0D224A] text-2xl font-normal'>My sons maths teacher Sarah is amazing <br></br>she creates a class environment that <br></br> allows me to be both relaxed and <br></br> interested. My son got an A after learning <br></br> with them Incredible</p>
                                    </div>
                                    <div>
                                        <h3 className='text-[#0D224A] text-2xl font-bold'>Mrs Doreen Coker</h3>
                                        <p className='text-base text-[#6D7D9C] font-normal leading-7 my-3'>Parent of Michael Coker</p>
                                        <img src="images/4-and-half-star.svg" alt="ratings" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[314px] h-[284px] p-11 bg-[#CFDAEF] parent-card z-20 md:absolute -top-72 bottom-2 -right-2'>
                                <div className=''>
                                    <div className=''>
                                        <p className='text-[#0D224A] text-2xl font-normal'>My sons maths teacher Sarah is amazing <br></br>she creates a class environment that <br></br> allows me to be both relaxed and <br></br> interested. My son got an A after learning <br></br> with them Incredible</p>
                                    </div>
                                    <div>
                                        <h3 className='text-[#0D224A] text-2xl font-bold'>Mrs Doreen Coker</h3>
                                        <p className='text-base text-[#6D7D9C] font-normal leading-7 my-3'>Parent of Michael Coker</p>
                                        <img src="images/4-and-half-star.svg" alt="ratings" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[262px] h-[236px] p-11 bg-[#0D224A] parent-card z-10 md:absolute -top-64 bottom-2 -right-16'>
                                <div className='text-white'>
                                    <div className='mb-12'>
                                        <p className='text-base font-normal'>My sons maths teacher Sarah is amazing <br></br>she creates a class environment that <br></br> allows me to be both relaxed and <br></br> interested. My son got an A after learning <br></br> with them Incredible</p>
                                    </div>
                                    <div>
                                        <h3 className=' text-lg font-bold'>Mrs Doreen Coker</h3>
                                        <p className='text-base  font-normal leading-7 my-3'>Parent of Michael Coker</p>
                                        <img src="images/4-and-half-star.svg" alt="ratings" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative mt-4'>
                    <div className='z-30 absolute -top-24 bottom-0 right-[29.5rem]'>
                        <div className='flex gap-4'>
                            <button>
                                <img src="images/green-left.svg" alt="" />
                            </button>
                            <button>
                                <img src="images/green-right.svg" alt="" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}