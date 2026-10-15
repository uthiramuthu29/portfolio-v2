type BannerProps = {
    title: string,
    para: string
}

export default function Banner({ title , para }: BannerProps){
    return(
        <>
        <div className="banner border-b border-b-[rgba(255,255,255,0.1)] pb-16 mb-15">
            <h1 className="text-[48px] leading-[100%] mb-2 lg:text-[80px] text-[#181818] dark:text-white font-bold ">{title}</h1>
            <p className="text-[16px] lg:text-[24px] text-[#808080]  ">{para}</p>
        </div>
        </>
    );
}