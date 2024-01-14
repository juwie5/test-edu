import {
  Box,
  Image,
  Text,
  Flex,
  Grid,
  HStack,
  Center,
  Button,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

const data = [
  {
    title: "Primary school",
    description: "Grades 1-6 • Common entrance/ 11 Plus",
    color: "#5186ED",
    bgColor: "#ECF4FB",
    src: "/images/courses-dots.png",
    src1: "/images/primary-bottom-right-icon.png",
  },
  {
    title: "Secondary school",
    description: "Grades 6-12 • IGSCE, WAEC, JAMB",
    color: "#54BA83",
    bgColor: "#E6F4F0",
    src: "/images/secondary-left.png",
    src1: "/images/secondary-bottom-right.png",
  },
  {
    title: "Language Courses",
    description: "French • Yoruba • Igbo. English",
    color: "#6D5AE6",
    bgColor: "#F2F0FB",
    src: "/images/language-left.png",
    src1: "/images/language-bottom-right.png",
  },
  {
    title: "Exam preparation",
    description: "IELTS • SATS• GMAT • Post UTME",
    color: "#EC5A5A",
    bgColor: "#FAEEED",
    src: "/images/exam-left.png",
    src1: "/images/exam-bottom-right.png",
  },
];

const slideshowData = [
  {
    title: "Primary School",
    grades1: "Grades 1-6",
    grades2: "Common entrance/ 11+",
    description:
      "Personalised live classes for grade 1-6 to learn anytime, anywhere",
    bgColor: "#FFFFFF",
    src: "/images/primary-school.png",
  },
  {
    title: "Secondary School",
    grades1: "Grades 1-6",
    grades2: "Common entrance/ 11+",
    description:
      "Personalised live classes for grade 1-6 to learn anytime, anywhere",
    bgColor: "#FFFFFF",
    src: "/images/secondary-school.png",
  },
  {
    title: "Exam Preparation",
    grades1: "Grades 1-6",
    grades2: "Common entrance/ 11+",
    description:
      "Personalised live classes for grade 1-6 to learn anytime, anywhere",
    bgColor: "#FFFFFF",
    src: "/images/exam-preparation.png",
  },
];

type NavProps = {
  onClick: () => void;
};

const GoLeft = ({ onClick }: NavProps) => {
  return (
    <Image
      cursor="pointer"
      src="/icons/left-arrow.svg"
      onClick={onClick}
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
      alt="left-arrow"
    />
  );
};

export const Courses = () => {
  return (
    <Container
      maxW="120rem"
      mx="auto"
      px="0"
      mt={{ base: "4rem", md: "7rem", lg: "10rem" }}
    >
      <Box bgColor={{ base: "#E5E5E5", lg: "color.white" }}>
        <Text
          fontWeight="500"
          py={{ base: "2rem", lg: "5rem" }}
          fontSize={{ base: "2.2rem", lg: "4.8rem" }}
          color="color.edukoyablue"
          textAlign="center"
        >
          Popular{" "}
          <Text
            px={{ base: "1.0rem", md: "2.0rem" }}
            py="0.5rem"
            fontWeight="600"
            as="i"
            ml="0.2rem"
            display="inline-block"
            bgColor="#FFC39D"
            borderRadius="58px"
          >
            Courses
          </Text>
        </Text>
        <Box my="3rem" mx="auto">
          <Flex wrap="wrap" justify="center" gap="3rem 2rem">
            {data.map((item, index) => {
              return (
                <CoursesContainer
                  key={index}
                  bgColor={item.bgColor}
                  color={item.color}
                  title={item.title}
                  src={item.src}
                  srcrightbottom={item.src1}
                  description={item.description}
                />
              );
            })}
          </Flex>

          <Center pt="7rem" pb="5rem">
            <Button
              backgroundColor="#F7D57D"
              fontSize="1.6rem"
              border="2px"
              borderColor="#171717"
              width="22rem"
              _hover={{
                backgroundColor: "#F7D57D",
              }}
              height="5.6rem"
              cursor="pointer"
              borderRadius="12px"
              fontWeight="600"
              color="#171717"
              rightIcon={<Image src="/icons/top-right-arrow.svg" alt="icon" />}
              as={Link}
              href="/courses"
            >
              View all
            </Button>
          </Center>
        </Box>

        {/* <Box display={{ base: 'block', lg: 'none' }}>
          <MobileSlideShow />
        </Box> */}
      </Box>
    </Container>
  );
};

type Props = {
  bgColor: string;
  color: string;
  title: string;
  src: string;
  srcrightbottom: string;
  description: string;
};

const CoursesContainer = ({
  bgColor,
  color,
  src,
  srcrightbottom,
  title,
  description,
}: Props) => {
  return (
    <Box>
      <Flex position="relative">
        <Image
          src={`${src}`}
          alt="course"
          position="absolute"
          top="-17px"
          zIndex="1"
          left="-45px"
        />
        <Box
          w="41.6rem"
          px="4.8rem"
          py="3.2rem"
          zIndex="10"
          bgColor={bgColor}
          borderRadius="20px"
        >
          <Text fontWeight="700" color={color} fontSize="2.9rem">
            {title}
          </Text>
          <Text mt="2.4rem" mb="3.2rem" color={color} fontSize="2.4rem">
            {description}
          </Text>
          <Image
            src={`${srcrightbottom}`}
            alt="right-bottom"
            //   top = "10px"
            right="0px"
            bottom="0px"
            position="absolute"
          />
        </Box>
      </Flex>
    </Box>
  );
};

const settings = {
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  // swipeToSlide: true,
  // cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
      },
    },
  ],
};

