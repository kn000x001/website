"use client";

import {motion, Variants } from "framer-motion";
import { Rubik_Glitch } from 'next/font/google';

const rubik = Rubik_Glitch({
  subsets: ['latin'],
  weight: ['400']
});


const About = () => {

    const parentVariant : Variants = {
        initial: {opacity: 0},
        animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }
    
    const childrenVariant: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: {
            duration: 1.5,
        } },
      };


      const experience = [
        {
            company: "weinor",
            from: "2022",
            until: "present", 
            position: "Software Engineer",
            description1: "Created several medium to large sized projects in the team of up to 4 people, that have increased the productivity of several departments by 20%.",
            description2: "Created the tools for both internal and external use for both the employees as well as the customers to ensure the most comfortable experience for the user.",
            description3: "Tested, debugged and optimized the old and new code in order to meet the industry standard."
        },
      ]


    return (
        <>
            <div className="w-full py-20  bg-gray-900 text-center">
                <div className="w-100 flex flex-col">
                    <motion.div initial="initial" animate="animate" variants={parentVariant} className=" mx-auto px-4 text-gray-600 md:px-12">
                        <motion.h1 variants={childrenVariant} className={`${rubik.className} font-bold text-cyan-400 text-3xl`}>About Me</motion.h1>

                        <div className="flex flex-col text-start break-all text-white px-12">
                            <motion.p variants={childrenVariant} className="py-4 px-0 lg:px-20">
                                Greetings! I'm a passionate software developer with a keen eye for crafting user-friendly web applications. 
                                My journey in the realm of technology has equipped me with expertise in JavaScript, TypeScript, C#, React, Next.js,
                                .NET Framework, and Laravel.
                            </motion.p>

                            <motion.p variants={childrenVariant} className="py-4 px-0 lg:px-20">
                                Having collaborated with diverse clients, I specialize in tailoring solutions that not only meet but elevate their business objectives.
                                My approach is a fusion of creativity, attention to detail, and practical problem-solving. I believe in making projects innovative yet
                                functional, creating a harmonious balance between aesthetics and utility.
                            </motion.p>

                            <motion.p variants={childrenVariant} className="py-4 px-0 lg:px-20">
                                Beyond the realm of technology, my experiences extend into various sectors. I've served in the military as a translator for NATO and the 
                                US Marine Corps, practiced law, and worked as a protocol specialist for the Ministry of Education of Georgia.
                            </motion.p>

                            <motion.p variants={childrenVariant} className="py-4 px-0 lg:px-20">
                                What truly sets me apart is my unwavering commitment to clear communication and collaborative teamwork. I thrive on understanding the unique needs
                                of each client, ensuring that every project I undertake delivers exceptional results. My goal goes beyond mere coding; it's about crafting meaningful
                                digital solutions that bring about tangible differences.
                            </motion.p>

                            <motion.p variants={childrenVariant} className="py-4 px-0 lg:px-20">
                                Let's embark on a journey together, where we transform your ideas into effective, intuitive software experiences. Join me in bringing innovation to life!
                            </motion.p>
                        </div>
                    </motion.div>
                </div>

                <div className="w-100 flex flex-col px-0 lg:px-20 items-start mt-10 text-white">
                    <motion.div  
                        initial="hidden"
                        whileInView="visible"            
                        viewport={{ once: true }}
                        transition={{ duration: 0.5}}
                        variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                        }} className="px-5 lg:px-20">
                        <div className="h-auto w-100 shadow-2xl shadow-cyan-500 rounded-lg flex flex-col items-center md:items-start">
                            <div className="flex flex-col md:flex-row justify-center md:justify-start px-2">
                                <div>
                                    <h3 className="text-cyan-400 font-bold text-lg text-center md:text-start pt-4 p-2">Work Experience</h3>
                                </div>

                                <div className="flex flex-col text-start break-all px-2">
                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                            <div className="text-center md:text-start">
                                                <h3 className="text-lg font-bold">Weinor</h3>
                                                <p>Software Engineer</p>
                                            </div>
                                            <h3 className="text-lg font-bold">May 2022 - Present</h3>
                                        </div>
                                        <div>
                                            <ul className="list-disc ps-1 md:ps-4">
                                                <li>
                                                    Created several medium to large sized projects in the team of up to 4 people,
                                                    that have increased the
                                                    productivity of several departments by 20%
                                                </li>
                                                <li>
                                                    Created the tools for both internal and external use for both the employees
                                                    as well as the customers to
                                                    ensure the most comfortable experience for the user
                                                </li>
                                                <li>
                                                    Tested, debugged and optimized the old and new code in order to meet the industry standard.
                                                </li>

                                            </ul>
                                        </div>
                                    </div>


                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col text-start break-all">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                        <h3 className="text-lg font-bold">HobbyStudio</h3>
                                                    <p>Front-End Engineer</p>
                                                </div>
                                                <h3 className="text-lg font-bold">May 2022 - February 2023</h3>
                                            </div>
                                            <div>
                                                <ul className="list-disc ps-1 md:ps-4">
                                                    <li>
                                                        Worked alongside the team of other developers and Designers to develop user oriented UI/UX.
                                                    </li>
                                                    <li>
                                                        Ensured the comfortable, intuitive and bug-free Application interaction experience for the customers regardless of the browsers or devices.
                                                    </li>
                                                    <li>
                                                        Worked with designers and Back-end developers, test, debug and bring the following projects to live: speckomforti.ge; cmtv.edu.ge; nemera.ge; polsconcept.com,
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col text-start break-all">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                    <h3 className="text-lg font-bold">Arcton</h3>
                                                    <p>Software Engineer</p>
                                                </div>
                                                <h3 className="text-lg font-bold">June 2022 - October 2023</h3>
                                            </div>
                                            <div>
                                                <ul className="list-disc ps-1 md:ps-4">
                                                    <li>
                                                        Developed, tested and debugged company's corporate website: Arcton.com;
                                                        ensuring its stability, accessibility and user-friendly UI/UX.
                                                    </li>
                                                    <li>
                                                        Worked alongside a team of developers to Developed the company's main product: an online investment platform, using folowwing technologies: Typescript and Nextjs.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col text-start break-all">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                    <h3 className="text-lg font-bold">Bene Exclusive</h3>
                                                    <p>Full-Stack Developer</p>
                                                </div>
                                                <h3 className="text-lg font-bold">Oct 2021 - May 2022</h3>
                                            </div>
                                            <div>
                                                <ul className="list-disc ps-1 md:ps-4">
                                                    <li>
                                                        Spearheaded the development of the company's primary website, starting from the ground up, ensuring alignment with industry standards at Bene-exclusive.com.
                                                    </li>
                                                    <li>    
                                                        Collaborated closely with a cross-functional team to guarantee the accurate representation of the company's vision in the final product.
                                                    </li>
                                                    <li>
                                                        Pioneered the creation of additional products for the company, including an internal-use CRM system and various smaller-scale projects.
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col text-start break-all">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                    <h3 className="text-lg font-bold">Ministry of Education and Science of Georgia</h3>
                                                    <p>Protocol Specialist</p>
                                                </div>
                                                <h3 className="text-lg font-bold">June 2020 - Oct 2021</h3>
                                            </div>
                                            <div>
                                                <ul className="list-disc ps-1 md:ps-4">
                                                    <li>
                                                        Orchestrated and coordinated official events, ceremonies, and special programs for the Ministry.
                                                    </li>
                                                    <li>    
                                                        Collaborated with internal and external stakeholders to ensure seamless execution of events, including conferences, meetings, and educational initiatives.
                                                    </li>
                                                    <li>
                                                        Identified and assessed security risks related to official events, developing and implementing safety plans to mitigate potential issues.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col text-start break-all">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                    <h3 className="text-lg font-bold">TLC</h3>
                                                    <p>Front-End Developer</p>
                                                </div>
                                                <h3 className="text-lg font-bold">Sep 2020 - April 2021</h3>
                                            </div>
                                            <div>
                                                <ul className="list-disc ps-1 md:ps-4">
                                                    <li>
                                                        Developed company's main website from the scratch and made sure that it satisfies industry standards: TLC.com.ge
                                                    </li>
                                                    <li>    
                                                        Optimized the existing product in order to improve the work process of the company.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col text-start break-all">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                    <h3 className="text-lg font-bold">LLC Financial Bureau</h3>
                                                    <p>Lawyer</p>
                                                </div>
                                                <h3 className="text-lg font-bold">Aug 2019 - May 2020</h3>
                                            </div>
                                            <div>
                                                <ul className="list-disc ps-1 md:ps-4">
                                                    <li>
                                                        Provided comprehensive legal counsel to the LLC on matters related to business operations, contracts, and compliance.
                                                    </li>
                                                    <li>    
                                                        Conducted legal research, analyzed case law, and interpreted statutes to offer sound guidance on potential legal implications.
                                                    </li>
                                                    <li>    
                                                        Negotiated, drafted, and reviewed contracts, ensuring alignment with legal requirements and protecting the interests of the LLC.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col text-start break-all">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                    <h3 className="text-lg font-bold">KVG</h3>
                                                    <p>Interpreter for NATO and US Marine Corps</p>
                                                </div>
                                                <h3 className="text-lg font-bold">Aug 2017 - May 2019</h3>
                                            </div>
                                            <div>
                                                <ul className="list-disc ps-1 md:ps-4">
                                                    <li>
                                                        Provided precise and reliable translation services between military personnel and non-English-speaking individuals.
                                                    </li>
                                                    <li>    
                                                        Ensured accurate conveyance of spoken and written communications to facilitate understanding in diverse operational scenarios.
                                                    </li>
                                                    <li>    
                                                        Collaborated seamlessly with military units, fostering a positive and inclusive environment through effective language mediation.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>                          
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start px-2 w-full h-auto">
                                <div>
                                    <h3 className="text-cyan-400 font-bold text-lg text-center md:text-start pt-4 p-2 ps-6 md:ps-2">Qualifications</h3>
                                </div>

                                <div className="flex flex-col w-80 md:w-full h-auto">
                                    <div className="my-4">
                                        <div className="flex flex-col text-start break-all ps-5 lg:ps-8">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                    <h3 className="text-lg font-bold">Technologies</h3>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>Javascript - Very Good</p>
                                                </div>
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>Typescript - Very Good</p>
                                                </div>
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>React - Very Good</p>
                                                </div>
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>NextJs - Very Good</p>
                                                </div>
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>C# - Good</p>
                                                </div>
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>.NET - Good</p>
                                                </div>
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>Laravel - Good</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <div className="flex flex-col text-start break-all ps-5 lg:ps-8">
                                            <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                                <div className="text-center md:text-start">
                                                    <h3 className="text-lg font-bold">Languages</h3>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>English - Professional</p>
                                                </div>
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>Georgian - Native</p>
                                                </div>
                                                <div className="px-1 m-2 rounded-lg border b-white text-cyan-400 font-bold">
                                                    <p>Russian - Professional</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            
                            <div className="flex w-full h-auto flex-col md:flex-row justify-center md:justify-start px-2">
                                <div>
                                    <h3 className="text-cyan-400 font-bold text-lg text-center md:text-start pt-4 p-2">Education</h3>
                                </div>

                                <div className="flex flex-col w-full h-auto w-100 text-center break-all px-2 lg:px-4">
                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                            <div className="text-center md:text-start">
                                                <h3 className="text-lg font-bold">Master of Public International law</h3>
                                                <p>Tbilisi State University</p>
                                            </div>
                                            <h3 className="text-lg font-bold">Sep 2018 - May 2020</h3>
                                        </div>
                                    </div>

                                    <div className="my-4 ps-0 md:ps-12">
                                        <div className="flex flex-col md:flex-row items-center justify-between md:justify-between">
                                            <div className="text-center md:text-start">
                                                <h3 className="text-lg font-bold">Bachelor of Public International law</h3>
                                                <p>Tbilisi State University</p>
                                            </div>
                                            <h3 className="text-lg font-bold">Sep 2014 - May 2018</h3>
                                        </div>
                                    </div>
                                </div>                          
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default About;