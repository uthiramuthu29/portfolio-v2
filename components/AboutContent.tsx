"use client"

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

type AboutContentProps = {
  title: string,
  children: React.ReactNode
}

function Content({ title, children }: AboutContentProps) {
  return (
    <>
      <h2 className="text-[16px] text-[#181818] dark:text-[#808080] font-semibold uppercase mb-2 ">
        {title}
      </h2>
      <p className="text-[15px] lg:text-[18px] text-[#808080] font-normal mb-8 ">
        {children}
      </p>
    </>
  );
}

const images = {
  signatureLight: "/LightModeImages/SignatureLight.png",
  signatureDark: "/DarkModeImages/SignatureDark.png",
  memoji: "/memoji.png",
  send: "/send.svg",
  india: "/india.png",
};

export default function AboutContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="about-content pb-22">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="left order-2 lg:order-0 col-span-7">
            <Content title="Who I am">
              I’m{" "}
              <span className="text-[#808080] dark:text-white">
                Uthira Muthu
              </span>{" "}
              (Pronounced “U-thi-ra Mu-thu”) a multi-disciplinary front-end
              developer based in Chennai, Tamil Nadu, India{" "}
              <Image
                className="w-full inline"
                width={18}
                height={18}
                src={images.india}
                alt="India"
              />
              .
            </Content>
            <Content title="What I Do">
              With two years of invaluable experience in my role at Unique Force
              Technology Solutions –– a tech company based here in Chennai, I
              have honed my skills in React.js, TailwindCSS, jQuery, HTML, CSS,
              Bootstrap and Sass, allowing me to craft seamless and interactive
              user experiences. During my time at Unique Force Technology
              Solutions, I had the privilege of collaborating on projects for
              esteemed clients such as the Bausch Health, Bausch & Lomb, Salix
              Pharmaceuticals and Ortho Dermatologics. It was an incredibly
              rewarding experience to develop applications that directly impact
              the lives of people.
            </Content>
            <Content title="What I Did">
              Before delving into the realm of front end development, I spent
              four years pursuing my Engineering Degree at Panimalar Engineering
              College, Chennai. This background has equipped me with a keen eye
              for problem solving.
            </Content>
            <p className="text-[15px] lg:text-[18px] text-[#808080] font-normal mt-7 mb-15 ">
              Feel free to reach out via{" "}
              <a
                className="text-[#181818] dark:text-white underline"
                href="mailto:uthiramuthusp29@gmail.com"
              >
                e-mail
              </a>
              , or follow me on{" "}
              <a
                className="text-[#181818] dark:text-white underline"
                href="https://www.instagram.com/_._.blood_pearl._._/"
              >
                Instagram
              </a>
              . Want to see where I’ve worked? Check out my{" "}
              <a
                className="text-[#181818] dark:text-white underline"
                href="/files/UthiraMuthuResume.pdf"
              >
                Resume
              </a>
              , or Connect with me on
              <a
                className="text-[#181818] dark:text-white underline"
                href="https://www.linkedin.com/in/s-p-uthira-muthu-6bb287197"
              >
                {" "}
                LinkedIn
              </a>
              .
            </p>
            <p className="text-[15px] lg:text-[18px] text-[#808080] font-normal mb-4 ">
              Let’s build something great,
            </p>
            <Image
              className="max-w-full"
              width={326}
              height={80}
              src={
                theme === "dark" ? images.signatureDark : images.signatureLight
              }
              alt="Signature"
            />
            <div className="get-in-touch block lg:hidden">
              <Link
                className="text-[18px] text-white font-medium w-full dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] flex justify-center items-center gap-2 lg:max-w-50 py-5 mt-25 rounded-[9px] bg-[#181818]  "
                href="/contact"
              >
                <Image width={20} height={20} src={images.send} alt="Send" />
                Get in touch
              </Link>
            </div>
          </div>
          <div className="right mb-16 col-span-5">
            <Image
              className="mx-auto max-w-full"
              width={200}
              height={100}
              src={images.memoji}
              alt="Memoji"
            />
            <div className="get-in-touch hidden lg:block">
              <Link
                className="text-[18px] text-white font-medium mx-auto dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] flex justify-center items-center gap-2 max-w-50 py-5 mt-25 rounded-[9px] bg-[#181818]  "
                href="/contact"
              >
                <Image width={20} height={20} src={images.send} alt="Send" />
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
