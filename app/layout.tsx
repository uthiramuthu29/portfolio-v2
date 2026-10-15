import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Uthira Muthu S P | Frontend Developer",
  description:
    "Portfolio showcasing my frontend development skills, projects, and experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`min-h-full antialiased`}>
      <body className="flex flex-col  min-h-full bg-[url('/TypeHeaderGradient.png'),url('/TypeFooterGradient.png')] bg-position-[top,bottom] bg-no-repeat font-inter bg-[#FBFBFB] dark:bg-[#0d0d0d]">
        <ThemeProvider>
          <main className="px-4 lg:px-0 lg:max-w-5xl lg:mx-auto pt-0! lg:w-full flex flex-col flex-1 ">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
