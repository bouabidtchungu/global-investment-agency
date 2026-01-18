import Image from 'next/image';


export default function SectorBentoGrid() {
    // We'll mock the translations for the structure here, but rely on useTranslations in production. 
    // Ideally, these keys should exist in the messages file.
    // For now I will assume generic keys or hardcode structure to demonstrate layout.

    const sectors = [
        {
            id: 'infrastructure',
            title: 'Infrastructure',
            image: '/images/infrastructure-port.png',
            colSpan: 'lg:col-span-2',
            rowSpan: 'lg:row-span-2',
        },
        {
            id: 'aviation',
            title: 'Aviation & Airports',
            image: '/images/infrastructure-airport.png',
            colSpan: 'lg:col-span-1',
            rowSpan: 'lg:row-span-1',
        },
        {
            id: 'energy',
            title: 'Renewable Energy',
            image: '/images/renewable-energy-solar.png',
            colSpan: 'lg:col-span-1',
            rowSpan: 'lg:row-span-1',
        },
        {
            id: 'smart-cities',
            title: 'Smart Cities',
            image: '/images/smart-city-infrastructure.png',
            colSpan: 'lg:col-span-2',
            rowSpan: 'lg:row-span-1',
        },
    ];

    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-agency-gold font-bold text-sm tracking-widest uppercase mb-4">
                        Our Expertise
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-agency-navy mb-6">
                        Sectors of Strategic Impact
                    </h3>
                    <div className="w-24 h-1 bg-agency-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-6 h-auto lg:h-[800px]">
                    {sectors.map((sector, index) => (
                        <div
                            key={sector.id}
                            className={`relative group overflow-hidden rounded-xl shadow-lg border border-white/10 ${sector.colSpan} ${sector.rowSpan}`}
                        >
                            <Image
                                src={sector.image}
                                alt={sector.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h4 className="text-2xl font-bold text-white mb-2 font-serif group-hover:text-agency-gold transition-colors">
                                    {sector.title}
                                </h4>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                    <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        Driving substantial growth through strategic capital allocation in {sector.title.toLowerCase()}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
