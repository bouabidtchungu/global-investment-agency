import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
    const t = useTranslations('ProjectsPage');
    // Reusing project translations for the grid items
    const tProjects = useTranslations('Projects.items');

    const portfolio = [
        {
            id: 1,
            title: tProjects('bridge.title'),
            category: t('filter_infra'),
            image: "/images/infrastructure-port.png",
            size: "large"
        },
        {
            id: 2,
            title: tProjects('solar.title'),
            category: t('filter_energy'),
            image: "/images/renewable-energy-solar.png",
            size: "small"
        },
        {
            id: 3,
            title: tProjects('logistics.title'),
            category: t('filter_infra'),
            image: "/images/infrastructure-airport.png",
            size: "small"
        },
        {
            id: 4,
            title: "Smart City Grid",
            category: t('filter_tech'),
            image: "/images/smart-city-infrastructure.png",
            size: "large"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-agency-navy pt-32 pb-16 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">{t('title')}</h1>
                <p className="text-agency-gold text-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">{t('subtitle')}</p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {portfolio.map((item, index) => (
                        <div
                            key={item.id}
                            className={`relative group rounded-xl overflow-hidden shadow-lg cursor-pointer ${item.size === 'large' ? 'lg:col-span-2' : ''}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-agency-gold text-sm font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
