import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { HomeHeader } from '../layout'
import { HeroText } from './HeroText'
import { HeroImage } from './HeroImage'

export const HeroSection = () => {
  return (
    <Box backgroundColor="color.edukoyablue">
      <div className='container mx-auto'>
        <Container mx="auto" px="0" maxW="120rem"> 
        <HomeHeader />
        <HeroText />
        <HeroImage />
       </Container>
      </div>
    </Box>
  )
}
