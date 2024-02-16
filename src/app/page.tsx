"use client";

import { Variants, motion } from 'framer-motion';
import logo from "../../public/logo.png";
import arcton from "../../public/projects/arcton.png";
import cmtv from "../../public/projects/cmtv.png";
import dev from "../../public/projects/dev.png";
import spec from "../../public/projects/spec.png";
import Image from 'next/image';
import Link from 'next/link';
import arrow from "../../public/arrow.svg";
import { Permanent_Marker, Rubik_Glitch } from 'next/font/google';

const rubik = Rubik_Glitch({
  subsets: ['latin'],
  weight: ['400']
});

const marker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400']
});


export default function Home() {

  const parentVariant : Variants = {
    initial: {opacity: 0},
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

const childrenVariant: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: {
        duration: 1,
    } },
  };

  const childrenVariant2: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: {
        duration: 1,
    } },
  };

  const projects = [
    {title: "CMTV", href:"https://cmtv.edu.ge/en/home", image:cmtv},
    {title: "Arcton", href: "https://www.arcton.com/", image: arcton},
    {title: "Spec-Komfort", href: "https://speckomforti.ge/", image: spec},
    {title: "Devware Solutions", href: "https://www.devwaresolutions.com/", image: dev},
]

  const stack = [
    {
      title: "Javascript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
    },

    {
      title: "Typescript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
    },

    {
      title: "C#",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
    },

    {
      title: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },

    {
      title: "Nextjs",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
    },

    {
      title: ".NET",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg"
    },
    
  ]

  
  return (
    <div className='flex flex-col'>
      <div className='w-full'>
        <div className='w-full bg-gradient-to-l from-slate-800 via-gray-900 to-black  py-28 px-6 md:px-12 border-b-2 border-white'>
          <motion.div initial="initial" animate="animate" className=''>
            <motion.h1
              initial="hidden"
              whileInView="visible"            
              viewport={{ once: true }}
              transition={{ duration: 0.7}}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
              className={`${rubik.className} text-3xl text-cyan-400 font-bold text-center my-4`}>
              Hello World! 
            </motion.h1>

            <motion.h2
              initial="hidden"
              whileInView="visible"            
              viewport={{ once: true }}
              transition={{ duration: 0.8}}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
              className={`text-2xl text-white font-bold text-center my-4`}>
              Thank you for Visiting My Digital Space.
            </motion.h2>

            <motion.p 
              initial="hidden"
              whileInView="visible"            
              viewport={{ once: true }}
              transition={{ duration: 0.9}}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
            className='text-lg text-white font-bold text-center my-4 px-10 py-4 pb-10'>
              I&apos;m <b className='font-bold text-cyan-400'>Nika Ivanidze</b>,
              a passionate software developer dedicated to creating innovative solutions 
              and crafting exceptional user experiences.
            </motion.p>
          </motion.div>
        </div>




        <div className='border-b-2 border-white flex flex-col md:px-12 mx-12 my-16 justify-center'>
          <motion.h2
            initial="hidden"
            whileInView="visible"            
            viewport={{ once: true }}
            transition={{ duration: 1.4}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className={`text-2xl text-white font-bold text-center my-10`}>
            My Recent Work
          </motion.h2>


          <motion.div initial="initial" animate="animate" variants={parentVariant} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-3`}>
            {projects.map((mi, i) => {
                return (
                    <Link key={i} href={mi.href} className="group flex flex-col text-white hover:text-cyan-400 justify-center items-center transition duration-200">
                        <motion.div
                            key={mi.title}
                            id={mi.title}
                            className="flex flex-col justify-center items-center" 
                            variants={childrenVariant}
                            >
                            <Image alt="project image"  max-width={500} max-height={500} className="rounded-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/50 w-100 h-auto group-hover:font-bold transition duration-200 " src={mi.image}></Image>
                            <div className={`transition duration-0  text-xl font-bold `}>
                            <h2 className={`mt-2 pb-4`}>{mi.title}</h2>
                            </div>
                        </motion.div>
                    </Link>
                )
            })}
          </motion.div>
              <div className='flex justify-end'>
                <Link className='flex items-center bg-gray-900 text-white text-cetner p-2 font-bold text-lg m-2' href={'/projects'}>
                  See More
                   <Image src={arrow} width={20} height={20} alt={'arrow'} className='ms-2'/>
                </Link>
              </div>
        </div>


        <div className='my-10 flex flex-col md:px-12 mx-12 justify-center'> 
          <motion.h2
            initial="hidden"
            whileInView="visible"            
            viewport={{ once: true }}
            transition={{ duration: 0.4}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className={`text-2xl text-white font-bold text-center mt-10 mb-4`}>
            My Technology Stack
          </motion.h2>

          
          <motion.p 
            initial="hidden"
            whileInView="visible"            
            viewport={{ once: true }}
            transition={{ duration: 0.4}}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className='text-xl text-white font-bold text-center my-10'>
            In the ever-evolving landscape of software development, my toolkit is robust and tailored to deliver cutting-edge solutions.
            Proficient in a diverse range of technologies, I leverage the following stack to architect, develop, and optimize innovative 
            software experiences
          </motion.p>

          <motion.div initial="initial" animate="animate" variants={parentVariant} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {stack.map((mi, i) => {
              return (
                <motion.div variants={childrenVariant} key={mi.title} className='group flex flex-col cursor-pointer items-center justify-center hover:bg-cyan-500 transition duration-200 rounded-lg p-4'>
                  <Image src={mi.image} width={100} height={100} alt={mi.title}></Image>
                  <h3 className='text-white group-hover:text-gray-900 text-lg font-bold pt-2'>{mi.title}</h3>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>  

    </div>
  )
}
