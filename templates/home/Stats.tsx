import { Box, Flex, Text, Divider, Center, Container } from '@chakra-ui/react'
import React from 'react'

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const Stats = () => {
  return (
    <Container maxW="120rem" mx="auto">
      <Center>
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          paddingTop={{ base: '4rem', lg: '8rem' }}
          paddingBottom={{ base: '3rem', lg: '5rem' }}
        >
          <StatsContainer title="Downloads" value="100K+" />
          <Center
            height="100px"
            py="3rem"
            display={{ base: 'none', lg: 'block' }}
          >
            <Divider
              orientation="vertical"
              border="1px"
              borderColor="#9B9B9B"
            />
          </Center>
          <Box py="2.9rem" display={{ base: 'block', lg: 'none' }}>
            <Divider
              orientation="horizontal"
              border="1px"
              width="30px"
              mx="auto"
              borderColor="#9B9B9B"
            />
          </Box>
          <StatsContainer title="Star app rating" value="4.5+" />
          <Center
            height="100px"
            py="3rem"
            display={{ base: 'none', lg: 'block' }}
          >
            <Divider
              orientation="vertical"
              border="1px"
              borderColor="#9B9B9B"
            />
          </Center>
          <Box py="2.9rem" display={{ base: 'block', lg: 'none' }}>
            <Divider
              orientation="horizontal"
              border="1px"
              width="30px"
              mx="auto"
              borderColor="#9B9B9B"
            />
          </Box>
          <StatsContainer title="Cities worldwide" value="40+" />
          <Center
            height="100px"
            py="3rem"
            display={{ base: 'none', lg: 'block' }}
          >
            <Divider
              orientation="vertical"
              border="1px"
              borderColor="#9B9B9B"
            />
          </Center>
          <Box py="2.9rem" display={{ base: 'block', lg: 'none' }}>
            <Divider
              orientation="horizontal"
              border="1px"
              width="30px"
              mx="auto"
              borderColor="#9B9B9B"
            />
          </Box>
          <StatsContainer title="Questions practiced" value="7M+" />
        </Flex>
      </Center>
    </Container>
  )
}

type Props = {
  title: string
  value: string
}

const StatsContainer = ({ title, value }: Props) => {
  return (
    <Box px="6.8rem">
      <Text
        color="#0F0F0F"
        textAlign="center"
        fontWeight="700"
        fontSize="4.8rem"
      >
        {value}
      </Text>
      <Text color="#ACACAC" textAlign="center" fontSize="1.6rem">
        {title}
      </Text>
    </Box>
  )
}
