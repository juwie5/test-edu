"use client";

import { Footer, Header } from "@/templates/layout";
import { Navigation } from "@/templates/layout/Navigation";

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const Page = () => {
  return (
    <Box bgColor="#FCFCFC">
      <Header />

      <Container maxW="120rem">
        <Navigation title="Courses" color="#FFB800" />

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
            Unlock your potential with our courses
          </Text>

          <Text
            color="#7B8AB5"
            fontSize={{ base: "1.6rem", md: "2.4rem" }}
            w={{ base: "100%", md: "40%" }}
            mt="2rem"
          >
            A list of curated sessions to help you unlock any goal with ease.
            From tips and tricks, to preparation strategies,Our live classes and
            top tutors are here to help you in your journey of cracking exams
          </Text>
        </Flex>

        <Flex
          gap="10%"
          justify="center"
          wrap="wrap"
          mt={{ base: "7rem", md: "12rem" }}
        >
          <CourseCard
            bg="#ECF4FB"
            color="#5186ED"
            title="Primary school"
            desc="Grades 1-6 • Maths, English, Science and thirty more subjects"
            icon="/images/quadrant.svg"
          />
          <CourseCard
            bg="#E6F4F0"
            color="#54BA83"
            title="Secondary school"
            desc="Grades 6-12 • Maths, English, Biology, Physics, Chemistry and more"
            icon="/images/drop.svg"
          />
          <CourseCard
            bg="#F2F0FB"
            color="#6D5AE6"
            title="Preparing with Edukoya"
            desc="IELTS • SATS • GMAT•"
            icon="/images/spinner.svg"
          />
          <CourseCard
            bg="#FAEEED"
            color="#EC5A5A"
            title="Exam preparation"
            desc="Common entrance , WAEC, JAMB, BECE, POST UTME"
            icon="/images/half-circle.svg"
          />
          <CourseCard
            bg="#FCF7E6"
            color="#F29D58"
            title="African Languages"
            desc="Yoruba• Hausa• Igbo, Ibibio• Bini,•Ijaw,•Tiv and many more •"
            icon="/images/triangle.svg"
          />
          <CourseCard
            bg="#ECF4FB"
            color="#589AD5"
            title="UK Exams"
            desc="11+• GSCE •  ALevels •"
            icon="/images/arc.svg"
          />
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

type Props = {
  bg: string;
  color: string;
  title: string;
  desc: string;
  icon: string;
};

const CourseCard = ({ bg, color, title, desc, icon }: Props) => {
  return (
    <Box
      w={{ base: "80%", md: "40%" }}
      mx="auto"
      pos="relative"
      mb={{ base: "6rem", md: "10rem" }}
    >
      <Box
        pos="absolute"
        top="-1.5rem"
        left="-4rem"
        zIndex="-1"
        display={{ base: "none", md: "block" }}
      >
        <Image w="16.8rem" src="/images/pattern.svg" alt="" />
      </Box>

      <Box
        p={{ base: "1.5rem", md: "3rem" }}
        bg={bg}
        color={color}
        rounded="2rem"
        boxShadow="-16px 16px 24px rgba(220, 239, 253, 0.2)"
        minH="24rem"
      >
        <Text fontWeight="700" fontSize={{ base: "2rem", md: "3.2rem" }}>
          {title}
        </Text>

        <Text
          mt={{ base: "1.4rem", md: "2.4rem" }}
          fontSize={{ base: "1.8rem", md: "2.4rem" }}
        >
          {desc}
        </Text>
      </Box>

      <Box pos="absolute" right="-3rem" bottom="-3rem">
        <Image alt="icon" src={icon} />
      </Box>
    </Box>
  );
};

export default Page;
