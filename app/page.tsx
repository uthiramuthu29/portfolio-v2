import Intro from "@/components/Intro";
import ProjectsList from "@/components/ProjectsList";
import Knowme from "@/components/Knowme";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <div className="home">
      <main>
        <Intro />
        <ProjectsList title="Selected Work" featuredOnly={true} />
        <Knowme />
        <WorkTogether />
      </main>
    </div>
  );
}
