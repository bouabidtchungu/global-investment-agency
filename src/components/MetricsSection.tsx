import { useTranslations } from 'next-intl';

export default function MetricsSection() {
    const t = useTranslations('Metrics');

    const metrics = [
        {
            id: 'invested',
            value: '$50B+',
            label: t('invested'),
            description: t('invested_desc')
        },
        {
            id: 'projects',
            value: '120+',
            label: t('projects'),
            description: t('projects_desc')
        },
        {
            id: 'partners',
            value: '35',
            label: t('partners'),
            description: t('partners_desc')
        },
        {
            id: 'sustainability',
            value: '100%',
            label: t('sustainability'),
            description: t('sustainability_desc')
        }
    ];

    return (
        <section className="py-24 bg-agency-navy relative overflow-hidden border-t border-white/10">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="url(#grad1)" />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#020b16', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {metrics.map((metric) => (
                        <div key={metric.id} className="text-center group">
                            <div className="text-5xl md:text-6xl font-serif font-bold text-agency-gold mb-4 group-hover:scale-110 transition-transform duration-500">
                                {metric.value}
                            </div>
                            <div className="h-1 w-12 bg-white/20 mx-auto mb-6 group-hover:bg-agency-gold transition-colors duration-300"></div>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                                {metric.label}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
