import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";


const contactData = [
    {icon : <IoIosMail size={28} />, link : "mailto:uthiramuthusp29@gmail.com"},
    {icon : <FaLinkedin size={28} />, link : "https://www.linkedin.com/in/s-p-uthira-muthu-6bb287197"},
    {icon : <FaGithub size={28} />, link : "https://github.com/uthiramuthu29"},
    {icon : <GrInstagram size={28} />, link : "https://www.instagram.com/_._.blood_pearl._._/"},
    {icon : <ImWhatsapp size={28} />, link : "https://wa.me/9442152434"},
    {icon : <PiMicrosoftTeamsLogoLight size={28} />, link : "https://teams.microsoft.com/l/chat/0/0?users=uthiramuthusp29@gmail.com"}
]

export default function ContactLinks() {
  return (
    <div className="mb-17">
      <ul className="flex justify-center gap-11 max-w-58 mx-auto flex-wrap lg:max-w-none lg:mx-0 lg:flex-nowrap ">
        {contactData.map((item, index) => {
            return <li key={index}><a className="text-[#181818] dark:text-[#B6B5B5]" href={item.link}>{item.icon}</a></li>
        })}
      </ul>
    </div>
  )
}
