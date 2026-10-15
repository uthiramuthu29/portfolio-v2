import Image from 'next/image'

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext.jsx";

const images = {
    rightWhiteArrow : "/ArrowRightDark.png",
    rightBlackArrow : "/ArrowRightLight.png"
}

type WorkCardProps = {
    src1: string,
    src2: string,
    title: string,
    description: string,
    linktext: string,
    href: string
}

export default function WorkCard({ src1, src2, title, description, linktext, href }: WorkCardProps){
    const { theme } = useContext(ThemeContext);
    return(
        <>
        <div className="grid grid-flow-col bg-[#F6F6F6] dark:bg-[#181818] border-[#EBEBEB] dark:border-[#383737] rounded-4xl mb-8 ">
            <div className="left py-8 px-6 lg:py-15 lg:pl-15 flex flex-col">
                <Image className='max-w-full mb-4 ' width={70} height={70} src={src1} alt="Project Logo" />
                <h3 className='text-[20px] lg:text-[32px] text-[#181818] dark:text-white font-extrabold mb-4 '>{title}</h3>
                <p className='text-[15px] lg:text-[16px] text-[#808080] font-normal mb-4 '>{description}</p>
                <a className='text-[18px] text-[#181818] dark:text-white font-medium flex items-center gap-3 lg:mt-auto' href={href} target='_blank' >{linktext} <Image width={18} height={12} src={theme === "dark" ? images.rightWhiteArrow : images.rightBlackArrow} alt="rightwhitearrow"/></a>
            </div>
            <div className="right hidden lg:flex items-center">
                <Image className='max-w-full' width={457} height={457} src={src2} alt="Project Image" />
            </div>
        </div>
        </>
    );
}