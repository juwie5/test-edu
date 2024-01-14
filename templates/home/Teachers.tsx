import {
  Box,
  Text,
  Flex,
  Button,
  Image,
  Center,
  Container,
} from '@chakra-ui/react'
import React from 'react'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const Teachers = () => {
  const data = [
    {
      src: '/images/tutor-helen.svg',
      src1: '/images/tutor-helen.svg',
      name: 'Helen',
      name1: 'Helen',
      color: '#589AD5',
      teacher: 'Math Expert',
      teacher1: 'Science Expert',
      exprience : '10 years experience'
    },
    {
      src: '/images/tutor-tolu.svg',
      src1: '/images/tutor-tolu.svg',
      name1: 'Tolu',
      name: 'Tolu',
      color: '#EC5A5A',
      teacher: 'English Expert',
      teacher1: 'Math Expert',
      exprience : '7 years experience'
    },
    {
      src: '/images/tutor-wahab.svg',
      src1: '/images/tutor-wahab.svg',
      name: 'Wahab',
      name1: 'Wahab',
      color: '#54BA83',
      teacher: 'Coding expert',
      teacher1: 'Science Expert',
      exprience : '5 years experience'
    },
  ]

  const router = useRouter()
const navigateToTeachers = () => {
      router.push('/teachers')
}

const navigateToTutorsWebsite = () => {
  window.open('https://tutor.edukoya.com/', '_self')
}

  return (
    <Box
      bgColor="#FFFDF7"
      bgImage={{
        base: "url('/images/teachers-background.png')",
        lg: 'transparent',
      }}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container maxW="120rem" mx="auto" px="0">
        <h1 className='text-3xl pt-20 px-10 lg:pt-0  lg:tracking-normal leading-loose lg:text-7xl font-bold text-center lg:leading-snug'>All tutors teach. Our master tutors get <span className='bg-[#F1CC5F] rounded-full px-8 py-3'>results</span></h1>
    <div className='w-6/12 md:w-full mx-auto'>
    <div className='md:flex justify-center items-center space-y-6 md:space-y-0 md:space-x-10 mt-10'>
        <button onClick={navigateToTeachers}
              className='text-white rounded-2xl bg-blue-700 font-semibold px-10 py-5 lg:py-7 cursor-pointer'
            >
              Meet our Tutors
            </button>
            <p onClick={navigateToTutorsWebsite} className='text-blue-700 font-medium text-2xl cursor-pointer'>
               Are you a tutor? Join us
            </p>
        </div>
    </div>
        <Center mt="6.8rem" pb="25rem" display={{ base: 'none', lg: 'flex' }}>
          <section className='grid grid-cols-3'>
          {data.map((item, index) => {
              return (
                <div key={index} className='relative'>
                   <div className=''>
                   <Image src={item.src} height='500' width={500} />
                   </div>
                  <div className='flex justify-center items-center'>
                  <div className='flex justify-center items-center flex-col space-y-4 absolute bottom-10'>
                  <h1 style={{color : item.color}} className='text-4xl font-semibold'>{item.name}</h1>
                   <h1 className='font-medium' style={{color : item.color}}>{item.teacher}</h1>
                  </div>
                  </div>
                </div>
              )
            })}
          </section>
        </Center>
        <Center mt="7.8rem" pb="10.6rem" display={{ base: 'flex', lg: 'none' }}>
          <Flex flexDirection="column" gap="3rem">
            {data.map((item, index) => {
              return (
                <TeachersContainers
                  key={index}
                  src={item.src1}
                  name={item.name1}
                  color={item.color}
                  teacher={item.teacher1}
                />
              )
            })}
          </Flex>
        </Center>
      </Container>
    </Box>
  )
}

type Props = {
  src: string
  name: string
  color: string
  teacher: string
  exprience? : string
}

const TeachersContainers = ({ src, name, teacher, color, exprience }: Props) => {
  return (
    <Box>
      <Image src={`${src}`} maxW="29.7rem" alt="image" />
      <Text
        mt="1.0rem"
        color={color}
        fontWeight="700"
        textAlign="center"
        className={inter.className}
        fontSize="3.2rem"
      >
        {name}
      </Text>
      <Text
        mt="0.2rem"
        className={inter.className}
        color={color}
        textAlign="center"
        fontSize="2.0rem"
      >
        {teacher}
      </Text>
      <Text
        mt="0.2rem"
        className={inter.className}
        color={color}
        textAlign="center"
        fontSize="1.9rem"
      >
        {exprience}
      </Text>
    </Box>
  )
}
