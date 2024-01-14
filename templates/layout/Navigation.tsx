"use client";

import React from "react";
import { Flex, Text, Box, VStack, Heading } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  color: string;
};

const routes = [
  { title: "Courses", route: "/courses" },
  { title: "Features", route: "/features" },
  { title: "Tutors", route: "/teachers" },
  { title: "FAQs", route: "/faqs" },
];
import Link from 'next/link';

export const Navigation = ({ title, color }: Props) => {
  const pathname = usePathname();
  return (
    <Flex justify="space-between" align="center" as="header">
      <VStack align="flex-start" spacing="1.2rem">
        {routes.map((route, index) => {
          const active = pathname === route.route;
          return (
            <Flex
              key={index}
              gap="8px"
              _hover={{
                textDecoration: "none",
              }}
              align="center"
            >
              <Box
                bg="#7B8AB5"
                w={active ? "4px" : "2px"}
                h="3rem"
                cursor="pointer"
                opacity="0.4"
              />
              <Text
                color="#7B8AB5"
                fontWeight={active ? "600" : "400"}
                fontSize="2.4rem"
              >
               <Link href={route.route}>{route.title}</Link>
              </Text>
            </Flex>
          );
        })}
      </VStack>

      <Heading
        color={color}
        fontSize={{ base: "5rem", md: "14rem", lg: "20rem" }}
        fontWeight="400"
        opacity="0.4"
      >
        {title}
      </Heading>
    </Flex>
  );
};
