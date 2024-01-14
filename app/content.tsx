'use client'

import {
  Courses,
  Discover,
  Experience,
  ExperienceMobile,
  HeroSection,
  ParentsMobile,
  SlideShow,
  Stats,
  StudentPosition,
  Teachers,
} from '@/templates/home'

import { Footer } from '@/templates/layout'

import React from 'react'
import { Box } from '@chakra-ui/react'

const Content = () => {
  return (
    <Box overflowX="hidden">
      <HeroSection />
      <Stats />
      <SlideShow />
      <Discover />
      <Courses />
      <StudentPosition />
      <Teachers />
      <Box display={{ base: 'none', lg: 'block' }}>
        <Experience />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <ParentsMobile />
        <ExperienceMobile />
      </Box>
      <Footer />
    </Box>
  )
}

export default Content
