import Link from 'next/link'
import Image from 'next/image';

export default function WorkTogether() {
  return (
    <div className="work-together pb-28.5 ">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="left">
          <h2 className="text-[#181818] dark:text-white text-[32px] lg:text-[48px] text-center lg:text-left font-bold mb-2 ">Let’s work together</h2>
          <p className="text-[#808080] text-[15px] lg:text-[20px] text-center lg:text-left mb-8.5 lg:mb-0 font-normal">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>
        <div className="right lg:justify-self-end">
          <Link href="/contact" className="text-white text-[18px] text-center font-medium bg-[#131313] dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] flex gap-2 px-8 py-4.5 rounded-[9px] justify-center lg:max-w-50 ">
            <Image width={20} height={20} src="/Send.svg" alt="Send" />
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
