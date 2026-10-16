"use client";

import Banner from "@/components/Banner";
import WorkCard from "@/components/WorkCard";


import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const images = {
    logoDark: "/DarkModeImages/LogoDark.png",
    logoLight: "/LightModeImages/LogoLight.png",
    memoji: "/My-Memoji.png",
    f1Logo: "/f1Logo.png",
    f1Dashboard: "/F1Dashboard.png",
    railwayLogo: "/indian-railways-logo.png",
    pnrMonitor: "/PNRMonitor.png",
  }

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="projects">
      <main>
        <Banner title="Projects" para="Projects and ideas I’ve worked on" />
        <WorkCard
          src1={theme === "dark" ? images.logoDark : images.logoLight}
          title="This Portfolio"
          description="Designed and developed a responsive modern portfolio website showcasing my skills, projects, and professional journey as a web developer with clean UI/UX principles, engaging project presentation, and strong personal branding, currently under active migration to Next.js for improved performance and scalability."
          linktext="Visit Site"
          href="/"
          src2={images.memoji}
        ></WorkCard>
        <WorkCard
          src1={images.f1Logo}
          title="F1 Dashboard"
          description="Built a real-time Formula One dashboard using Next.js and FastAPI with live telemetry, leaderboards, session commentary, and driver standings powered by FastF1 and OpenF1 APIs in a responsive dark-mode interface."
          linktext="Visit Site"
          href="https://f1-dashboard-sp.vercel.app/"
          src2={images.f1Dashboard}
        ></WorkCard>
        <WorkCard
          src1={images.railwayLogo}
          title="PNR Monitoring Web App"
          description="Developed a Next.js-based PNR tracking application with automated status monitoring, real-time railway API integration, and WhatsApp notifications using Twilio APIs to streamline travel tracking and eliminate manual status checks. This project is under active development."
          linktext="Visit Site"
          href="/"
          src2={images.pnrMonitor}
        ></WorkCard>
      </main>
    </div>
  );
}