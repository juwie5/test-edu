import { Image, Box } from '@chakra-ui/react'
import React from 'react'

export const MarketingHeroImage = () => {
  return (
    // <Box>
    //       <Image
    //   src="/images/hero-banner.svg"
    //   objectFit='cover'
    //   alt="Banner-image"
    //   // mt={{ base: '6.4rem', lg: '1rem' }}
    // //  width='900px'
    // />
    // </Box>
    <div>
      <div className="hidden md:block absolute top-32 right-4">
        <img src="images/green-wave.svg" alt="" />
      </div>
      <div className=' absolute  md:top-[100px] md:left-3/4  2xl:right-[27rem] md:right-0 z-10 top-[35rem] left-0 right-0'>
        <img className='w-2/5 md:w-4/5 2xl:w-full mx-auto md:m-0' src="images/hero-banner.svg" />
      </div>
    </div>

  )
}

// Tigger pipeline.
