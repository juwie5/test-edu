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

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

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

export const MarketingDiscover = () => {
  return (
    // <Container
    //   maxW="120rem"
    //   mx="auto"
    //   mt={{ base: '4rem', md: '7rem', lg: '10rem' }}
    // >
    //   <Flex
    //     bgColor="#FCF7E6"
    //     borderRadius="4rem"
    //     gap={{ base: '3.2rem', lg: '7.8rem' }}
    //     px="6rem"
    //     py="4rem"
    //     flexDirection={{ base: 'column-reverse', lg: 'row' }}
    //   >
    //     <Box position="relative">
    //       <Image
    //         position="absolute"
    //         left={{ md: '50%', lg: '0%' }}
    //         top={{ md: '10%', lg: '0%' }}
    //         display={{ base: 'none', lg: 'block' }}
    //         transform={{
    //           md: 'translate(-345%, -50%)',
    //           lg: 'translate(-50%, -50%)',
    //         }}
    //         src="/icons/discover-title-icon.svg"
    //         alt="title"
    //       />
    //       <Text
    //         fontSize={{ base: '2.5rem', lg: '4.0rem' }}
    //         maxW="72rem"
    //         textAlign={{ base: 'center', lg: 'left' }}
    //         fontWeight="700"
    //         color="color.edukoyablue"
    //       >
    //         Discover Edukoya’s new way of learning with{' '}
    //         <Text
    //           px={{ base: '1.0rem', md: '2.0rem' }}
    //           py="0.5rem"
    //           as="span"
    //           ml="0.2rem"
    //           display="inline-block"
    //           bgColor="#F29D58"
    //           borderRadius="58px"
    //         >
    //           Interactive
    //         </Text>{' '}
    //         LIVE classes
    //       </Text>
    //       <Flex justify={{ base: 'center', lg: 'flex-start' }}>
    //         <Button
    //           backgroundColor="color.edukoyablue"
    //           _hover={{
    //             backgroundColor: 'color.edukoyablue',
    //           }}
    //           fontSize="1.6rem"
    //           width="22rem"
    //           mt="1.6rem"
    //           height="5.6rem"
    //           cursor="pointer"
    //           borderRadius="12px"
    //           fontWeight="700"
    //           color="color.white"
    //           rightIcon={
    //             <Image src="/icons/white-right-arrow-icon.svg" alt="icon" />
    //           }
    //           as={Link}
    //           href="/features"
    //         >
    //           See all features
    //         </Button>
    //       </Flex>
    //     </Box>

    //     <Box>
    //       <Image
    //         w="full"
    //         maxW="40rem"
    //         mx="auto"
    //         src="/images/interactive.png"
    //         alt="interact"
    //       />
    //     </Box>
    //   </Flex>
    //   <div className='flex justify-center items-center'>
    //   <div className='grid grid-cols-1 lg:grid-cols-3 gap-[2rem] mt-[5.2rem]'>
    //     {dataDesktop.map((data, index) => {
    //       return (
    //         <DiscoverFeaturesContainer
    //           key={data.title}
    //           title={data.title}
    //           description={data.description}
    //           color={data.color}
    //           src={data.src}
    //           bgColor={data.bgColor}
    //         />
    //       )
    //     })}
    //   </div>
    //   </div>


    // </Container>
    <section className={inter.className}>
      <div className='py-40 px-5 md:px-[16.7%]'>
        <div className='flex flex-col mb-8  md:flex-row items-center justify-between gap-6 md:gap-20 2xl:mb-20'>
          <div>
            <h2 className='text-[68px] leading-[73px] text-[#0D224A] font-bold'>Why <br></br>choose  <br></br><span className="bg-gradient-to-r from-[#145AF7] to-[#00BE7E] inline-block text-transparent bg-clip-text">edukoya</span></h2>
            <p className='text-lg  text-[#6D7D9C] font-medium py-11 2xl:hidden'>Our tutors makes school syllabus understandable & each lesson exciting so your child studies smarter, learns faster, & achieves more!</p>
            <p className='hidden 2xl:block text-4xl text-[#6D7D9C] font-medium py-11 2xl:text-wrap'>Our tutors makes school syllabus <br></br> understandable & each lesson  <br></br> exciting so your child studies smarter, <br></br> learns faster, & achieves more!</p>
          </div>

          <div className='hidden md:block 2xl:hidden corner-wrapper'>
            <iframe width="549.115px" height="355.148px" src="https://www.youtube.com/embed/pa6XameATVE?si=f_iZbg9FsCe8Bsno" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className='flex items-center justify-center md:hidden corner-wrapper-mobile'>
            <iframe width="342px" height="207.793px" src="https://www.youtube.com/embed/pa6XameATVE?si=f_iZbg9FsCe8Bsno" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className='hidden 2xl:block corner-wrapper'>
            <iframe width="749.115px" height="465.148px" src="https://www.youtube.com/embed/pa6XameATVE?si=f_iZbg9FsCe8Bsno" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 justify-items-center md:place-content-center'>
          <div className='w-4/5 md:w-full px-8 py-11 border-2 border-[#00BE7E40] rounded-[14px] flex  justify-between'>
                <div>
                  <h5 className='text-[#0D224A] text-2xl font-semibold '>JAMB/ WAEC</h5>
                  <p className='text-[#6D7D9C] text-base leading-[22px] font-medium'>We assess your child's current status, <br></br>strengths and improvements.</p>
                </div>
                <div>
                  <img src="images/mdi_class.svg" alt="" />
                </div>
          </div>
          <div className='w-4/5 md:w-full   px-8 py-11 border-2 border-[#0D6EFD40] rounded-[14px] flex  justify-between'>
                <div>
                  <h5 className='text-[#0D224A] text-2xl font-semibold '>BECE</h5>
                  <p className='text-[#6D7D9C] text-base leading-[22px] font-medium'> 1 hour lessons with our engaging <br></br>teachers at home or online</p>
                </div>
                <div>
                  <img src="images/people-nearby.svg" alt="" />
                </div>
          </div>
          <div className='w-4/5  md:w-full  px-8 py-11 border-2 border-[#F4846240] rounded-[14px] flex  justify-between'>
                <div>
                  <h5 className='text-[#0D224A] text-2xl font-semibold '>School Exams</h5>
                  <p className='text-[#6D7D9C] text-base leading-[22px] font-medium'>We'll keep you informed with regular updates <br></br>on your child's progress and development</p>
                </div>
                <div>
                  <img src="images/person-child.svg" alt="" />
                </div>
          </div>
          <div className='w-4/5  md:w-full  px-8 py-11 border-2 border-[#9747FF40] rounded-[14px] flex  justify-between'>
                <div>
                  <h5 className='text-[#0D224A] text-2xl font-semibold '>Common Entrance </h5> 
                  <p className='text-[#6D7D9C] text-base leading-[22px] font-medium'>Access to our e-Library access for more practice <br></br>outside of class.</p>
                </div>
                <div>
                  <img src="images/book-3-fill.svg" alt="" />
                </div>
          </div>
        </div>
      </div>
    </section>
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
