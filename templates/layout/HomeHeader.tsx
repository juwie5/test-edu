import React, { useState } from 'react'
import {
  Box,
  Flex,
  VStack,
  Image,
  Text,
  Collapse,
  Center,
  Button,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { useDisclosure } from '@chakra-ui/react'

export const HomeHeader = () => {
  // const headertitle = ["Features", "Courses", "Our Teachers", "Pricing"];
  const { isOpen, onToggle } = useDisclosure()
  const navtitles = [
    {
      title: 'Features',
      route: 'features',
    },
    {
      title: 'Courses',
      route: 'courses',
    },
    {
      title: 'Our Tutors',
      route: 'teachers',
    },
    // {
    //   title: 'Pricing',
    //   route: 'pricing',
    // },
  ]

  const redirectToBookTrialForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1xFCwF0mWys2vRtT443x4sq14R72a3IMTSk9Lrtbpi9DoKw/viewform', '_self')
  }

  const redirectToJoinClassForm = () => {
    window.open('https://app.edukoya.com', '_self')
  }

  return (
    <Box>
      <Flex
        paddingLeft={{ base: '2.9rem', lg: '7.7rem' }}
        paddingTop="2rem"
        paddingBottom={{ base: '2rem', lg: '2rem' }}
        paddingRight={{ base: '3.8rem', lg: '4.4rem' }}
        justifyContent="space-between"
        alignItems='center'
      >
        <Box>
          <Image src="/icons/logo.svg" alt="logo" />
        </Box>
        <Flex gap={{ base: 'none', lg: '3.2rem' }}>
          {navtitles.map((navtitle, index) => {
            return (
              <Center key={index}>
                <Link
                  href={navtitle.route}
                  display={{ base: 'none', lg: 'block' }}
                  cursor="pointer"
                  fontSize="1.6rem"
                  whiteSpace="nowrap"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  // textDecoration="none"
                  color="color.white"
                  fontWeight="500"
                >
                  {navtitle.title}
                </Link>
              </Center>
            )
          })}
        </Flex>
        <Flex display={{ base: 'none', lg: 'flex' }} gap="2.4rem">
             <button
          onClick={redirectToBookTrialForm}
           className='rounded-2xl px-6 py-6 text-white font-semibold border-2 border-white'
          >
            Book a FREE trial
          </button>
          <button
          onClick={redirectToJoinClassForm}
           className='rounded-2xl px-6 py-6 bg-white text-blue-700 font-semibold'
          >
            Join Class Now
          </button>
        </Flex>
        <Flex
          justify={{ base: 'center', lg: 'flex-start' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          display={{ base: 'flex', lg: 'none' }}
        >
          <Image
            src="/icons/hamburger-icon.svg"
            onClick={onToggle}
            cursor="pointer"
            alt="hamburger"
          />
        </Flex>
      </Flex>

      {/* mobile nav */}
      <Collapse in={isOpen} animateOpacity>
        <VStack spacing="1rem" my="2rem">
          {navtitles.map((navtitle, index) => {
            return (
              <Link
                href={navtitle.route}
                display={{ base: 'block', lg: 'none' }}
                cursor="pointer"
                key={index}
                fontSize="1.6rem"
                whiteSpace="nowrap"
                _hover={{
                  textDecoration: 'none',
                }}
                // textDecoration="none"
                color="color.white"
                fontWeight="500"
              >
                {navtitle.title}
              </Link>
            )
          })}
          <Link
            href=""
            cursor="pointer"
            fontSize="1.6rem"
            _hover={{
              textDecoration: 'none',
            }}
            onClick={redirectToBookTrialForm}
            // textDecoration="none"
            color="color.white"
            fontWeight="500"
          >
             Book Free Trial
          </Link>
          <button
          onClick={redirectToJoinClassForm}
           className='rounded-2xl px-6 py-3 bg-white text-blue-700 font-semibold'
          >
            Join Class Now
          </button>
        </VStack>
      </Collapse>
    </Box>
  )
}