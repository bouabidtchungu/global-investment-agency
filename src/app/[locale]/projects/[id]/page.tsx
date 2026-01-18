import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Link } from '@/i18n/routing';
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({
    params
}: {
    params: Promise<{ id: string; locale: string }>;
}) {
    const { id, locale } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    const t = await getTranslations({ locale, namespace: 'Navigation' });

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero / Header Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agency-navy/90 via-agency-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                    <div className="container mx-auto">
                        <span className="inline-block bg-agency-gold text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
                        <div className="flex flex-wrap gap-6 text-lg text-gray-200">
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                {project.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                {project.value}
                            </span>
                            <span className={`px-3 py-0.5 rounded-full text-sm border ${project.status === 'Ongoing' ? 'border-green-400 text-green-400' : 'border-blue-400 text-blue-400'}`}>
                                {project.status}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <h2 className="text-2xl font-bold text-agency-navy">Project Overview</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {project.description}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="mt-8">
                        <Link href="/contact">
                            <Button size="lg" className="bg-agency-navy hover:bg-agency-charcoal">
                                Inquire About This Project
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl h-fit border border-gray-100">
                    <h3 className="text-lg font-bold text-agency-navy mb-6">Key Information</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-400 uppercase tracking-wide">Sector</label>
                            <div className="font-medium text-agency-charcoal">{project.category}</div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 uppercase tracking-wide">Location</label>
                            <div className="font-medium text-agency-charcoal">{project.location}</div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 uppercase tracking-wide">Investment Value</label>
                            <div className="font-medium text-agency-charcoal">{project.value}</div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-400 uppercase tracking-wide">Status</label>
                            <div className="font-medium text-agency-charcoal">{project.status}</div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-4">
                            Interested in similar projects?
                        </p>
                        <Link href="/projects" className="text-agency-gold font-bold hover:underline">
                            View All Projects &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
