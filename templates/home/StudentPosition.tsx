import {
  Flex,
  Box,
  Image,
  Text,
  Center,
  Button,
  Container,
  background,
} from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export const StudentPosition = () => {
  const data = [
    {
      title: 'Start with a FREE trial ',
    },
    {
      title: 'Purchase lessons',
    },
    {
      title: 'Start learning',
    },
  ]

  const redirectToFreeTrialBookingForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe1xFCwF0mWys2vRtT443x4sq14R72a3IMTSk9Lrtbpi9DoKw/viewform', '_self')
  }
  
  return (
    <Box
      bgImage={{
        base: "url('/images/mobile-background-topping.png')",
        lg: "url('/images/background-topping.png')",
      }}
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <Container
        maxW="120rem"
        mx="auto"
        py={{ base: '4rem', md: '7rem', lg: '10rem' }}
      >
        <Flex flexDirection={{ base: 'column', lg: 'row' }} align="center">
          <Box w={{ base: 'full', lg: '50%' }}>
            <Flex justify={{ base: 'center', lg: 'flex-start' }}>
              <Text
                fontWeight="600"
                fontSize={{ base: '2.7rem', lg: '3.5rem' }}
                textAlign={{ base: 'center', lg: 'left' }}
                color="#151515"
                mt={{ base: '5rem', lg: '0rem' }}
              >
                Edukoya students{' '}
                <Text
                  px={{ base: '1.0rem', md: '2.0rem' }}
                  py="0.5rem"
                  as="span"
                  ml="0.2rem"
                  display="inline-block"
                  bgColor="#54BA83"
                  borderRadius="58px"
                >
                  topping
                </Text>{' '}
                their school exams
              </Text>
            </Flex>
            <Flex justify={{ base: 'center', lg: 'flex-start' }}>
              <Text
                mt="2.0rem"
                textAlign={{ base: 'center', lg: 'left' }}
                maxW={{ base: '28rem', lg: '44rem' }}
                fontSize={{ base: '1.2rem', lg: '2.0rem' }}
                color="#646464"
              >
                Want your child to perform the same way? Our aim is to create a
                great learning experience for your child
              </Text>
            </Flex>
            <Flex justify={{ base: 'center', lg: 'flex-start' }}>
              <Box>
                {data.map((item, index) => {
                  return <BlueCheckmark key={index} title={item.title} />
                })}
              </Box>
            </Flex>
            <Flex justify={{ base: 'center', lg: 'flex-start' }} mt="1.6rem">
            <button
              onClick={redirectToFreeTrialBookingForm}
              className='text-white rounded-2xl bg-blue-700 font-semibold w-7/12 md:w-5/12 py-7 cursor-pointer'
            >
              Book a FREE trial
              <Image
              src="/icons/white-right-arrow-icon.svg"
              alt="icon"
              className='inline-block ml-3'
            />
            </button>
            </Flex>
          </Box>

          <Box
            w={{ base: 'full', lg: '50%' }}
            mt={{ base: '2rem', lg: '0rem' }}
          >
            <Image
              src="/images/student-position.png"
              alt="student"
              w="full"
              display={{ base: 'none', lg: 'block' }}
            />
            <Box display={{ base: 'block', lg: 'none' }}>
              <MobileSlideShow />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

type Props = {
  title: string
}

const BlueCheckmark = ({ title }: Props) => {
  return (
    <Flex gap="1.6rem" mt="2.0rem">
      <Image src="/icons/blue-checkmark.svg" alt="blue-tick" />
      <Text fontWeight="600" color="#646464" fontSize="1.6rem">
        {title}
      </Text>
    </Flex>
  )
}

const settings = {
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'mainFocus',
  infinite: true,
  swipeToSlide: true,
  speed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
}

const images = [
  {
    src: '/images/boluwatife-student.png',
  },
  {
    src: '/images/emmanuel-student.png',
  },
  {
    src: '/images/esther-student.png',
  },
  {
    src: '/images/femi-student.png',
  },
]

const MobileSlideShow = () => {
  const sliderRef = useRef<Slider>({} as Slider)
  return (
    <Box
      sx={{
        '& .slick-slide > div > div': {
          display: 'grid !important',
          placeItems: 'center',
        },
      }}
      pos="relative"
      overflow="hidden"
      pb="2rem"
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => {
          return (
            <Box key={index}>
              <Image maxW="21rem" mx="1rem" src={image.src} alt="image" />
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}
