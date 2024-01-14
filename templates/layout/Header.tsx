import React from 'react'
import { Box, Container, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export const Header = () => {
  return (
    <Box bgColor="color.white">
      <Container maxW="120rem" mx="auto">
        <Link href="/">
          <Image src="/icons/logo1.svg" alt="logo" py="3rem" />
        </Link>
      </Container>
    </Box>
  )
}
