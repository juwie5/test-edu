import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Image,
  Divider,
  Center,
  Text,
  HStack,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

export const Footer = () => {
  const edukoya = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Features",
      route: "/features",
    },
    {
      name: "Courses",
      route: "/courses",
    },
    {
      name: "Our Tutors",
      route: "/teachers",
    },
    {
      name: "Pricing",
      route: "/pricing",
    },
    {
      name: "Join a class",
      route:
        "https://docs.google.com/forms/d/e/1FAIpQLSe1xFCwF0mWys2vRtT443x4sq14R72a3IMTSk9Lrtbpi9DoKw/viewform",
    },
    {
      name : 'FAQs',
      route : '/faqs'
    }
  ];
  const courses = [
    "English",
    "Maths",
    "Science",
    "JAMB",
    "IELTS",
    "11 Plus",
    "IGCSE",
  ];
  const teachers = ["Teaching At Edukoya", "Meet The Tutors", "Apply Now"];

  const demo = ["Maths", "Science", "English", "JAMB", "IELTS"];

  const quicklinks = [
    {
      name: "Login",
      route: "https://tutor.edukoya.com/",
    },
    {
      name: "Book a free class now",
      route:
        "https://docs.google.com/forms/d/e/1FAIpQLSe1xFCwF0mWys2vRtT443x4sq14R72a3IMTSk9Lrtbpi9DoKw/viewform",
    },
  ];

  const tutor = [
    {
      name: "Sign up as a tutor",
      route: "https://tutor.edukoya.com/",
    },
    // {
    //   name : 'Benefits and earnings',
    //   route : ''
    // }
  ];
  const terms = [
    {
      name: "Privacy Policy",
      route: "/privacy-policy",
    },
    {
      name: "Cookie Policy",
      route: "/cookie-policy",
    },
    {
      name: "Terms and Conditions",
      route: "/terms-and-conditions"
    },
    {
      name: "Marketing",
      route: "/marketing"
    }
  ];

  const socials = [
    {
      name: "facebook",
      path: "https://www.facebook.com/edukoya/",
      imageUrl: "/icons/coloured-facebook.svg",
    },
    {
      name: "twitter",
      path: "https://www.twitter.com/edukoya",
      imageUrl: "/icons/coloured-twitter.svg",
    },
    {
      name: "instagram",
      path: "https://instagram.com/edukoya",
      imageUrl: "/icons/coloured-instagram.svg",
    },
    {
      name: "linkedin",
      path: "https://www.linkedin.com/company/edukoya/mycompany",
      imageUrl: "/icons/coloured-linkedin.svg",
    },
    {
      name: "youtube",
      path: "https://www.youtube.com/@edukoya",
      imageUrl: "/icons/coloured-youtube.svg",
    },
  ];

  const whiteSocials = [
    {
      name: "facebook",
      path: "https://www.facebook.com/edukoya/",
      imageUrl: "/icons/white-facebook.svg",
    },
    {
      name: "twitter",
      path: "https://www.twitter.com/edukoya",
      imageUrl: "/icons/white-twitter.svg",
    },
    {
      name: "instagram",
      path: "https://instagram.com/edukoya",
      imageUrl: "/icons/white-instagram.svg",
    },
    {
      name: "linkedin",
      path: "https://www.linkedin.com/company/edukoya/mycompany",
      imageUrl: "/icons/white-linkedin.svg",
    },
    {
      name: "youtube",
      path: "https://www.youtube.com/@edukoya",
      imageUrl: "/icons/white-youtube.svg",
    },
  ];

  const navigateToTeachApplication = () => {
    window.open("https://tutor.edukoya.com/", "_self");
  };

  const handleNavigationToAndroidStore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.edukoya.app&pli=1",
      "_self"
    );
  };

  const handleNavigationToAppleStore = () => {
    window.open("https://apps.apple.com/ng/app/edukoya/id6450018847", "_self");
  };
  return (
    <Box
      bgImage="url('/images/background-footer.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box w={{ base: "100%", lg: "90%" }} mx="auto" pt="5rem">
        <Center>
          <Flex
            gap="8rem"
            flexDirection={{ base: "column-reverse", lg: "row" }}
          >
            <Image
              pl={{ base: "0rem", lg: "4rem" }}
              src="/images/app-screen.webp"
              w="95%"
              maxW="50rem"
              mx="auto"
              alt="smartphone"
            />
            <Center>
              <Box>
                <Text
                  fontWeight="600"
                  fontSize="3.2rem"
                  maxW="41rem"
                  display={{ base: "none", lg: "block" }}
                >
                  Attend a Free Live Class on our Mobile App
                </Text>
                <Center display={{ base: "flex", lg: "none" }}>
                  <h2 className="text-[2.5rem]">Get the Edukoya advantage</h2>
                </Center>
                <div className="flex items-center space-x-10 mt-4 lg:mt-0">
                  <button
                    onClick={handleNavigationToAndroidStore}
                    className="rounded-2xl text-white bg-black font-semibold flex justify-center space-x-4 py-3 items-center w-6/12 cursor-pointer"
                  >
                    <div>
                      <Image
                        src="/images/google-play.png"
                        alt="icon"
                        className="h-12 w-12"
                      />
                    </div>
                    <div className="flex justify-start items-start flex-col">
                      <p className="block text-sm font-light">GET IT ON</p>
                      <p className="block"> Google Play</p>
                    </div>
                  </button>
                  <button
                    onClick={handleNavigationToAppleStore}
                    className="rounded-2xl text-white  bg-black font-semibold flex justify-center space-x-4 py-3 items-center w-6/12 cursor-pointer"
                  >
                    <div>
                      <Image
                        src="/images/apple.png"
                        alt="icon"
                        height={12}
                        width={12}
                      />
                    </div>
                    <div>
                      <p className="block text-sm font-light">
                        Download on the
                      </p>
                      <p className="block">Apple Store</p>
                    </div>
                  </button>
                </div>
                <Text
                  mt="2.0rem"
                  color="color.edukoyablue"
                  fontSize="1.6rem"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Follow us for more learning adventures
                </Text>
                <Flex justify={{ base: "center", lg: "flex-start" }}>
                  <div className="flex items-center space-x-4 mt-6"> 
                    {socials.map((social, index) => {
                      return (
                        <main key={social.name}>
                          <a href={social.path} className="">
                            <Image src={social.imageUrl} alt={social.name} />
                          </a>
                        </main>
                      );
                    })}
                  </div>
                </Flex>
              </Box>
            </Center>
          </Flex>
        </Center>

        <footer className="bg-blue-600 md:rounded-tr-[100px] md:rounded-tl-[100px] md:py-32 md:px-32 py-9 px-6">
          <div className="md:flex items-center space-x-10  mb-14 hidden">
            <button
              onClick={handleNavigationToAndroidStore}
              className="rounded-2xl text-white bg-black font-semibold flex justify-center space-x-4 py-3 items-center px-10 cursor-pointer"
            >
              <div>
                <Image
                  src="/images/google-play.png"
                  alt="icon"
                  height={14}
                  width={14}
                />
              </div>
              <div className="flex justify-start items-start flex-col">
                <p className="block text-sm font-light">GET IT ON</p>
                <p className="block"> Google Play</p>
              </div>
            </button>
            <button
              onClick={handleNavigationToAppleStore}
              className="rounded-2xl text-white  bg-black font-semibold flex justify-center space-x-4 py-3 items-center px-10 cursor-pointer"
            >
              <div>
              <Image
                  src="/images/apple.png"
                  alt="icon"
                  height={14}
                  width={14}
                />
              </div>
              <div>
                <p className="block text-sm font-light">Download on the</p>
                <p className="block">Apple Store</p>
              </div>
            </button>
          </div>
          <Flex gap="10rem" display={{ base: "none", lg: "flex" }}>
            <Flex justify={{ base: "center", lg: "flex" }}>
              <div className="w-full flex justify-between space-x-20">
                <Box>
                  <Text fontWeight="800" fontSize="1.6rem" color="color.white">
                    Edukoya
                  </Text>
                  <ul className="mt-3 space-y-3 list-disc text-white">
                    {edukoya.map((data, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="text-white font-medium underline"
                            href={data.route}
                          >
                            {data.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
                <Box>
                  <Text fontWeight="800" fontSize="1.6rem" color="color.white">
                    Terms & Policies
                  </Text>
                  <ul className="mt-3 space-y-3 list-disc text-white">
                    {terms.map((data, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="text-white font-medium underline"
                            href={data.route}
                          >
                            {data.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
                <Box display={{ base: "none", lg: "block" }}>
                  <Text fontWeight="800" fontSize="1.6rem" color="color.white">
                    Quick Links
                  </Text>
                  <ul className="mt-3 space-y-3 list-disc text-white">
                    {quicklinks.map((data, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={data.route}
                            className="text-white font-medium underline"
                          >
                            {data.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
                <Box display={{ base: "none", lg: "block" }}>
                  <Text fontWeight="800" fontSize="1.6rem" color="color.white">
                    Tutor
                  </Text>
                  <ul className="mt-3 space-y-3 list-disc text-white">
                    {tutor.map((data, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={data.route}
                            className="text-white font-medium underline"
                          >
                            {data.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
              </div>
            </Flex>
          </Flex>

          <section className="space-y-10">
            <section className="md:flex justify-between items-center text-white mt-20 space-y-16 md:space-y-0 space-x-10">
              <div className="space-y-6">
                <p className="font-bold text-2xl">Contact</p>
                <a
                  href="mailto:hello@edukoya.com"
                  className="underline font-medium"
                >
                  Hello@edukoya.com
                </a>
                <div className="flex items-center space-x-4 mt-6">
                  {whiteSocials.map((social, index) => {
                    return (
                      <main key={social.name}>
                        <a href={social.path} className="">
                          <Image alt={social.name} src={social.imageUrl} />
                        </a>
                      </main>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="font-semibold">Lagos</h2>
                <div>
                  <p className="xl:w-10/12">374 Borno Way, Yaba Lagos. </p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="font-semibold">London</h2>
                <div>
                  <p className="xl:w-8/12">
                    71-75 Shelton Street, Covent Garden, London, England, WC2H
                    9JQ5{" "}
                  </p>
                </div>
              </div>
            </section>
            <section>
              <p className="text-white hidden md:block">
                © 2023 Edukoya Ltd (Company No.13276863). All rights reserved.
                Products may vary by market, If you would like to find out more
                about which Edukoya entity you receive services from, please
                reach out to us via{" "}
                <a
                  href="mailto:hello@edukoya.com"
                  className="underline font-medium"
                >
                  Hello@edukoya.com
                </a>
                . Nigerian tutoring services offered by Edukoya Nigeria Limited
                (RC796975) with registered address at 374 Borno Way, Yaba Lagos.
                UK services are offered by Edukoya Ltd (Company No. 13276863)
                with registered address at 71-75 Shelton Street, Covent Garden,
                London, England, WC2H 9JQ., United Kingdom.
              </p>
            </section>
          </section>

          {/* <Box display={{ base: "block", lg: "none" }}>
            <Flex justify="center">
              <Flex gap="5.7rem">
                <Box>
                  <Text fontWeight="600" fontSize="1.6rem" color="color.white">
                    Edukoya
                  </Text>
                  <ul className="mt-3 space-y-3 list-disc">
                    {edukoya.map((data, index) => {
                      return (
                        <li key={index}>
                          <Link className="text-white font-medium" href={data.route}>{data.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
                <Box>
                  <Text fontWeight="600" fontSize="1.6rem" color="color.white">
                    Courses
                  </Text>
                  <UnorderedList mt="1.5rem">
                    {courses.map((data, index) => {
                      return (
                        <ListItem
                          key={index}
                          fontSize="1.3rem"
                          color="color.white"
                        >
                          {data}
                        </ListItem>
                      );
                    })}
                  </UnorderedList>
                </Box>
              </Flex>
            </Flex>
          </Box> */}
          {/* <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Flex
              pb="2rem"
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: "1rem", lg: "4rem" }}
              w="100%"
            >
              <Flex flex="1" justify={{ base: "center", lg: "flex-start" }}>
                <div className="space-y-2">
                  <div className="mt-16"><a className="font-semibold text-white cursor-pointer" href="mailto:hello@edukoya.com">hello@edukoya.com</a></div>
                  <p className="text-white"
                  >
                    © 2023 Edukoya Ltd (Company No 13276863). All rights
                    reserved
                  </p>
                </div>
              </Flex>

              <Flex
                flex="1"
                display={{ base: "none", lg: "flex" }}
                justify="flex-end"
              >
                <Box>
                  <p className="font-medium text-white">
                  374 Borno Way, Alagomeji, Yaba Lagos.
                  </p>
                </Box>
              </Flex>
            </Flex>
          </Flex> */}

          {/* <Center display={{ base: "flex", lg: "none" }}>
            <Box>
              <Text
                color="color.white"
                maxW="24rem"
                textAlign="center"
                fontSize="1.3rem"
              >
                374 Borno Way, Alagomeji, Yaba Lagos.
              </Text>
            </Box>
          </Center>
          <Center display={{ base: "flex", lg: "none" }}>
            <Text
              fontWeight="275"
              mt="2.3rem"
              pb={{ base: "2rem", lg: "5rem" }}
              fontSize="1.3rem"
              maxW="23rem"
              textAlign="center"
              color="color.white"
            >
              © 2023 Edukoya Ltd (Company No 13276863). All rights reserved
            </Text>
          </Center> */}
        </footer>
      </Box>
    </Box>
  );
};
