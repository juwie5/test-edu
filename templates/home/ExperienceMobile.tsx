import { Box, Button, Text, Center, Image } from '@chakra-ui/react'
import React from 'react'

export const ExperienceMobile = () => {
  const navigateToApplyToTeach = () => {
    window.open('https://tutor.edukoya.com/', '_self')
  }
  return (
    <Box
      bgImage="url(/images/background-experience.png)"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box w="90%" mx="auto">
        <Center pt="7.3rem">
          <Text
            maxW="33rem"
            fontWeight="600"
            fontSize="2.7rem"
            color="#131313"
            textAlign="center"
          >
            Experience better learning with Edukoya
          </Text>
        </Center>
        <Center mt="1.1rem" mb="4.2rem">
          <Text
            fontSize="1.2rem"
            color="#646464"
            textAlign="center"
            maxW="30rem"
          >
            Our technology and master tutors will ensure your child learns
            better, faster, & forever!
          </Text>
        </Center>
        <Center>
        <button
             onClick={navigateToApplyToTeach}
              className='text-white rounded-2xl bg-blue-700 font-semibold w-5/12 py-7 cursor-pointer'
            >
              Apply to teach
            </button>
        </Center>
        <Center mt="4.0rem" pb="9.0rem">
          <Box>
            <Image src="/images/tablet.png" alt="tablet" maxW="30.6rem" />
          </Box>
        </Center>
      </Box>
    </Box>
  )
}
