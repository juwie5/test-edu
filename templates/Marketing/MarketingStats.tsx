import { Box, Flex, Text, Divider, Center, Container } from '@chakra-ui/react'
import React from 'react'
import GoogleAppleButton from '../layout/GoogleAppleButton'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const MarketingStats = () => {
  return (
    <section className="px-5 pb-16 lg:pb-0 lg:px-[16.7%] pt-96 md:pt-24 2xl:pt-56">
      <div className='mt-36 mb-10 md:my-40'>
        <div className='flex flex-wrap md:flex-nowrap gap-x-16 gap-y-8 md:gap-24 items-center justify-center w-full'>
          <div className='border-r border-[#CFDAEF] pr-4 md:pr-20'>
            <p className='uppercase text-[#6D7D9C] font-medium w-full'>As featured on</p>
          </div>
       
            <img className='w-1/6' src="images/tech-crunch-logo.png" alt="tech-crunch-logo" />
            <img className='w-[7%]' src="images/cnn-logo.png" alt="cnn-logo" />
            <img className='w-1/6' src="images/this-day-logo.png" alt="this-day-logo" />
            <img className='w-1/6' src="images/the-independent-logo.png" alt="the-independent-logo" />
        
        </div>
      </div>

      <div className={inter.className}>
        <div className='flex flex-col justify-evenly md:flex-row gap-16 mb-36 mx-auto'>
          <div className='flex flex-col items-start'>
            <h2 className='text-[40px] leading-[48px] md:text-[68px] font-bold md:leading-[73px] text-[#0D224A]'>Live Interactive <br></br>Classes by Top  <br></br> Tutors</h2>
            <p className='text-xl text-[#6D7D9C] font-medium'>Our tutoring service matches tutors to students' <br></br> unique needs for academic success.</p>
            <div className='hidden md:block mt-9'>
              <GoogleAppleButton size={"md"} />
            </div>
            <div className='block md:hidden mt-9'>
              <GoogleAppleButton size={"sm"} />
            </div>
          </div>
          <div>
            <div className='w-full flex flex-col justify-center items-center md:flex-row gap-7'>
              <div className='w-4/5 md:w-[180px] 2xl:w-[281px] h-[254px] relative bg-[#FDF7E4] rounded-[18px] flex flex-col items-center justify-center'>
                <img src="images/live-classes.svg" alt="" />
                <div className='text-center mt-5 py-7'>
                  <h4 className='text-[#0D224A] text-[20px] md:text-lg font-bold'>Interactive  LIVE Classes</h4>
                  <p className='text-[#6D7D9C] text-[20px] md:text-base font-medium'>Online</p>
                </div>
              </div>
              <div className='w-4/5 md:w-[250px] 2xl:w-[390px] h-[254px] bg-[#DDFFF4] rounded-[18px] flex flex-col items-center justify-center'>
                <img src="images/star-teacher.svg" alt="" />
                <div className='text-center mt-5 py-7'>
                  <h4 className='text-[#0D224A] text-[20px] md:text-lg font-bold'>Rock Star Teachers</h4>
                  <p className='text-[#6D7D9C] text-[20px] md:text-base font-medium'>Only 1% Top Tutors</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center md:flex-row gap-7 mt-6'>
              <div className='w-4/5 md:w-[180px] 2xl:w-[281px] h-[254px] bg-[#D3E5FF] rounded-[18px] flex flex-col items-center justify-center'>
                <img src="images/subject.svg" alt="" />
                <div className='text-center mt-5 py-7'>
                  <h4 className='text-[#0D224A] text-[20px] md:text-lg font-bold'>All Subjects and Ages</h4>
                  <p className='text-[#6D7D9C] text-[20px] md:text-base font-medium'>Focused on your child’s progress</p>
                </div>
              </div>
              <div className='w-4/5 md:w-[250px] 2xl:w-[390px] h-[254px] bg-[#E5D1FF] rounded-[18px] flex  flex-col items-center justify-center'>
                <img src="images/grades.svg" alt="" />
                <div className='text-center mt-5 py-7'>
                  <h4 className='text-[#0D224A] text-[20px] md:text-lg font-bold'>Better Grades</h4>
                  <p className='text-[#6D7D9C] text-[20px] md:text-base font-medium'>Better scores in no time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}
