import Banner from "@/components/Banner";
import StackSection from "@/components/StackSection";

import { devDesignStacks, documentationDashboarding, apps } from "@/internal-data/TechStackData";


export default function TechStack() {
  return (
    <div className="stack">
      <main>
        <Banner title="Tech Stack" para="The dev tools, apps, devices, and games I use and play." />
        <StackSection title="Dev & Design" stacks={devDesignStacks} />
        <StackSection title="Documentation & Dashboarding" stacks={documentationDashboarding} />
        <StackSection title="Apps" stacks={apps} />
      </main>
    </div>
  );
}