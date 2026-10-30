import Banner from "@/components/Banner";
import AboutContent from "@/components/AboutContent";
import { getAboutSections } from "@/sanity/lib/fetchAboutSections";
import { getSocialLinks } from "@/sanity/lib/fetchSocialLinks";

export default async function About() {
  const about = await getAboutSections();
  const socialData = await getSocialLinks();

  console.log("SOCIAL DATA:", JSON.stringify(socialData, null, 2));


  return (
    <div className="about">
      <main>
        <Banner title="A little bit about me" para="Who I am and what I do." />
        <AboutContent about={about} socialData={socialData} />
      </main>
    </div>
  );
}
