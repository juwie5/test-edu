import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
// import { Image } from "@chakra-ui/next-js";
import { Flex, Box, Image, Text, HStack, Container } from "@chakra-ui/react";


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

export const SlideShow = () => {
  const sliderRef = useRef<Slider>({} as Slider);
  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();
  return (
    <Box pos="relative" overflow="hidden">
      <Slider ref={sliderRef} {...settings}>
        {data.map((data, index) => {
          return (
            <SlideShowContainer
              bgColor={data.bgColor}
              key={index}
              title={data.title}
              span={data.span}
              description={data.description}
              titleend={data.titleend}
              color={data.color}
            />
          );
        })}
      </Slider>
      <HStack
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="100%"
        display={{ base: "none", lg: "flex" }}
        spacing="2rem"
        justify="space-between"
        mt="2rem"
      >
        <GoLeft onClick={prevSlide} />
        <GoRight onClick={nextSlide} />
      </HStack>
      <Flex
        position="absolute"
        bottom="0"
        left="0"
        // transform="translate(-50%, -50%)"
        width="100%"
        display={{ base: "flex", lg: "none" }}
        justify="center"
        mt="2rem"
      >
        <GoRight onClick={nextSlide} />
      </Flex>
    </Box> 
  );
};

type Props = {
  bgColor: string;
  color: string;
  span: string;
  title: string;
  titleend?: string;
  description: string;
};

const SlideShowContainer = ({
  bgColor,
  color,
  title,
  span,
  description,
  titleend,
}: Props) => {
  return (
    <Box bgColor={bgColor}>
      <Container maxW="120rem">
        <Flex
          gap={{ base: "2rem", lg: "12rem" }}
          py="12rem"
          w={{ base: "90%", lg: "80%" }}
          mx="auto"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            flex="1"
            display="grid"
            placeItems={{ base: "center", lg: "flex-start" }}
          >
            <Image
              src="/images/education.png"
              maxW="33.6rem"
              // h="30rem"
              alt="education"
            />
          </Box>
          <Box flex="2">
            <Text
              fontWeight="500"
              color="color.edukoyablue"
              fontSize={{ base: "2.2rem", md: "3.5rem", lg: "5rem" }}
              lineHeight={{ base: "2.8rem", md: "5rem", lg: "6.8rem" }}
              textAlign={{ base: "center", lg: "left" }}
              maxW={{ base: "40rem", lg: "53rem" }}
              mx={{ base: "auto", lg: "0" }}
              mt={{ base: "3rem", lg: "0" }}
            >
              {title}
              <Text
                px="1rem"
                as="span"
                mx="0.5rem"
                whiteSpace="nowrap"
                color="color.white"
                display="inline-block"
                bgColor="color.edukoyablue"
                borderRadius="58px"
              >
                {span}
              </Text>
              {titleend}
            </Text>

            <Text
              fontWeight="500"
              fontSize="2.0rem"
              textAlign={{ base: "center", lg: "left" }}
              color={color}
              maxW={{ base: "38rem", lg: "53rem" }}
              mx={{ base: "auto", lg: "0" }}
              mt="2rem"
              mb="2rem"
            >
              {description}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
