import React from 'react'
import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  HStack,
  Center,
  Container,
} from '@chakra-ui/react'
import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Link from 'next/link'

const dataDesktop = [
  {
    title: 'Daily Live classes',
    description:
      'Two way Interaction between student & teacher, better than recorded videos',
    color: '#EC5A5A',
    bgColor: '#FAEEED',
    src: '/icons/daily-classes.svg',
  },
  {
    title: 'Top Tutors',
    description:
      'Get the top 5% tutors, who are experts with British, American and Nigerian curriculum',
    color: '#2962EE',
    bgColor: '#E5ECFA',
    src: '/icons/top-tutors.svg',
  },
  {
    title: 'Convenient & Safe',
    description:
      'No need to travel or worry. Learn at the comfort & safety of your home.',
    color: '#DD7678',
    bgColor: '#FAEFEE',
    src: '/icons/convenient.svg',
  },
]

export const Discover = () => {
  return (
    <Container
      maxW="120rem"
      mx="auto"
      mt={{ base: '4rem', md: '7rem', lg: '10rem' }}
    >
      <Flex
        bgColor="#FCF7E6"
        borderRadius="4rem"
        gap={{ base: '3.2rem', lg: '7.8rem' }}
        px="6rem"
        py="4rem"
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
      >
        <Box position="relative">
          <Image
            position="absolute"
            left={{ md: '50%', lg: '0%' }}
            top={{ md: '10%', lg: '0%' }}
            display={{ base: 'none', lg: 'block' }}
            transform={{
              md: 'translate(-345%, -50%)',
              lg: 'translate(-50%, -50%)',
            }}
            src="/icons/discover-title-icon.svg"
            alt="title"
          />
          <Text
            fontSize={{ base: '2.5rem', lg: '4.0rem' }}
            maxW="72rem"
            textAlign={{ base: 'center', lg: 'left' }}
            fontWeight="700"
            color="color.edukoyablue"
          >
            Discover Edukoya’s new way of learning with{' '}
            <Text
              px={{ base: '1.0rem', md: '2.0rem' }}
              py="0.5rem"
              as="span"
              ml="0.2rem"
              display="inline-block"
              bgColor="#F29D58"
              borderRadius="58px"
            >
              Interactive
            </Text>{' '}
            LIVE classes
          </Text>
          <Flex justify={{ base: 'center', lg: 'flex-start' }}>
            <Button
              backgroundColor="color.edukoyablue"
              _hover={{
                backgroundColor: 'color.edukoyablue',
              }}
              fontSize="1.6rem"
              width="22rem"
              mt="1.6rem"
              height="5.6rem"
              cursor="pointer"
              borderRadius="12px"
              fontWeight="700"
              color="color.white"
              rightIcon={
                <Image src="/icons/white-right-arrow-icon.svg" alt="icon" />
              }
              as={Link}
              href="/features"
            >
              See all features
            </Button>
          </Flex>
        </Box>

        <Box>
          <Image
            w="full"
            maxW="40rem"
            mx="auto"
            src="/images/interactive.png"
            alt="interact"
          />
        </Box>
      </Flex>
      <div className='flex justify-center items-center'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-[2rem] mt-[5.2rem]'>
        {dataDesktop.map((data, index) => {
          return (
            <DiscoverFeaturesContainer
              key={data.title}
              title={data.title}
              description={data.description}
              color={data.color}
              src={data.src}
              bgColor={data.bgColor}
            />
          )
        })}
      </div>
      </div>


    </Container>  
  )
}

type Props = {
  bgColor?: string
  src: string
  title: string
  color?: string
  description: string
}

const DiscoverFeaturesContainer = ({
  bgColor,
  color,
  src,
  title,
  description,
}: Props) => {
  return (
    <Box
      borderRadius="40px"
      bgColor={bgColor}
      px="4.0rem"
      w="34rem"
      pt="6.8rem"
      pb="4.0rem"
    >
      <Image src={`${src}`} alt="image" />

      <Text fontWeight="600" fontSize="2.5rem" color={color} mt="1.6rem">
        {title}
      </Text>
      <Text mt="1rem" color={color} fontSize="1.5rem">
        {description}
      </Text>
    </Box>
  )
}

type NavProps = {
  onClick: () => void
}

const GoLeft = ({ onClick }: NavProps) => {
  return (
    <Image
      cursor="pointer"
      src="/icons/left-arrow.svg"
      onClick={onClick}
      alt="right-arrow"
    />
  )
}

const GoRight = ({ onClick }: NavProps) => {
  return (
    <Image
      cursor="pointer"
      src="/icons/right-arrow.svg"
      onClick={onClick}
      alt="left-arrow"
    />
  )
}

const settings = {
  centerMode: false,
  className: 'mainFocus',
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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

const MobileSlideShow = () => {
  const sliderRef = useRef<Slider>({} as Slider)
  const nextSlide = () => sliderRef.current.slickNext()
  const prevSlide = () => sliderRef.current.slickPrev()
  return (
    <Box
      sx={{
        '& .slick-slide > div >div': {
          display: 'grid !important',
          placeItems: 'center',
        },
      }}
      pos="relative"
      overflow="hidden"
      pb="2rem"
    >
      <HStack
        width="100%"
        justify="center"
        display="flex"
        spacing="0.2rem"
        mt="2rem"
      >
        <GoLeft onClick={prevSlide} />
        <GoRight onClick={nextSlide} />
      </HStack>
      <Slider ref={sliderRef} {...settings}>
        {dataDesktop.map((data, index) => {
          return (
            <Box key={index}>
              <DiscoverFeaturesContainer
                title={data.title}
                description={data.description}
                color="#5F5F5F"
                src={data.src}
                bgColor="color.white"
              />
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}