const MobileSlideShow = () => {
  const sliderRef = useRef<Slider>({} as Slider);
  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();
  return (
    <Box
      sx={{
        "& .slick-slide > div": {
          display: "grid !important",
          placeItems: "center",
        },
      }}
      pos="relative"
      overflow="hidden"
      pb="2rem"
    >
      <HStack
        width="100%"
        display="flex"
        spacing="0.2rem"
        justify="center"
        mt="2rem"
      >
        <GoLeft onClick={prevSlide} />
        <GoRight onClick={nextSlide} />
      </HStack>
      <Slider ref={sliderRef} {...settings}>
        {slideshowData.map((data, index) => {
          return (
            <MobileSlideShowContainers
              key={index}
              title={data.title}
              description={data.description}
              src={data.src}
              grades1={data.grades1}
              grades2={data.grades2}
              bgColor={data.bgColor}
            />
          );
        })}
      </Slider>
    </Box>
  );
};

type MobileProps = {
  src: string;
  title: string;
  grades1: string;
  grades2: string;
  description: string;
  bgColor: string;
};

const MobileSlideShowContainers = ({
  src,
  title,
  grades1,
  grades2,
  description,
  bgColor,
}: MobileProps) => {
  return (
    <Box
      w="32rem"
      borderRadius="35px"
      bgColor="color.white"
      px="2.8rem"
      py="2.8rem"
      mx="3rem"
    >
      <Image src={`${src}`} alt="image" />
      <Text mt="1.0rem" color="#000059" fontWeight="600">
        {title}
      </Text>
      <Flex gap="1.0rem" mt="1.0rem">
        <Text
          bgColor="#FFEADD"
          borderRadius="89px"
          py="0.7rem"
          px="1.3rem"
          fontWeight="500"
          whiteSpace="nowrap"
          fontSize="1.0rem"
          color="#F05B00"
        >
          {grades1}
        </Text>
        <Text
          bgColor="#DFF9ED"
          borderRadius="89px"
          py="0.7rem"
          whiteSpace="nowrap"
          px="1.3rem"
          fontWeight="500"
          fontSize="1.0rem"
          color="#2DA771"
        >
          {grades2}
        </Text>
      </Flex>
      <Text mt="1.0rem" fontSize="1.4rem" color="#646464" fontWeight="500">
        {description}
      </Text>
      <Button
        fontSize="1.6rem"
        mt="2.0rem"
        bgColor={bgColor}
        _hover={{
          backgroundColor: { bgColor },
        }}
        border="2px"
        borderColor="#171717"
        width="22rem"
        height="5.6rem"
        cursor="pointer"
        borderRadius="12px"
        fontWeight="600"
        color="#171717"
        rightIcon={<Image src="/icons/top-right-arrow.svg" alt="icon" />}
        as={Link}
        href="/courses"
      >
        View course
      </Button>
    </Box>
  );
};
