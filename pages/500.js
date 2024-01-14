import React from 'react'
import { Container, Box, AbsoluteCenter, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'


export default function Custom500() {
    const router = useRouter()
    const navigateToHomepage = () => {
          router.push('/')
    }
    return (
        <Container maxW='2xl' bg='blue.600' centerContent>
            <Box padding='4' bg='blue.400' color='black' maxW='md'>
            <AbsoluteCenter >
                <Text fontSize='30px'>Error 500 - Server error 😭</Text>
                <Text>Breath in, and on the out breath, go back and try again.</Text>
                <Button
            onClick={navigateToHomepage}
              backgroundColor="color.white"
              fontSize='1.2rem'
              width="16rem"
              mr='2em'
              _hover={{
                backgroundColor: 'color.edukoyablue',
              }}
              // __hover={{
              //   backgroundColor: "color.white",
              // }}
              height="50"
              cursor="pointer"
              borderRadius="12px"
              fontWeight="200"
              color="color.edukoyablue"
            >
              Back to Home
            </Button>
            </AbsoluteCenter>
            </Box>
        </Container>
    )
}