"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import {motion, Variants} from "framer-motion";
import { MouseEventHandler, useState } from "react";

import arcton from "../../../public/projects/arcton.png";
import bene from "../../../public/projects/bene.png";
import cmtv from "../../../public/projects/cmtv.png";
import dev from "../../../public/projects/dev.png";
import electron from "../../../public/projects/electron.png";
import kairos from "../../../public/projects/kairos.png";
import kani from "../../../public/projects/kani.png";
import natural from "../../../public/projects/natural.png";
import nemera from "../../../public/projects/nemera.png";
import tlc from "../../../public/projects/tlc.png";
import spec from "../../../public/projects/spec.png";

import weather from "../../../public/personal/weather.png";
import calculator from "../../../public/personal/calculator.png";
import list from "../../../public/personal/list.png";
import rock from "../../../public/personal/rock.png";
import { Permanent_Marker, Rubik_Glitch } from 'next/font/google';

const rubik = Rubik_Glitch({
  subsets: ['latin'],
  weight: ['400']
});

const marker = Permanent_Marker({
    subsets: ['latin'],
    weight: ['400']
  });

const Projects = () => {

    const [visibility1, setVisibility1] = useState(true);
    const [visibility2, setVisibility2] = useState(false);

    const toggleVisibility: MouseEventHandler<HTMLParagraphElement> = (event) => {
        const divNumber = Number(event.currentTarget.dataset.divnumber);
        if (divNumber === 1) {
          setVisibility1(true);
          setVisibility2(false);
        } else {
          setVisibility1(false);
          setVisibility2(true);
        }
      };

    const parentVariant : Variants = {
        initial: {opacity: 0},
        animate: { opacity: 1, transition: { staggerChildren: 0.4 } },
    }

    const childrenVariant: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: {
            duration: 1,
        } },
      };

    const projects = [
        {title: "Bene-Exclusive", href: "https://www.bene-exclusive.com/", image: bene},
        {title: "Kairos", href: "https://www.kairos.com/", image: kairos},
        {title: "Spec-Komfort", href: "https://speckomforti.ge/", image: spec},
        {title: "Tlc", href: "https://tlc.com.ge/", image: tlc},
        {title: "Electron", href: "https://eleqtroni.ge/en/home", image: electron},
        {title: "Georgias Natural", href: "https://georgiasnatural.com/ge/intro", image: natural},
        {title: "Kani", href: "https://kani.ge/", image: kani},
        {title: "nemera", href: "https://nemera.ge/", image: nemera},
        {title: "CMTV", href:"https://cmtv.edu.ge/en/home", image:cmtv},
        {title: "Devware Solutions", href: "https://www.devwaresolutions.com/", image: dev},
        {title: "Arcton", href: "https://www.arcton.com/", image: arcton},
    ];

    const personal = [
        {title: "React Calculator", href: "https://github.com/kn000x001/React-Calculator", image: calculator},
        {title: "Weather App", href: "https://github.com/kn000x001/weather-app", image: weather},
        {title: "Rock Papaer Scissors", href: "https://github.com/kn000x001/Rock-Papaer-Scissors", image: rock},
        {title: "Dynamic List with Filter", href: "https://github.com/kn000x001/List-of-Users-and-Games-with-filter-function", image: list},
    ];

    return (
        <div className="w-full py-20 px-12 bg-gray-900">
            <h1 className={`${rubik.className} text-3xl text-center font-bold mb-4 text-cyan-400`}>
                Projects
            </h1>
            <div className="flex justify-center my-4">
                <h2 onClick={toggleVisibility} data-divnumber={1} className={`${marker.className} text-2xl cursor-pointer hover:text-cyan-400 transition duration-200 p-4 hover:underline text-white font-bold`}>
                    Live Projects
                </h2>
                <h2 onClick={toggleVisibility} data-divnumber={2} className={`${marker.className} text-2xl cursor-pointer hover:text-cyan-400 transition duration-200 p-4 hover:underline text-white font-bold`}>
                    Personal Projects
                </h2>
            </div>
            <motion.div initial="initial" animate="animate" variants={parentVariant} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-3`}>
                {visibility1 &&(
                    <>
                        {projects.map((mi, i) => {
                            return (
                                <Link key={i} href={mi.href} className="group flex flex-col m-3 text-white hover:text-cyan-400 justify-center items-center transition duration-200">
                                    <motion.div
                                        key={mi.title}
                                        id={mi.title}
                                        className="flex flex-col justify-center items-center" 
                                        variants={childrenVariant}
                                        >
                                        <Image alt="project image" max-width={500} max-height={500}  className="rounded-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/50 w-100 h-auto group-hover:font-bold transition duration-200 " src={mi.image}></Image>
                                        <div className={`transition duration-0  text-xl font-bold `}>
                                        <h2 className={`mt-2`}>{mi.title}</h2>
                                        </div>
                                    </motion.div>
        
                                </Link>
                            )
                        })}
                    </>
                )}
                
                

                {visibility2 && (
                    <>
                        {personal.map((mi, i) => {
                            return (
                                <Link key={i} href={mi.href} className="group flex flex-col text-white hover:text-cyan-400 justify-center items-center transition duration-200">
                                    <motion.div
                                        key={mi.title}
                                        id={mi.title}
                                        className="flex flex-col justify-center items-center" 
                                        variants={childrenVariant}
                                        >
                                        <Image alt="project image" max-width={500} max-height={500}  className="rounded-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/50 w-100 h-auto group-hover:font-bold transition duration-200 " src={mi.image}></Image>
                                        <div className={`transition duration-0  text-xl font-bold `}>
                                        <h2 className={`mt-2`}>{mi.title}</h2>
                                        </div>
                                    </motion.div>

                                </Link>
                            )
                        })}
                    </>
                )}
                
            </motion.div>
        </div>
    )
}

export default Projects;




