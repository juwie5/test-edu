import React from "react";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const HeroText = () => {
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
    <Box
      pl={{ base: "3.3rem", lg: "7.7rem" }}
      pr={{ base: "3.7rem", lg: "4.4rem" }}
    >
      <div className="lg:flex justify-between items-center flex-row mt-20 z-0">
        <Box position="relative">
          <Image
            position="absolute"
            left={{ md: "50%", lg: "0%" }}
            top={{ md: "10%", lg: "0%" }}
            display={{ base: "none", md: "block" }}
            transform={{
              md: "translate(-345%, -50%)",
              lg: "translate(-50%, -50%)",
            }}
            src="/icons/banner-title-icon.svg"
            alt="title"
          />
          <Image
            position="absolute"
            display={{ base: "block", md: "none" }}
            left="50%"
            transform="translate(-400%, 0%)"
            src="/icons/banner-title-icon-mobile.svg"
            alt="title"
          />
          <Text
            fontSize={{ base: "2.4rem", md: "5.5rem", lg: "7.5rem" }}
            fontWeight="500"
            lineHeight={{ base: "4.0rem", md: "9.4rem" }}
            textAlign={{ base: "center", md: "center", lg: "left" }}
            color="color.white"
            maxW={{ base: "100%", lg: "75rem" }}
          >
            Learn{""}
            <Text
              px={{ base: "1.0rem", md: "2.0rem" }}
              py="0.5rem"
              as="span"
              mx="1rem"
              display="inline-block"
              bgColor="#ED6F75"
              borderRadius="58px"
            >
              LIVE
            </Text>
            <br /> online with Top Tutors
          </Text>
        </Box>
        <Box>
          <Text
            maxW={{ base: "100%", lg: "53rem" }}
            color="color.white"
            fontWeight="500"
            fontSize={{ base: "1.3rem", md: "2.4rem" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Personal tutoring from top tutors matched to your child&apos;s
            needs. Crack exams, sharpen a new skill and get better grades.
          </Text>
          <div className="flex items-center justify-between space-x-6 md:space-x-16 mt-6 w-11/12">
            <div
              onClick={handleNavigationToAppleStore}
              className="rounded-2xl text-white text-base md:text-2xl cursor-pointer border border-white bg-blue-600 font-semibold flex justify-center space-x-4 py-3 md:py-2.5 items-center w-6/12"
            >
              <div>
                <Image
                  src="/images/apple.png"
                  width={12}
                  height={12}
                  alt="icon"
                />
              </div>
              <div>
                <span className="block">Get in on</span>
                <span className="block"> Apple store</span>
              </div>
            </div>

            <div
              onClick={handleNavigationToAndroidStore}
              className="rounded-2xl text-white text-base md:text-2xl cursor-pointer border border-white bg-blue-600 font-semibold flex justify-center space-x-4 py-3 md:py-2.5 items-center w-6/12"
            >
              <div>
              <Image
                 src="/icons/play-store.svg"
                  width={12}
                  height={12}
                  alt="icon"
                />
              </div>
              <div>
                <span className="block">Get in on</span>
                <span className="block"> Google Play</span>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};
