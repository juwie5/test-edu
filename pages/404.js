import React from 'react'
import { Container, Box, AbsoluteCenter, Button, Text, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'


export default function Custom404() {
  const router = useRouter()
  const navigateToHomepage = () => {
        router.push('/')
  }
  return (
    <Container maxW='2xl' bg='blue.600' centerContent>
      <AbsoluteCenter>
      <Box padding='4' bg='blue.400' color='black' maxW='md' display='flex' justifyContent='center' alignItems='center' flexDirection={'column'}>
          <Text fontSize='20px'>Error 404 - Page Not Found</Text>
          <Text fontSize='20px'>You've found a page that doesn't exist</Text>
          <Text>Breath in, and on the out breath, go back and try again.</Text>
          <Button
                      onClick={navigateToHomepage}
              backgroundColor="color.white"
              width="15rem"
              mr='2em'
              _hover={{
                backgroundColor: 'blue.300',
              }}
              // __hover={{
              //   backgroundColor: "color.white",
              // }}
              height="3rem"
              cursor="pointer"
              borderRadius="12px"
              fontWeight="700"
              color="color.edukoyablue"
            >
               Back to Home
            </Button>
      </Box>
      </AbsoluteCenter>
    </Container>
    )
}