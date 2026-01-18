import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Landmark, Handshake, Briefcase } from 'lucide-react';

export default function GovernmentsPage() {
    const t = useTranslations('GovernmentsPage');

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-agency-navy">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/images/hero-global-network.png"
                        alt="Global Network"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-agency-navy via-agency-navy/80 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-1000 rtl:slide-in-from-right-8">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-2xl text-agency-gold font-light tracking-wide mb-8">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Partnership Model */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-10 rounded-xl border-t-4 border-agency-gold shadow-sm hover:shadow-xl transition-all duration-300">
                            <Landmark className="w-12 h-12 text-agency-navy mb-6" />
                            <h3 className="text-2xl font-serif font-bold text-agency-navy mb-4">{t('partnership_title')}</h3>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                {t('partnership_desc')}
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-agency-navy p-10 rounded-xl border-t-4 border-white shadow-xl transform lg:-translate-y-6">
                            <Handshake className="w-12 h-12 text-agency-gold mb-6" />
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">{t('ppp_title')}</h3>
                            <p className="text-gray-300 leading-relaxed text-justify">
                                {t('ppp_desc')}
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-10 rounded-xl border-t-4 border-agency-gold shadow-sm hover:shadow-xl transition-all duration-300">
                            <Briefcase className="w-12 h-12 text-agency-navy mb-6" />
                            <h3 className="text-2xl font-serif font-bold text-agency-navy mb-4">{t('development_title')}</h3>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                {t('development_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
