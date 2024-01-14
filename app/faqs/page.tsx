"use client";

import React from "react";
import { Box, Container, VStack, Flex, Text } from "@chakra-ui/react";

import { Footer, Header } from "@/templates/layout";
import { Navigation } from "@/templates/layout/Navigation";


export default function Faqs() {
  return (
    <Box>
      <Header />

      <Container maxW="120rem">
        <Navigation title="FAQs" color="#93B112" />
         <section className="lg:flex md:space-x-32 text-3xl space-y-10 md:space-y-0 leading-loose py-20 px-6 md:px-0 w-11/12 mx-auto lg:w-auto">
         <section className="space-y-20">
            <div className="space-y-10">
               <h1 style={{color : '#1F2432'}} className="text-5xl font-medium">Who teaches at Edukoya?</h1>
               <p style={{color : '#7B8AB5'}} className="text-justify">At Edukoya, our tutor community consists of highly skilled professionals with extensive educational backgrounds. They are selected for their subject knowledge, teaching experience, and ability to engage students. Our tutors hold advanced degrees from renowned universities and have specialised training in their respective fields. They are experienced educators who understand different learning styles and adapt their methods accordingly. With a strong pedagogical foundation, they create a supportive and interactive learning environment. Rest assured, at Edukoya, you'll learn from bright minds dedicated to your educational success</p>
            </div>

            <div className="space-y-6">
               <h1 style={{color : '#1F2432'}} className="text-5xl font-medium">What are the benefits of online private lessons?</h1>
               <p style={{color : '#7B8AB5'}} className="text-justify">At Edukoya, our online private lessons offer several benefits that enhance your child’s learning experience:</p>
               <ul className="list-disc space-y-10 pl-10">
                 <li style={{color : '#7B8AB5'}} className="text-justify">Personalized Attention: Students receive individualized instruction and focused attention from a dedicated tutor, ensuring their specific needs and learning goals are met.</li>
                 <li style={{color : '#7B8AB5'}} className="text-justify">Flexibility: Our online platform allows for flexible scheduling, enabling students to conveniently book lessons that fit their busy schedules.</li>
                 <li style={{color : '#7B8AB5'}} className="text-justify">Customized Learning: Lessons are tailored to each student's learning style, pace, and preferences, ensuring an optimized and engaging learning experience.</li>
                 <li style={{color : '#7B8AB5'}} className="text-justify">Enhanced Focus: Online private lessons eliminate distractions, allowing students to fully concentrate on the lesson and maximize their learning potential.</li>
                 <li style={{color : '#7B8AB5'}} className="text-justify">Boosted Confidence: Our private lessons create a supportive environment where students feel comfortable asking questions and actively participating, fostering confidence and self-assurance in their abilities.</li>
                 <li style={{color : '#7B8AB5'}} className="text-justify">Progress Tracking: Students can monitor their progress through detailed reports and feedback from their tutors, enabling them to track their growth and identify areas for improvement.</li>
                 <li style={{color : '#7B8AB5'}} className="text-justify">Convenient Learning Environment: With online private lessons, students can learn from the comfort of their own homes, eliminating the need for commuting and providing a safe and convenient learning environment.</li>
                 <li style={{color : '#7B8AB5'}} className="text-justify">Individualized Support: Our tutors are committed to understanding and meeting the unique needs of each student, providing individualized support and guidance to help them succeed academically.</li>
               </ul>
               <p style={{color : '#7B8AB5'}} className="text-justify">At Edukoya, our online private lessons combine personalized attention, flexibility, customization, expert tutors, interactive learning, progress tracking, and individualized support to create a comprehensive and effective learning experience for our students.</p>
            </div>
         </section>
         <section className="space-y-20">
         <div className="space-y-6">
              <h1 style={{color : '#1F2432'}} className="text-5xl font-medium">What services are offered?</h1>
              <p style={{color : '#7B8AB5'}} className="text-justify"><b>Group Classes:</b> Our group classes foster collaboration and interaction among students. By learning in a group setting, students have the opportunity to engage in discussions, share ideas, and learn from their peers. Group classes encourage teamwork, communication, and the development of social skills, enhancing the overall learning experience.
We also provide dedicated learning.</p>

<p style={{color : '#7B8AB5'}} className="text-justify"><b>One to One Classes:</b> With 1 to 1 classes , your child will have a dedicated tutor who will work with them to master simple and complex concepts, learn new skills and languages by helping them develop their creativity.  One to One learning prioritizes your child's needs, ensuring that they fully achieve mastery in any subject and ensures a fully optimised experience created just for your child.
Services may vary across markets -ask your academic counsellor for more details </p>
           </div>

           <div className="space-y-6">
             <h1 style={{color : '#1F2432'}} className="text-5xl font-medium">Which subjects do you offer ?</h1>
             <p style={{color : '#7B8AB5'}} className="text-justify">At Edukoya, we offer a wide range of subjects covering K-12 education and exam preparation. We provide tutoring in all subjects, there is a higher demand for Mathematics, English, Basic Science, Biology, Chemistry, and Physics. However, we offer over 30 subjects and exam preparation classesu. We are committed to meeting the individual needs of our students and are prepared to work with you across any subject area you require. Our aim is to provide comprehensive educational support tailored to your specific needs and academic goals.</p>
           </div>

           <div className="space-y-6">
            <h1 style={{color : '#1F2432'}} className="text-5xl font-medium">Do you carry out physical classes?</h1>
            <p style={{color : '#7B8AB5'}} className="text-justify">Edukoya is the future of tutoring,we are a 100% online tutoring platform.Our vision is to help learners unlock their full potential  through innovative online teaching by world class master tutors. </p>
           </div>

           <div className="space-y-6">
             <h1 style={{color : '#1F2432'}} className="text-5xl font-medium">What type of curriculums do you use at Edukoya?</h1>
             <p style={{color : '#7B8AB5'}} className="text-justify">We cover the British and Nigerian Curriculum. We also cover  American and Canadian Curriculums.</p>
           </div>

           <div className="space-y-6">
            <h1 style={{color : '#1F2432'}} className="text-5xl font-medium">Do you also train children in coding?</h1>
            <p style={{color : '#7B8AB5'}}>Yes we have coding classes available</p>
           </div>

        </section>
         </section>
      </Container>
      <Footer />
    </Box>
  );
}
