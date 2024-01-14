import { Image, Box } from '@chakra-ui/react'
import React from 'react'

export const HeroImage = () => {
  return (
    <Box display='flex'
    justifyContent='center'
    alignItems='center'>
          <Image
      src="/images/banner.png"
      objectFit='cover'
      alt="Banner-image"
      mt={{ base: '6.4rem', lg: '1rem' }}
     width='900px'
    />
    </Box>
  )
}


// Tigger pipeline.
