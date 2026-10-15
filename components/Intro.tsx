import Image from 'next/image';
import Link from 'next/link';


export default function Intro() {
  return (
    <>
      <div className="intro mb-34 lg:mb-55">
        <div className="grid lg:grid-flow-col">
          <div className="left order-2 lg:order-0">
            <h1 className="text-[48px] lg:text-[80px] text-[#181818] dark:text-white font-extrabold  ">
              <span className="text-[#808080] lg:hidden block">Hi <Image className="mb-4 inline" src="/waving-hand.png" alt="Hand Wave" width={48} height={48} /></span>
              <span className="text-[#808080]">I’m</span> Uthira Muthu
            </h1>
            <p className="text-[15px] leading-5 lg:text-[24px] lg:leading-9 font-medium text-[#808080] mb-10">
              A frontend Developer specializing in building responsive,
              high-performance web applications with modern technologies.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 ">
              <Link
                className="text-[#181818] dark:text-[#808080] text-[18px] text-center font-medium bg-[#F3F3F3] dark:bg-[#181818] hover:bg-[linear-gradient(180deg,rgba(26,26,26,1)_0%,rgba(19,19,19,1)_100%)] hover:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] hover:text-white py-5 px-8 rounded-lg"
                href="/files/Uthira-Muthu-S-P-CV.pdf" target="_blank"
              >
                See my resume
              </Link>
              <Link
                className="text-[#181818] dark:text-[#808080] text-[18px] text-center font-medium bg-[#F3F3F3] dark:bg-[#181818] hover:bg-[linear-gradient(180deg,rgba(26,26,26,1)_0%,rgba(19,19,19,1)_100%)] hover:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] hover:text-white py-5 px-8 rounded-lg"
                href="/contact"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="right mb-12.5 lg:mb-0">
            <Image className="circle-img max-w-full mx-auto" width={250} height={250} src="/My-Memoji.png" alt="Memoji" />
          </div>
        </div>
      </div>
    </>
  );
}