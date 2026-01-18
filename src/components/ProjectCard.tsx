import Image from 'next/image';
import { Project } from '@/data/projects';
import { Link } from '@/i18n/routing';

interface ProjectCardProps {
    project: Project;
    locale: string;
}

export default function ProjectCard({ project, locale }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.id}`} className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-agency-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-agency-navy mb-1 group-hover:text-agency-gold transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                {project.location}
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-2 text-sm flex-1">
                        {project.description}
                    </p>

                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                        <div>
                            <div className="text-xs text-gray-400 uppercase">Value</div>
                            <div className="font-bold text-agency-navy">{project.value}</div>
                        </div>
                        <span className="text-agency-gold text-sm font-medium group-hover:underline">
                            View Details &rarr;
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
