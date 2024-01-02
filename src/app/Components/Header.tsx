"use client";

import Image from "next/image";
import logo from "../../../public/logo.png"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Hamburger } from "./hamburger";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const togleScrallOnMain = (forceRemove = false) => {
    if (forceRemove) {
      document.body.classList.remove("overflow-hidden");
      return;
    }
    document.body.classList.toggle("overflow-hidden");
  };


const menuItems = [
    {title: "About", href: "/about"},
    {title: "Projects", href: "/projects"},
    {title: "Contact", href: "/contact"},
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    
  
    const toggleMenu = () => {
      togleScrallOnMain();
      setMenuOpen(!menuOpen);
    };
  
    useEffect(() => {
      togleScrallOnMain(true);
      setMenuOpen(false);
    }, [pathname]);

    
    return (
    <header className="w-full bg-gradient-to-l from-slate-800 via-gray-900 to-black border-b-2 border-white fixed">
        <nav className={clsx({"border-b border-solid": !menuOpen },
        `py-4 flex justify-between px-12 items-center`)}>
            <Link href="/">
                <div>
                    <Image  
                        priority={true}
                        quality={100}
                        alt="personal logo"
                        width={50}
                        height={50}
                        src={logo}/>
                </div>
            </Link>
            
            <div className="lg:hidden transition ease-in-out duration-500 transform">
                <Hamburger onClick={toggleMenu} menuOpen={menuOpen} />
            </div>


            <div className={`${styles.navCtr}  hidden lg:flex p-0 space-x-8 flex-row items-center relative h-full flex-grow text-[#fff]  justify-end text-[1rem]`}>
                {
                    menuItems.map((mi, i) => {
                      const isActive = usePathname() === mi.href;
                        return (
                            <Link key={i} href={mi.href} className={` ${
                              isActive ? 'pb-2 text-[#22D3EE] border-b-2 border-[#22D3EE]' : ''
                            }`}>
                                {mi.title}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>

        <div
        className={clsx(
          "fixed min-h-full w-full bg-gradient-to-l from-slate-800 via-gray-900 to-black flex flex-col  z-1000 lg:hidden transition-transform duration-500",
          { "translate-x-0": menuOpen, "translate-x-full": !menuOpen }
        )}
      >
        <div className="px-12 flex flex-col py-3 gap-8">
          {menuItems.map((mi, i) => {
            const isActive = usePathname() === mi.href;
            return (
              <Link
                key={i}
                href={mi.href}
                className={` ${
                  isActive ? 'pb-2 text-[#22D3EE] border-b-2' : 'pb-2 text-[#FFFFFF] border-b border-solid border-[#fff]'
                }`}
              >
                {mi.title}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
    )
}

export default Header;