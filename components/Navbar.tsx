"use client"

const logoDark = "/DarkModeImages/LogoDark.png";
const logoLight = "/LightModeImages/LogoLight.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";

import { HiHome, HiOutlineBriefcase } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { PiBooksLight } from "react-icons/pi";


import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const mobileIcons =[
    {icon : <HiHome size={24} />, link : '/' },
    {icon : <CiUser size={24} />, link : '/about' },
    {icon : <HiOutlineBriefcase size={24} />, link : '/work' },
    {icon : <IoIosMail size={24} />, link : '/contact' },
    {icon : <TiThMenuOutline size={24} />, link : '/stack' },
    {icon : <PiBooksLight size={24} />, link : '/books' },
  ]

  return (
    <div className="header">
      <nav className="fixed w-full max-w-5xl lg:flex hidden justify-between rounded-xl px-4 pt-4 mt-7 bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(24,24,29,0.3)] border border-[rgba(255,255,255,0.25)] dark:border-[rgba(94,94,94,0.38)]">
        <div className="main-nav flex gap-10">
          <div className="logo">
            <Link href="/">
              <Image width={40} height={40}
                className="w-full"
                src={theme === "dark" ? logoDark : logoLight}
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="flex gap-10">
            <li className="text-[#181818] dark:text-[#C5C5C5] text-[16px] font-medium pb-4">
              <Link href="/about">About</Link>
            </li>
            <li className="text-[#181818] dark:text-[#C5C5C5] text-[16px] font-medium pb-4">
              <Link href="/work">Work</Link>
            </li>
            <li className="text-[#181818] dark:text-[#C5C5C5] text-[16px] font-medium pb-4">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-[#181818] dark:text-[#C5C5C5] text-[16px] font-medium flex items-center gap-1 group relative pb-4">
              More
              <FaAngleDown size={14} className="absolute top-1.5 -right-4.5 "/>
              <ul className="sub-nav bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(24,24,29,0.6)] absolute top-10 -left-17 rounded-b-xl w-33 px-6 py-4 invisible group-hover:visible">
                <li className="mb-4 ">
                  <Link href="/books">Bookshelf</Link>
                </li>
                <li>
                  <Link href="/stack">Tech Stack</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="social-nav">
          <ul className="flex gap-6">
            <li>
              <a href="https://www.linkedin.com/in/s-p-uthira-muthu-6bb287197" target="_blank">
                <FaLinkedin className="w-5.5 h-5.5 text-[#5D5751] dark:text-[#C3BDB8]" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_._.blood_pearl._._/" target="_blank">
                <GrInstagram className="w-5.5 h-5.5  text-[#5D5751] dark:text-[#C3BDB8]" />
              </a>
            </li>
            <li>
              <a href="https://github.com/uthiramuthu29" target="_blank">
                <FaGithub className="w-5.5 h-5.5  text-[#5D5751] dark:text-[#C3BDB8]" />
              </a>
            </li>
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FiSun className="w-5.5 h-6 text-[#C3BDB8] cursor-pointer" />
                ) : (
                  <FiMoon className="w-5.5 h-6 text-[#5D5751] cursor-pointer" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="logo bg-[rgba(255,255,255,0.1)] fixed w-auto left-4 right-4 py-2.5 rounded-xl mt-8 block lg:hidden">
        <Link href="/">
              <Image width={46} height={46}
                className="w-full mx-auto"
                src={theme === "dark" ? logoDark : logoLight}
                alt="Logo"
              />
            </Link>
      </div>
      <nav className="fixed bottom-4 w-auto left-4 right-4 block lg:hidden bg-[rgba(24,24,29,0.3)] dark:bg-[rgba(24,24,29,0.6)] border border-[rgba(39,38,44,0.3)] dark:border-[rgba(39,38,44,0.38)] rounded-xl  ">
        <ul className="flex justify-between px-4 py-2.5 ">
          {mobileIcons.map((item, index) => {
             return <li key={index} className="text-[#F3F3F3]  "><Link className="block px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.1)]" href={item.link}>{item.icon}</Link></li>
          })}          
        </ul>
      </nav>
    </div>
  );
}
