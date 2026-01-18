"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Project, ProjectCategory } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

interface ProjectListProps {
    initialProjects: Project[];
    locale: string;
}

export default function ProjectList({ initialProjects, locale }: ProjectListProps) {
    const t = useTranslations('Navigation');
    const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

    const categories: (ProjectCategory | 'All')[] = ['All', 'Infrastructure', 'Energy', 'Technology', 'Real Estate'];

    const filteredProjects = filter === 'All'
        ? initialProjects
        : initialProjects.filter(p => p.category === filter);

    return (
        <>
            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                ? 'bg-agency-navy text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} locale={locale} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No projects found in this category.
                </div>
            )}
        </>
    );
}
