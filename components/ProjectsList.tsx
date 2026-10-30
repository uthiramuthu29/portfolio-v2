import WorkCard from "./WorkCard";
import { getProjects } from "@/sanity/lib/fetchProjects";

export default async function ProjectsList({ title } : { title?: string }) {
  const projects = await getProjects();

  return (
    <>
      <div className="selected-work ">
        <h2 className="text-[#181818] dark:text-white text-[32px] lg:text-[48px] font-bold mb-8 ">
          {title}
        </h2>
        {projects.map((project) => (
          <WorkCard
            key={project._id}
            darkLogo={project.darkLogo}
            lightLogo={project.lightLogo}
            title={project.title}
            description={project.description ?? ""}
            linktext="Visit Site"
            href={project.projectUrl ?? "/"}
            previewImage={project.image}
          />
        ))}
      </div>
    </>
  );
}
