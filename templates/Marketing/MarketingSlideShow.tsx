import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
// import { Image } from "@chakra-ui/next-js";
import { Flex, Box, Image, Text, HStack, Container } from "@chakra-ui/react";
import  GoogleAppleButton  from "../layout/GoogleAppleButton";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export type NavProps = {
  onClick: () => void;
};

const GoLeft = ({ onClick }: NavProps) => {
  return (
    <Image
      cursor="pointer"
      src="/icons/left-arrow.svg"
      onClick={onClick}
      maxW="7.0rem"
      alt="right-arrow"
    />
  );
};

const GoRight = ({ onClick }: NavProps) => {
  return (
    <Image
      cursor="pointer"
      src="/icons/right-arrow.svg"
      onClick={onClick}
      maxW="7.0rem"
      alt="left-arrow"
    />
  );
};

const settings = {
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
};

const data = [
  {
    bgColor: "#F2FBF8",
    color: "#569AFF",
    title: " We provide smart",
    span: "online",
    titleend: "education",
    description:
      " The best LIVE classes with homework, direct interactions with tutors, relevant resources and tools that help you get better grades",
  },
  {
    bgColor: "#FFEFB7",
    color: "#5C5C5C",
    title: "Connect With",
    span: "Expert Educators",
    description:
      "Our team of experienced and passionate educators are dedicated to providing interactive,live sessions that foster collaboration and deep understanding.Benefit from their expertise, ask questions in real-time, and receive personalized guidance tailored to your unique learning style.",
  },
];

export const MarketingSlideShow = () => {
  const sliderRef = useRef<Slider>({} as Slider);
  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();
  return (
    <>
    
        <section className="bg-[#E5F0FF] py-28 px-10 md:px-[16.7%]">
          <div className={inter.className}>
            <div className="flex flex-col items-center">
              <div className="text-center">
                <h2 className="hidden md:block text-[#0D224A] text-[68px] font-bold leading-[82px]">Nigeria’s Top Tutors</h2>
                <h2 className="block md:hidden text-[#0D224A] text-2xl font-bold leading-[28px]">Over 5,000 Experienced <br></br> Teachers</h2>
                <p className="text-[#6D7D9C] text-xl font-mediun py-4">Daily online classes by  the qualified tutors - everything's in one place.</p>
              </div>
              <div className="bg-gradient-to-r from-[#145AF7] to-[#112BF4] rounded-[18px] w-full px-11 py-8 my-14 grid grid-cols-1 md:grid-cols-4 divide-x">
                <div className="text-white flex flex-col gap-4 items-center py-8 md:py-0 px-11">
                  <h3 className="text-[32px] font-bold leading-10 ">7 years+</h3>
                  <div className="text-center">
                    <p className="text-[#FFFFFFB2] text-base font-normal p-0">Average teaching </p>
                    <p className="text-[#FFFFFFB2] text-base font-normal p-0">experience per teacher</p>
                  </div>
                </div>
                <div className="text-white flex flex-col gap-4 items-center  py-8 md:py-0 px-11">
                  <h3 className="text-[32px] font-bold leading-10 ">80%</h3>
                  <div className="text-center">
                    <p className="text-[#FFFFFFB2] text-base font-normal p-0">Masters degree or </p>
                    <p className="text-[#FFFFFFB2] text-base font-normal p-0">above </p>
                  </div>
                </div>
                <div className="text-white flex flex-col gap-4 items-center py-8 md:py-0   px-11">
                  <h3 className="text-[32px] font-bold leading-10 ">100%</h3>
                  <div className="text-center">
                    <p className="text-[#FFFFFFB2] text-base font-normal p-0">Bachelor's degree or </p>
                    <p className="text-[#FFFFFFB2] text-base font-normal p-0">higher</p>
                  </div>
                </div>
                <div className="text-white flex flex-col gap-4 items-center  py-8 md:py-0 px-11">
                  <h3 className="text-[32px] font-bold leading-10 ">80%</h3>
                  <div className="text-center">
                    <p className="text-[#FFFFFFB2] text-base font-normal p-0">Expert vetted and  </p>
                    <p className="text-[#FFFFFFB2] text-base font-normal p-0">identity verified</p>
                  </div>
                </div>

              </div>
              <div className="w-full pl-0 flex flex-col items-center md:items-stretch md:flex-row gap-6 overflow-x-visible">
                <div className="w-4/5 md:w-[458px] p-11 bg-white rounded-[18px]">
                  <div className="flex flex-col md:flex-row  items-start md:items-center gap-6">
                    <img src="images/john-maduka.png" alt="john-maduka-icon" />
                    <div>
                      <h5 className="text-2xl text-[#0D224A] font-semibold">John Maduka</h5>
                      <p className="text-[#6D7D9C] text-base font-medium">Math Subject Matter Expert</p>
                    </div>
                  </div>
                  <div className="pt-11">
                    <p className="text-[#0D224A] font-normal text-lg">I am a Mathematics Subject Matter Expert at Edukoya. I graduated with a first-class honours degree in Mathematics from Kogi State University and hold a certificate in Data Analysis Essentials from Imperial College Business School (ImperialX).</p>
                  </div>
                </div>
                <div className="w-4/5 md:w-[458px] p-11 bg-white rounded-[18px]">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <img src="images/fiyinfoluwa-temi.png" alt="fiyinfoluwa-temi-icon" />
                    <div>
                      <h5 className="text-2xl text-[#0D224A] font-semibold">Fiyinfoluwa Temi</h5>
                      <p className="text-[#6D7D9C] text-base font-medium">Maths tutor</p>
                    </div>
                  </div>
                  <div className="pt-11">
                    <p className="text-[#0D224A] font-normal text-lg">Fiyinfoluwa is a First class graduate of Ladoke Akintola University, department of Electrical Electro Electrical Engineering. He is a talented teacher committed to maintaining high standards of educatio students.</p>
                  </div>
                </div>
                <div className="w-4/5 md:w-[458px] p-11 bg-white rounded-[18px]">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <img src="images/adegoke-mathew.png" alt="john-maduka-icon" />
                    <div>
                      <h5 className="text-2xl text-[#0D224A] font-semibold">Adegoke Mathew</h5>
                      <p className="text-[#6D7D9C] text-base font-medium">Physics Tutor</p>
                    </div>
                  </div>
                  <div className="pt-11">
                    <p className="text-[#0D224A] font-normal text-lg">I am a Mathematics Subject Matter Expert at Edukoya. I graduated with a first-class honours degree in Mathematics from Kogi State University and hold a certificate in Data Analysis Essentials from Imperial College Business School (ImperialX).</p>
                  </div>
                </div>
               
              </div>
              <div className="flex items-center justify-between py-12 w-full">
                <div className="flex items-center gap-8 ">
                  <img src="images/blue-left-arrow.svg" alt="" />
                  <img src="images/blue-right-arrow.svg" alt="" />
                </div>
                <div className="hidden md:block">
                  <GoogleAppleButton size={"sm"}/>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};


