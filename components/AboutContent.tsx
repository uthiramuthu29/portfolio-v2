"use client";

import type { SocialLinksData } from '@/sanity/lib/fetchSocialLinks';
import { getSocialUrls } from './utils';

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type AboutSection = {
  _key: string;
  subHeading: string;
  content: string;
};

type AboutData = {
  sections?: AboutSection[];
  signatureDark?: string | null;
  signatureLight?: string | null;
  photo?: string | null;
};

type AboutContentProps = {
  about: AboutData | null;
  socialData: SocialLinksData | null;
};

type ContentProps = {
  title: string;
  children: React.ReactNode;
};

const images = {
  signatureLight: "/LightModeImages/SignatureLight.png",
  signatureDark: "/DarkModeImages/SignatureDark.png",
  memoji: "/memoji.png",
  send: "/send.svg",
};

export function Content({ title, children }: ContentProps) {
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

export default function AboutContent({ about, socialData }:  AboutContentProps) {
  const { theme } = useContext(ThemeContext);

  const socialUrls = getSocialUrls(socialData);

  const cmsSignature =
    theme === "dark"
      ? about?.signatureDark || about?.signatureLight
      : about?.signatureLight || about?.signatureDark;

  const signature =
    cmsSignature ||
    (theme === "dark" ? images.signatureDark : images.signatureLight);

  const profilePhoto = about?.photo || images.memoji;

  return (
    <>
      <div className="about-content pb-22">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="left order-2 lg:order-0 col-span-7">
            {about?.sections?.length ? (
              about.sections.map((section) => (
                <Content key={section._key} title={section.subHeading}>
                  {section.content}
                </Content>
              ))
            ) : (
              <p className="text-[15px] lg:text-[18px] text-[#808080] mb-8">
                About content is not available yet.
              </p>
            )}
            
            <p className="text-[15px] lg:text-[18px] text-[#808080] font-normal mt-7 mb-15 ">
              Feel free to reach out via{" "}
              <a
                className="text-[#181818] dark:text-white underline"
                href={`mailto:${socialUrls.email}`}
              >
                e-mail
              </a>
              , or follow me on{" "}
              <a
                className="text-[#181818] dark:text-white underline"
                href={socialUrls.instagram}
              >
                Instagram
              </a>
              . Want to see where I’ve worked? Check out my{" "}
              <a
                className="text-[#181818] dark:text-white underline"
                href={socialUrls.resume}
                download
              >
                Resume
              </a>
              , or Connect with me on
              <a
                className="text-[#181818] dark:text-white underline"
                href={socialUrls.linkedin}
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
              src={signature}
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
              src={profilePhoto}
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
