"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import Image from "next/image";

const logoDark = "/DarkModeImages/LogoDark.png";
const logoLight = "/LightModeImages/LogoLight.png";

export default function Footer() {

  const { theme } = useContext(ThemeContext);

  const navLinksOne = [
    { text: "About", link: "/about" },
    { text: "Work", link: "/work" },
    { text: "Contact", link: "/contact" },
    { text: "Tech Stack", link: "/stack" },
    { text: "Bookshelf", link: "/contact" },
  ];

  const navLinksTwo = [
    { text: "Email", link: "mailto:uthiramuthusp29@gmail.com" },
    { text: "LinkedIn", link: "https://www.linkedin.com/in/s-p-uthira-muthu-6bb287197" },
    { text: "GitHub", link: "https://github.com/uthiramuthu29" },
    { text: "Whatsapp", link: "https://wa.me/9442152434" },
    { text: "Instagram", link: "https://www.instagram.com/_._.blood_pearl._._/" },
  ];

  return (
    <>
      <div className="footer border-t border-[rgba(0,0,0,0.1)] dark:border-t-[rgba(255,255,255,0.1)] pb-27 lg:pb-10.25 pt-18.5 ">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="left flex flex-col col-span-1 mt-8 lg:mt-0 lg:col-span-4 order-2 lg:order-0">
            <Image width={92} height={92} className="max-w-full mb-4 " src={theme === "dark" ? logoDark : logoLight} alt="Logo" />
            <p className="text-[14px] text-[#181818] dark:text-[#808080] font-medium mb-12 lg:mb-0 ">Thanks for stopping by ッ</p>
            <p className="text-[14px] text-[#181818] dark:text-[#808080] font-medium mt-auto ">© 2025 Uthira Muthu. All Rights Reserved.</p>
          </div>
          <div className="right col-span-1 lg:col-span-4 lg:col-start-9">
            <div className="footer-links flex flex-col-reverse lg:flex-row justify-around">
              <ul>
                <li className="text-[16px] text-[#181818] dark:text-white font-bold mb-8 ">
                  <p>Links</p>
                </li>
                {navLinksOne.map((item, index) => {
                  return <li className="text-[16px] text-[#181818] dark:text-[#C5C5C5] font-normal mb-4 " key={index}><a href={item.link}>{item.text}</a></li>;
                })}
              </ul>
              <ul>
                <li className="text-[16px] text-[#181818] dark:text-white font-bold mb-8 ">
                  <p>Elsewhere</p>
                </li>
                {navLinksTwo.map((item, index) => {
                  return <li className="text-[16px] text-[#181818] dark:text-[#C5C5C5] font-normal mb-4 " key={index}><a href={item.link}>{item.text}</a></li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
