import AboutContent from "@/components/AboutContent";
import Banner from "@/components/Banner";

export default function About() {
  return (
    <div className="about">
      <main>
        <Banner title="A little bit about me" para="Who I am and what I do." />
        <AboutContent />
      </main>
    </div>
  );
}