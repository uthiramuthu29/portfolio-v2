import Banner from "@/components/Banner";
import ProjectsList from "@/components/ProjectsList";

export default function Projects() {
  return (
    <div className="projects">
      <main>
        <Banner title="Projects" para="Projects and ideas I’ve worked on" />
        <ProjectsList />
      </main>
    </div>
  );
}