import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";
// import Image from "next/image";
import React from "react";

const data = [
  {
    src: "/images/parents1.png",
    comments:
      "Edukoya is the best app for my daughter to strengthen her math grade",
    title: "Mother of Ada",
    link: "https://youtu.be/XNNT7E5BFvQ",
    grade: "Grade 6 | Lagos",
  },
  {
    src: "/images/parents2.png",
    comments:
      "My son's academic performance has improved immensely with Edukoya",
    title: "Father of Dozie",
    link: "https://youtu.be/G9CC-mfp0mk",
    grade: "Grade 8 | Ogun",
  },
  {
    src: "/images/parents3.png",
    comments:
      "Edukoya helped my son get ahead of his class in a very short amount of time.",
    title: "Father of David",
    link: "https://youtu.be/36CRVmQgS74",
    grade: "Grade 12 | Lagos",
  },
];

const navigateToVideo = () => {
  window.open("https://www.youtube.com/watch?v=P75TNQLIJhY", "_blank");
};

export const Experience = () => {
  return (
    <Box
      bgImage="url('/images/background-experience.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container maxW="120rem" mx="auto">
        <div className="relative">
          <Box
            w="80%"
            bgColor="color.edukoyablue"
            mx="auto"
            borderRadius={{ base: "0px", lg: "40px" }}
            position="relative"
            top="-140px"
          >
            <Center pt="4.0rem" pb="3.0rem">
              <Box>
                <Text fontWeight="500" fontSize="3.2rem" color="color.white">
                  Why parents love us
                </Text>
                <Flex justifyContent="flex-end">
                  <Image src="/icons/parents-bottom-logo.svg" alt="vector" />
                </Flex>
              </Box>
            </Center>
            <Flex w="85%" mx="auto" gap="10rem">
              {data.map((item, index) => {
                return (
                  <ParentsContainer
                    link={item.link}
                    src={item.src}
                    comment={item.comments}
                    title={item.title}
                    grade={item.grade}
                    key={index}
                  />
                );
              })}
            </Flex>
          </Box>
          <span>
            <Image
              src="/icons/spiral.svg"
              width={40}
              height={40}
              className="absolute top-0 left-32"
              alt="Picture of the author"
            />
          </span>
        </div>

        <Flex w="90%" mx="auto" mt="5rem" pb="5rem" gap="8rem">
          <Box w="50%">
            <Text
              maxW="56rem"
              fontWeight="600"
              fontSize="3.5rem"
              color="#131313"
            >
              Experience{" "}
              <Text as="span" bg="#F1CC5F" px="1rem" rounded="20rem">
                better
              </Text>{" "}
              learning with Edukoya
            </Text>
            <Text fontSize="2rem" color="#646464" maxW="55rem">
              Our technology and master tutors will ensure your child learns
              better & faster!
            </Text>
            <button
              onClick={navigateToVideo}
              className="text-white rounded-2xl bg-blue-700 font-semibold w-5/12 py-7 cursor-pointer mt-3"
            >
              Watch video
              <Image
             src="/icons/white-right-arrow-icon.svg"
              width={6}
              height={6}
              className="inline-block ml-3"
              alt="icon"
            />
            </button>
          </Box>

          <Box w="50%">
            <Image src="/images/tablet.png" w="full" alt="tablet" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

type Props = {
  src: string;
  comment: string;
  link: string;
  title: string;
  grade: string;
};

const ParentsContainer = ({ src, comment, title, grade, link }: Props) => {
  return (
    <Box>
      <Center position="relative">
        <Image src={`${src}`} alt="teacher" maxW="16rem" />
        <Link
          href={`${link}`}
          target="_blank"
          position="absolute"
          right="0px"
          bottom="0px"
        >
          <Image src="/images/play.png" alt="play-icon" maxW="6rem" />
        </Link>
      </Center>
      <Text textAlign="center" color="color.white" mt="1.7rem">
        {comment}
      </Text>
      <Text
        mt="1.7rem"
        textAlign="center"
        maxW="29rem"
        color="color.white"
        fontWeight="500"
        fontSize="2.1rem"
      >
        {title}
      </Text>
      <Text
        mt="1.7rem"
        textAlign="center"
        color="color.white"
        pb="6rem"
        fontSize="1.2rem"
      >
        {grade}
      </Text>
    </Box>
  );
};
