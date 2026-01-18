"use client"
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function ProjectShowcase() {
    const t = useTranslations('Projects');

    // Mock data with translation accessors
    const projects = [
        {
            id: 1,
            title: t('items.bridge.title'),
            location: t('items.bridge.location'),
            category: t('items.bridge.category'),
            value: "$4.2 Billion",
            image: "/images/infrastructure-port.png",
            description: t('items.bridge.description')
        },
        {
            id: 2,
            title: t('items.solar.title'),
            location: t('items.solar.location'),
            category: t('items.solar.category'),
            value: "$12.5 Billion",
            image: "/images/renewable-energy-solar.png",
            description: t('items.solar.description')
        },
        {
            id: 3,
            title: t('items.logistics.title'),
            location: t('items.logistics.location'),
            category: t('items.logistics.category'),
            value: "$8.1 Billion",
            image: "/images/infrastructure-airport.png",
            description: t('items.logistics.description')
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section className="py-24 bg-agency-navy overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-agency-gold/5 blur-3xl rounded-full translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                    <div>
                        <h2 className="text-agency-gold font-bold text-sm tracking-widest uppercase mb-4">
                            {t('subtitle')}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
                            {t('title')}
                        </h3>
                    </div>
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <Button onClick={prevSlide} variant="outline" size="icon" className="h-12 w-12 rounded-full border-white/10 bg-white/5 hover:bg-agency-gold hover:text-white hover:border-agency-gold transition-colors rtl:rotate-180">
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button onClick={nextSlide} variant="outline" size="icon" className="h-12 w-12 rounded-full border-white/10 bg-white/5 hover:bg-agency-gold hover:text-white hover:border-agency-gold transition-colors rtl:rotate-180">
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Image Side */}
                        <div className="lg:col-span-8 relative h-[400px] md:h-[600px] rounded-r-2xl overflow-hidden -ml-4 lg:ml-0 shadow-2xl rtl:rounded-l-2xl rtl:rounded-r-none rtl:-mr-4 rtl:ml-0">
                            <div className="absolute inset-0 bg-black/20 z-10" />
                            <Image
                                key={projects[currentIndex].id}
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                fill
                                className="object-cover animate-in fade-in duration-700"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="lg:col-span-4 lg:-ml-24 z-20 relative rtl:lg:-mr-24 rtl:lg:ml-0">
                            <div key={projects[currentIndex].id} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 shadow-2xl animate-in fade-in slide-in-from-right-8 duration-500 rtl:slide-in-from-left-8">
                                <div className="text-agency-gold text-sm font-semibold tracking-wider uppercase mb-2">
                                    {projects[currentIndex].category} • {projects[currentIndex].location}
                                </div>
                                <h4 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">
                                    {projects[currentIndex].title}
                                </h4>
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    {projects[currentIndex].description}
                                </p>
                                <div className="border-t border-white/10 pt-6 mb-8">
                                    <span className="text-gray-400 text-sm block mb-1">{t('investment_value')}</span>
                                    <span className="text-2xl font-bold text-white">{projects[currentIndex].value}</span>
                                </div>
                                <Button className="w-full bg-agency-gold text-agency-navy hover:bg-white font-semibold py-6 text-lg transition-colors group">
                                    {t('view_details')}
                                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:rotate-45 transition-transform rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex gap-2 mt-8 justify-center lg:justify-start">
                        {projects.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-agency-gold' : 'w-4 bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
