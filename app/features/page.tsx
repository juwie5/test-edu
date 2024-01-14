"use client";

import { Footer, Header } from "@/templates/layout";
import { Navigation } from "@/templates/layout/Navigation";
import Marquee from "react-fast-marquee";

import {
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Box bgColor="#FCFCFC">
      <Header />
      <Container maxW="120rem">
        <Navigation title="Features" color="#0047FF" />
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
            Boost your child’s progress
          </Text>

          <Text
            color="#7B8AB5"
            fontSize={{ base: "1.6rem", md: "2.4rem" }}
            w={{ base: "100%", md: "40%" }}
            mt="2rem"
          >
            Our innovative features are tailored to your child’s needs through
            careful research into the best techniques to achieve excellent
            results with online learning. We integrate cutting edge technology
            to make learning an enjoyable experience for your child.
          </Text>
        </Flex>
      </Container>

      <Box mt={{ base: "5rem", md: "8rem" }}>
        <FeatureSection
          bg="#FAEEED"
          image="/images/curated-courses.png"
          title="Best curated courses"
          desc="Our courses are thoughtfully curated to cater to the diverse needs of K-12 learners. Whether your child needs to improve in a subject or learn advanced topics, we have a wide range of courses to choose from."
        />

        <FeatureSection
          bg="#EAF4FC"
          image="/images/live-classes.png"
          title="Live One on One classes"
          desc="Learning is fun with our interactive LIVE one on one classes. We have created an immersive and engaging learning environment to keep your child motivated and excited to learn."
          reverse
        />

        <FeatureSection
          bg="#FDF7E4"
          image="/images/group-classes.png"
          title="Learn from the best educators"
          desc="Our highly qualified educators are handpicked in a 3 step recruitment process that ensures your child learns from experienced tutors who are intelligent, have a passion for teaching and understand child psychology."
        />
      </Box>

      <Footer />
    </Box>
  );
};

type Props = {
  bg: string;
  title: string;
  desc: string;
  image: string;
  reverse?: boolean;
};


const FeatureSection = ({ bg, title, desc, image, reverse }: Props) => {
  return (
    <Flex bg={bg} w="full" py={{ base: "6rem", md: "10rem" }}>
      <Container maxW="114rem">
        <Flex
          flexDir={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
          align="center"
        >
          <Box w={{ base: "full", lg: "50%" }}>
            <Image w="full" maxW="70rem" mx="auto" src={image} alt="" />
          </Box>

          <Box
            w={{ base: "full", lg: "50%" }}
            pl={{ base: "0", lg: reverse ? "0" : "8rem" }}
            pr={{ base: "0", lg: reverse ? "8rem" : "0" }}
            mt={{ base: "3rem", lg: "0" }}
          >
            <Text fontWeight="700" fontSize={{ base: "2.4rem", md: "3.2rem" }}>
              {title}
            </Text>

            <Text
              mt={{ base: "1.4rem", md: "2.4rem" }}
              fontSize={{ base: "1.8rem", md: "2rem" }}
              color="#797B82"
            >
              {desc}
            </Text>

            <Box mt="3rem">
              <Button
                backgroundColor="color.edukoyablue"
                fontSize="1.6rem"
                width="22rem"
                mt="1.6rem"
                _hover={{
                  backgroundColor: "color.edukoyablue",
                }}
                height="5.6rem"
                cursor="pointer"
                borderRadius="12px"
                fontWeight="700"
                color="color.white"
                rightIcon={
                  <Image src="/icons/white-right-arrow-icon.svg" alt="icon" />
                }
                as={Link}
                href="/features"
              >
                See all features
              </Button>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Page;
