import Banner from "@/components/Banner";
import StackSection from "@/components/StackSection";
import { getTechStacks } from "@/sanity/lib/fetchTechStack";


export default async function TechStack() {
  const techStacks = await getTechStacks();

  return (
    <div className="stack">
      <main>
        <Banner title="Tech Stack" para="The dev tools, apps, devices, and games I use and play." />
        {techStacks.map((section)=>(
          <StackSection key={section._id} title={section.title} stacks={section.stacks ?? []} />
        ))}
      </main>
    </div>
  );
}