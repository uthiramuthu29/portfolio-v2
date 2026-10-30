import Intro from "@/components/Intro";
import ProjectsList from "@/components/ProjectsList";
import Knowme from "@/components/Knowme";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <div className="home">
      <main>
        <Intro />
        <ProjectsList title="Selected Work" />
        <Knowme />
        <WorkTogether />
      </main>
    </div>
  );
}

// import { getProjects } from "@/sanity/lib/fetchProjects";

// export const instant = false;

// export default async function Home() {
//   const projects = await getProjects();

//   return (
//     <main>
//       <h1>Sanity Projects</h1>

//       {projects.map((project) => (
//         <article key={project._id}>
//           <h2>{project.title}</h2>
//           <p>{project.description}</p>

//           <ul>
//             {project.technologies?.map((tech) => (
//               <li key={tech}>{tech}</li>
//             ))}
//           </ul>
//         </article>
//       ))}
//     </main>
//   );
// }
