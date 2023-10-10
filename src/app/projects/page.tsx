import { projects } from "@/data/projects";
import ProjectCard from "@/screens/Projects/ProjectCard";

export default function AllProjects() {
  return (
    <div className="min-h-screen p-10 md:p-40 bg-gradient-0 relative">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Filter by</h1>
      </div>
      <div className="flex flex-wrap -m-4 relative">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}
