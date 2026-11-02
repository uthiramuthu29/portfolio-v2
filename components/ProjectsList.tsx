import WorkCard from "./WorkCard";
import { getProjects } from "@/sanity/lib/fetchProjects";
import Link from "next/link";

type ProjectsListProps = {
  title?: string;
  featuredOnly?: boolean;
};

export default async function ProjectsList({
  title,
  featuredOnly = false,
}: ProjectsListProps) {
  const projects = await getProjects();

  const displayedProjects = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <>
      <div className="selected-work ">
        {title && (
          <h2 className="text-[#181818] dark:text-white text-[32px] lg:text-[48px] font-bold mb-8 ">
            {title}
          </h2>
        )}

        {displayedProjects.map((project) => (
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
        {featuredOnly && (
          <div className="flex justify-center mt-10">
            <Link
              className="text-[#181818] dark:text-[#808080] text-[18px] font-bold px-7 py-5 mb-8 bg-[#F3F3F3] dark:bg-[#181818] hover:bg-[linear-gradient(180deg,rgba(26,26,26,1)_0%,rgba(19,19,19,1)_100%)] hover:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] hover:text-white border-[#EBEBEB] dark:border-[#383737] rounded-xl "
              href="/projects"
            >
              View More
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
