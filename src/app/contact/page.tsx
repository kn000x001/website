"use client";
import Image from "next/image";
import Contact1 from "../../../public/images/contact1.jpg";
import Contact2 from "../../../public/images/contact2.jpg";
import Contact3 from "../../../public/images/contact3.jpg";
import Contact4 from "../../../public/images/contact4.jpg";
import { motion, Variants } from "framer-motion";
import email from "../../../public/images/email.svg";
import linkedin from "../../../public/images/linkedin.svg";
import Link from "next/link";
import { Rubik_Glitch } from 'next/font/google';

const rubik = Rubik_Glitch({
  subsets: ['latin'],
  weight: ['400']
});

const Contact = () => {

  const parentVariant : Variants = {
    initial: {opacity: 0},
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  }

const childrenVariant: Variants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0, transition: {
        duration: 1.5,
    } },
  };

  const childrenVariant2: Variants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: {
        duration: 1.5,
    } },
  };

    return (
      <div className="w-full py-20  bg-gray-900">
        <motion.div initial="initial" animate="animate" variants={parentVariant} className=" mx-auto px-4 text-gray-600 md:px-12">
          <div className="max-w-lg mx-auto justify-between lg:flex lg:max-w-none py-6 ">
            <motion.div variants={childrenVariant2} className="max-w-lg space-y-3 px-4">
              <h1 className={`${rubik.className} text-2xl  text-cyan-400 font-semibold`}>Contact</h1>
              <h2 className={` text-white text-3xl font-semibold sm:text-4xl drop-shadow-[0_35px_35px_rgb(34 211 238)]`}>
                Get in Touch - Let&apos;s Bring Your Ideas to Life
              </h2>
              <p className={"text-gray-300"}>
                Ready to take the next step? Whether you have a specific project in mind or just want to explore the possibilities,
                I&apos;m here to help. As a seasoned software developer, my focus goes beyond coding; it&apos;s about understanding your needs and creating
                solutions that truly matter.
              </p>
            </motion.div>
            <motion.div variants={childrenVariant} className=" mt-4 lg:mt-0 w-full p-4 bg-gray-900 sm:max-w-lg sm:px-4 sm:rounded-xl flex-1 lg:max-w-xl">  
            <Image alt="image" max-width={500} max-height={500}  className="rounded" src={Contact2}/>            
            </motion.div>
          </div>

          <div className="max-w-lg mx-auto justify-between lg:flex lg:flex-row-reverse py-6 lg:max-w-none items-center">
            <motion.div variants={childrenVariant} className="max-w-lg space-y-3 px-4" >
              <h2 className={` text-white text-3xl font-semibold sm:text-4xl`}>
                Ready to Collaborate?
              </h2>
              <p className={"text-gray-300"}>
                Feel free to reach out for inquiries, collaborations, or just a friendly chat.
                I thrive on clear communication and collaborative teamwork. Let&apos;s discuss how we can transform your ideas into effective,
                intuitive software experiences that make a lasting impact.
              </p>
            </motion.div>
            <motion.div variants={childrenVariant2} className=" mt-4 lg:mt-0 w-full p-4 bg-gray-900 sm:max-w-lg sm:px-4 sm:rounded-xl flex-1 lg:max-w-xl"> 
              <Image alt="image" max-width={500} max-height={500}  className="rounded" src={Contact1}/>            
            </motion.div>
          </div>

          <div className="max-w-lg mx-auto justify-between lg:flex lg:max-w-none py-6 items-center">
            <motion.div variants={childrenVariant2} className="max-w-lg space-y-3 px-4">
              <h2 className={` text-white text-3xl font-semibold sm:text-4xl`}>
                Drop Me a Line
              </h2>
              <p className={"text-gray-300"}>
                You can contact me directly using the form below, or connect through my preferred social platforms.
                I&apos;m excited to hear about your projects and explore the potential of working together. Let&apos;s make your ideas a reality!
              </p>

              <div className="flex flex-col">
                <div className="flex text-white hover:text-cyan-400 transition duration-200 group">
                  <Image alt="image" width={20} height={20} src={linkedin} className="me-1"/>:
                  <Link className="ms-2 group-hover:underline w-auto h-auto" href="https://www.linkedin.com/in/nika-ivanidze-152257165/">Nika Ivanidze</Link>
                </div>
                <div className="flex text-white hover:text-cyan-400 transition duration-200 group">
                  <Image alt="image" width={20} height={20} src={email} className="me-1"/>:
                  <Link className="ms-2 group-hover:underline w-auto h-auto" href = "mailto: n.ivanidze01@gmail.com">n.ivanidze01@gmail.com</Link>
                </div>
              </div>
            </motion.div>
            <motion.div variants={childrenVariant} className=" mt-4 lg:mt-0 w-full p-4 bg-gray-900 sm:max-w-lg sm:px-4 sm:rounded-xl flex-1 lg:max-w-xl">  
            <Image alt="image" width={600} height={600}  className="rounded" src={Contact4}/>            
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
}

export default Contact;