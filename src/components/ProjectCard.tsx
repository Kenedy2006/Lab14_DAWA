import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";
import type { FC } from "react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        
        {/* Image Container (Lazy Loading) */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}

            {project.technologies.length > 3 && (
              <span className="text-sm text-gray-700 px-2 py-1 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
