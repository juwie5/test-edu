import React from "react";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Inter, Poppins } from "next/font/google";
import GoogleAppleButton from "../layout/GoogleAppleButton";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const MarketingHeroText = () => {
  const redirectToFreeTrialBookingForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSe1xFCwF0mWys2vRtT443x4sq14R72a3IMTSk9Lrtbpi9DoKw/viewform",
      "_self"
    );
  };

  const handleNavigationToAndroidStore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.edukoya.app&pli=1",
      "_self"
    );
  };

  const handleNavigationToAppleStore = () => {
    window.open("https://apps.apple.com/ng/app/edukoya/id6450018847", "_self");
  };
  return (
    <section>
      <div className="lg:flex justify-between items-center flex-row mt-20 z-0 mx-auto">
        <div className={inter.className} >
          <div className="text-white">
            <div className="absolute top-32 left-[43rem] hidden md:block">
              <img src="images/star.svg" alt="" />
            </div>
            <div>
              <h1 className="hidden md:block text-[88px] 2xl:text-[120px] font-extrabold leading-[106px] 2xl:leading-[136px]">Unlock your child’s <br></br>genius with <span className="bg-gradient-to-r from-[#40CE9E] to-[#99FFDD] inline-block text-transparent bg-clip-text">edukoya</span></h1>
              <h1 className="block md:hidden text-[40px] font-extrabold leading-none text-center">Unlock your <br></br> child’s genius <br></br> with <span className="bg-gradient-to-r from-[#40CE9E] to-[#99FFDD] inline-block text-transparent bg-clip-text">edukoya</span></h1>
              <p className="hidden md:block mt-7 mb-14 text-[15px] 2xl:text-[30px] md:text-[22px] text-[#FFFFFFB2] text-center md:text-left">Give your child a head start by giving them the Edukoya LIVE Learning App. <br></br> We cover every topic and every class.</p>
              <p className="block md:hidden mt-7 mb-4 text-[15px] md:text-[22px] text-[#FFFFFFB2] text-center md:text-left">Give your child a head start by giving them  <br></br> the Edukoya LIVE Learning App. We cover <br></br>  every topic and every class.</p>
            </div>
            <div className="absolute top-[25rem] left-24 hidden md:block">
              <img src="images/yello-circle.svg" alt="" />
            </div>
            <div className="absolute top-[42rem] left-[75rem] hidden md:block">
              <img src="images/purple-circle.svg" alt="" />
            </div>
            <div className="absolute top-[48rem] 2xl:top-[56rem] left-28  2xl:left-52  hidden md:block">
              <img src="images/green-arrow.svg" alt="" />
            </div>
            <div className="hidden md:block">
              <h4 className="text-[28px] font-semibold mb-40 ">Ready to start learning? Download the App Now</h4>
            </div>
          </div>
          <div className="shadow bg-white w-[180px] mx-auto rounded-lg p-4 block md:hidden mb-20">
            <GoogleAppleButton size={"mob"} />
          </div> 
          <div className="hidden shadow bg-white rounded-2xl w-[623px] p-8 md:block absolute top-[525px] 2xl:top-[615px] z-20">
            <GoogleAppleButton size={"lg"} />
          </div> 
         

        </div>
      </div>
    </section>

  );
};
