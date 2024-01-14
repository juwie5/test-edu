import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Image,
  Container,
  Link,
} from "@chakra-ui/react";

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

export const ParentsMobile = () => {
  return (
    <Box bgColor="color.edukoyablue">
      <Container mx="auto" px="0" maxW="120rem">
        <Center>
          <Text
            fontSize="2.7rem"
            fontWeight="500"
            color="#FFFFFF"
            pt="4.8rem"
            textAlign="center"
            pb="5.5rem"
            maxW="34rem"
          >
            Our students and parents love us
          </Text>
        </Center>
        <Flex flexDirection="column" gap="1rem">
          {data.map((item, index) => {
            return (
              <ParentsContainer
                src={item.src}
                link={item.link}
                comment={item.comments}
                title={item.title}
                grade={item.grade}
                key={index}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};

type Props = {
  src: string;
  comment: string;
  title: string;
  grade: string;
  link: string;
};

const ParentsContainer = ({ src, comment, title, grade, link }: Props) => {
  return (
    <Box>
      <Center>
        <Box position="relative">
          <Image maxW="16rem" src={`${src}`} alt="teacher" />
          <Link
            href={`${link}`}
            target="_blank"
            position="absolute"
            right="0px"
            bottom="0px"
          >
            <Image src="/images/play.png" alt="play-icon" maxW="6rem" />
          </Link>
        </Box>
      </Center>
      <Center>
        <Text textAlign="center" color="color.white" maxW="29rem" mt="1.7rem">
          {comment}
        </Text>
      </Center>
      <Center>
        <Text
          mt="1.7rem"
          textAlign="center"
          color="color.white"
          fontWeight="500"
          fontSize="2.1rem"
        >
          {title}
        </Text>
      </Center>
      <Center>
        <Text
          mt="1.7rem"
          textAlign="center"
          color="color.white"
          pb="6rem"
          fontSize="1.2rem"
        >
          {grade}
        </Text>
      </Center>
    </Box>
  );
};
