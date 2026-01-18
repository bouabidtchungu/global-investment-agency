import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { TrendingUp, ShieldCheck, Globe } from 'lucide-react';

export default function InvestorsPage() {
    const t = useTranslations('InvestorsPage');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-agency-navy">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/smart-city-infrastructure.png"
                        alt="Global Finance"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-agency-navy/90" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 -mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-serif font-bold text-agency-navy mb-4">{t('why_invest_title')}</h2>
                            <div className="w-16 h-1 bg-agency-gold mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Feature 1 */}
                            <div className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-agency-navy rounded-2xl flex items-center justify-center mb-8 transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                    <TrendingUp className="w-10 h-10 text-agency-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-agency-navy mb-4">{t('roi_title')}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {t('roi_desc')}
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-agency-navy rounded-2xl flex items-center justify-center mb-8 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                                    <ShieldCheck className="w-10 h-10 text-agency-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-agency-navy mb-4">{t('stability_title')}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {t('stability_desc')}
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-agency-navy rounded-2xl flex items-center justify-center mb-8 transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                    <Globe className="w-10 h-10 text-agency-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-agency-navy mb-4">{t('global_title')}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {t('global_desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
