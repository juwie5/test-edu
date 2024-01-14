"use client";

import {
  Box,
  Container,
  Heading,
  Flex,
  VStack,
  Image,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import React from "react";

import { Footer, Header } from "@/templates/layout";
import { Navigation } from "@/templates/layout/Navigation";

const data = [
  {
    src: '/images/tutor-helen.svg',
    src1: '/images/tutor-helen.svg',
    name: 'Helen',
    color: "#589AD5",
    description:
      "Discover Edukoya’s new way of learning with interactive LIVE classes. You might have just started your preparation.",
    teacher: "Math expert",
    experience: '10 years experience'
  },
  {
    src: '/images/tutor-tolu.svg',
    src1: '/images/tutor-tolu.svg',
    name: 'Tolu',
    description:
      "Discover Edukoya’s new way of learning with interactive LIVE classes. You might have just started your preparation.",
    color: "#EC5A5A",
    teacher: "English expert",
    experience: '7 years experience'
  },
  {
    src: '/images/tutor-wahab.svg',
    src1: '/images/tutor-wahab.svg',
    name: 'Wahab',
    description:
      "Discover Edukoya’s new way of learning with interactive LIVE classes. You might have just started your preparation.",
    color: "#54BA83",
    teacher: "Coding expert",
    experience: '5 years experience'
  },
];
const dataDesktop = [
  {
    title: "Highly Qualified",
    description:
      "All Edukoya tutors have a bachelor’s degree, and many have advanced degrees.",
    color: "#EC5A5A",
    bgColor: "#FAEEED",
    src: "/icons/daily-classes.svg",
  },
  {
    title: "Experienced",
    description:
      "Our tutors have at least two years of teaching experience and are professionally trained and certified.",
    color: "#2962EE",
    bgColor: "#E5ECFA",
    src: "/icons/top-tutors.svg",
  },
  {
    title: "Trusted by Parents",
    description:
      "Edukoya carefully vets tutors and requires all to pass a rigorous background check.",
    color: "#DD7678",
    bgColor: "#FAEFEE",
    src: "/icons/convenient.svg",
  },
];

const teachingExperience = [
  {
    src: '/images/teaching-experience1.png',
    description:
      "What I love most about Edukoya is how it truly tutors, I find immense joy in my role, and this platform allows me to fully immerse myself in the art of teaching. Gone are the days of spending countless hours grading papers and drowning in paperwork demands. With Edukoya  I can focus on what I truly love: teaching",
    name: "-Tutor Helen",
    years: "10+years of teaching experience",
  },
  {
    src: '/images/teaching-experience2.png',
    description:
      "Edukoya values and encourages the creativity and expertise of its tutors. I have the freedom to infuse my lessons with my personal teaching style, innovative approaches, and engaging activities that resonate with my students. This flexibility enables me to create a vibrant and dynamic learning environment that caters to the diverse needs and interests of my students.",
    name: "-Tutor Tolu",
    years: "7+years of teaching experience",
  },
  {
    src: '/images/teaching-experience3.png',
    description:
      "What I absolutely love about Edukoya is the profound one-on-one connection that it fosters between tutors and students.  I have developed incredibly close bonds with many of my students and their families, and these connections have become an integral part of my teaching journey. Witnessing the growth and progress of each student is immensely rewarding",
    name: "-Teacher Wahab",
    years: "5+years of teaching experience",
  },
];

const navigateToApplyToTeach = () => {
  window.open('https://tutor.edukoya.com/', '_self')
}

const Page = () => {
  return (
    <Box bgColor="#FCFCFC">
      <Header />
      <section className="">
        <section className="w-11/12 md:w-10/12 mx-auto">
          <Navigation title="Tutors" color="#F1C2CA" />
        </section>
        <section className="w-11/12 md:w-10/12 mx-auto">
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            align="center"
            mt={{ base: "7rem", md: "10rem" }}
          >
            <Text
              color="#1F2432"
              fontSize={{ base: "4rem", md: "6rem", lg: "8rem" }}
              w={{ base: "100%", md: "50%" }}
            >
              Edukoya Tutors are the Best
            </Text>

            <Text
              color="#7B8AB5"
              fontSize={{ base: "1.6rem", md: "2rem" }}
              w={{ base: "100%", md: "45%" }}
              mt="2rem"
            >
              Edukoya selects only the top 5% tutors from thousands of applicants. The quality of our tutors is simply unmatched and you can rest assured that your child is getting tutored by the best of the best.
            </Text>
          </Flex>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-32 w-10/12 mx-auto">
          {data.map((item, index) => {
            return (
              <div key={index} className="relative flex justify-center items-center flex-col">
                <Image src={item.src} height={500} width={500} />
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center flex-col space-y-3 absolute bottom-3 lg:-bottom-2 xl:-bottom:12">
                    <h1 style={{ color: item.color }} className="font-bold text-5xl">{item.name}</h1>
                    <h1 style={{ color: item.color }} className="text-3xl">{item.teacher}</h1>
                    <h1 style={{ color: '#7B8AB5' }} className="text-3xl">{item.experience}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="space-y-40">
          <section style={{ backgroundColor: '#FAEEED' }} className="py-60 flex justify-center items-center flex-col space-y-6">
            <div className="font-extrabold text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-center">
              Our Tutors Have Made Edukoya the
             <h1 className="text-center text-blue-600"> #1 Live Class Learning Platform</h1>
            </div>
            <p style={{color : '#7B8AB5"'}} className="text-center md:w-7/12 w-10/12 text-2xl md:text-3xl">
              As Edukoya’s student community continues to grow, so does our demand for tutors. Join us to build a global classroom where high quality education is available to every African globally.
            </p>

            <Flex justify="center" mt="1.6rem">
              <Button
                backgroundColor="color.edukoyablue"
                fontSize="1.6rem"
                width="22rem"
                mt="1.6rem"
                _hover={{
                  backgroundColor: "color.edukoyablue",
                }}
                onClick={navigateToApplyToTeach}
                height="5.6rem"
                cursor="pointer"
                borderRadius="12px"
                fontWeight="700"
                color="color.white"
                as="a"
                rightIcon={
                  <Image src="/icons/white-right-arrow-icon.svg" alt="icon" />
                }
              >
                Apply to teach
              </Button>
            </Flex>
          </section>

          <section className="grid gap-20 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-10/12 mx-auto">
            {dataDesktop.map((data, index) => {
              return (
                <Center key={index}>
                  <DiscoverFeaturesContainer
                    title={data.title}
                    description={data.description}
                    color={data.color}
                    src={data.src}
                    bgColor={data.bgColor}
                  />
                </Center>
              );
            })}
          </section>
        </section>

        <section className="w-10/12 mx-auto">
          <Box
            mt="1.0rem"
            position="relative"
            pt={{ base: "5rem", md: "8rem" }}
            pb={{ base: "3rem", md: "6rem" }}
          >
            <Center>
              <Text
                fontWeight="500"
                fontSize="3.2rem"
                textAlign="center"
                color="#1F2432"
                mt="3rem"
                maxW="58rem"
              >
                Together we teach thousands of  Classes
              </Text>
            </Center>
            <Center mt="1.5rem">
              <Image src="/images/blue-line.png" alt="blue-line" />
            </Center>
            <Center>
              <Text
                textAlign="center"
                maxW="80rem"
                mt="2.0rem"
                color="#1F2432B2"
                fontSize="2.0rem"
              >
                Meet some of the dedicated educators from our community, one of the largest of it’s kind, with almost 10,000 tutors from Nigeria.
              </Text>
            </Center>
            <div className="relative">
              <Image
                src="/images/dots.png"
                alt="dots"
                className="absolute -left-32 -top-72 hidden md:block"
              />
                <section className="md:flex md:space-x-7 space-y-10 md:space-y-0 my-32">
                {teachingExperience.map((data, index) => {
                  return (
                      <div className="p-6 rounded-lg border border-gray-200 shadow-md z-50 bg-white md:w-4/12"  key={index}>
                        <Center>
                          <div>
                            <Image src={`${data.src}`} height={200} width={200} alt="avatar" />
                          </div>
                        </Center>
                        <Image my="0.5rem" src="/icons/quotes.svg" alt="quotes" />
                        <p style={{ color: '#1F2432' }} className="leading-wide">
                          {data.description}
                        </p>
                        <Text fontWeight="500" mt="2.0rem" fontSize="1.2rem" color="#1F2432">
                          {data.name}
                        </Text>
                        <Text fontSize="1.2rem" color="#1F2432B2">
                          {data.years}
                        </Text>
                      </div>
                  );
                })}
                </section>
              <Image
                maxW="17rem"
                src="/images/dots.png"
                alt="dots"
                className="absolute -right-40 -bottom-16 hidden md:block"
              />
            </div>
          </Box>
        </section>
      </section>
      <Box my="4rem" bgColor="color.edukoyablue">
        <Container py="5rem" maxW="120rem" mx="auto">
          <Flex
            gap={{ base: "5rem", lg: "14.3rem" }}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Center pl={{ base: "0rem", lg: "5rem" }}>
              <Text
                color="color.white"
                maxW="48rem"
                fontWeight="600"
                fontSize="4.7rem"
                textAlign={{ base: "center", lg: "left" }}
              >
                Be a part of the
                <Text
                  px={{ base: "1.0rem", md: "2.0rem" }}
                  py="0.5rem"
                  as="span"
                  ml="0.2rem"
                  display="inline-block"
                  bgColor="#F69151"
                  borderRadius="58px"
                >
                  Edukoya
                </Text>{" "}
                family
              </Text>
            </Center>
            <Center>
              <Box>
                <Text
                  maxW="41.6rem"
                  fontSize="2.4rem"
                  color="color.white"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Discover Edukoya’s new way of learning with interactive LIVE
                  classes. Apply to a teacher now!
                </Text>
                <Flex
                  justify={{ base: "center", lg: "flex-start" }}
                  mt="1.6rem"
                >
                  <button onClick={navigateToApplyToTeach} className="font-black bg-white py-6 rounded-xl text-blue-700 px-6">Apply to teach
                    <Image width={10} height={10} alt="right upwards icon" className='inline-block pl-3' src="/icons/right-upwards-icon.svg" />
                  </button>
                </Flex>
              </Box>
            </Center>
          </Flex>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

type Props = {
  src: string;
  name: string;
  color: string;
  description: string;
  teacher: string;
  experience: string
};

const TeachersContainers = ({
  src,
  name,
  teacher,
  description,
  color,
  experience
}: Props) => {
  return (
    <Box>
      <Image src={`${src}`} maxW="30rem" mx="auto" alt="image" />

      <Text
        mt="1.0rem"
        color={color}
        fontWeight="700"
        textAlign="center"
        fontSize="3.2rem"
      >
        {name}
      </Text>
      <Text mt="0.6rem" color={color} textAlign="center" fontSize="2.0rem">
        {teacher}
      </Text>
      <Text mt="0.6rem" color={color} textAlign="center" fontSize="2.0rem">
        {experience}
      </Text>
    </Box>
  );
};

type DiscoverProps = {
  bgColor?: string;
  src: string;
  title: string;
  color?: string;
  description: string;
};

const DiscoverFeaturesContainer = ({
  bgColor,
  color,
  src,
  title,
  description,
}: DiscoverProps) => {
  return (
    <div className="rounded-[40px] p-10 space-y-3" style={{ backgroundColor: bgColor }}>
      <Image src={`${src}`} alt="image" />
      <Text fontWeight="600" fontSize="2.5rem" color={color} mt="1.6rem">
        {title}
      </Text>
      <p style={{ color: color }} className="text-3xl"> {description}</p>
    </div>

  );
};

type experienceProps = {
  src: string;
  description: string;
  name: string;
  years: string;
};

export default Page;
