
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import linkedin from "../../../public/images/linkedin.svg";
import email from "../../../public/images/email.svg";
import github from "../../../public/images/github.svg"

export default function Footer() {

  const footerNavs = [
    {title: "Home", href: "/"},
    {title: "About", href: "/about"},
    {title: "Projects", href: "/projects"},
    {title: "Contact", href: "/contact"},
  ]

  return (
      <footer className="border-t-2 border-white bg-gradient-to-l from-slate-800 via-gray-900 to-black text-white py-5 px-12">
        <div className="gap-4 justify-start md:justify-between flex">
          <div className="">
            <div className="">
              <Link href="/">
                <Image
                     priority={true}
                     quality={100}
                     alt="personal logo"
                     width={150}
                     height={150}
                     src={logo}
                     className="roudned-xl"
                ></Image>
              </Link>
            </div>

          </div>
          <div className="flex flex-col md:flex-row md:mt-10 items-start md:items-center md:space-x-10 justify-between md:space-y-0 ">
            {
              footerNavs.map((item, idx) => (
                  <ul
                      className="space-y-2"
                      key={idx}
                  >
                    <Link href={item.href}>
                        <h4 className="text-white font-medium hover:border-b-2 hover:text-[#22D3EE] hover:border-[#22D3EE] transition duration-200 text-[1rem]" >
                        { item.title }
                        </h4>
                    </Link>

                  </ul>
              ))
            }
          </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0 text-white">
            &copy; 2024 Nika Ivanidze All rights reserved.
          </div>

          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:border-cyan-500 transition duration-200"> 
                  <Link className="ms-2 group-hover:underline w-auto h-auto" href="https://www.linkedin.com/in/nika-ivanidze-152257165/">
                      <Image alt="image" width={20} height={20} src={linkedin} className="me-2"/>
                  </Link>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:border-cyan-500 transition duration-200">
                <Link className="ms-2 group-hover:underline w-auto h-auto" href = "mailto: n.ivanidze01@gmail.com">
                    <Image alt="image" width={20} height={20} src={email} className="me-2"/>
                </Link>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:border-cyan-500 transition duration-200">
                <Link className="ms-2 group-hover:underline w-auto h-auto" href="https://github.com/kn000x001">
                    <Image alt="image" width={20} height={20} src={github} className="me-2"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </footer>
  )
}
