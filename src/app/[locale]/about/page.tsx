import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-agency-navy">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/strategic-meeting.png"
                        alt="Strategic Meeting"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-agency-navy/80 to-agency-navy" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-agency-gold font-light tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-left-8 duration-700 rtl:slide-in-from-right-8">
                            <Image
                                src="/images/strategic-meeting.png"
                                alt="Boardroom Meeting"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white/80 text-sm italic border-l-2 border-agency-gold pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
                                    {t('boardroom_caption')}
                                </p>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 rtl:slide-in-from-left-8">
                            <div>
                                <h2 className="text-4xl font-serif font-bold text-agency-navy mb-6 relative inline-block">
                                    {t('who_we_are_title')}
                                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-agency-gold rtl:right-0 rtl:left-auto"></span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                    {t('who_we_are_desc')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="text-xl font-bold text-agency-navy mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-agency-gold/20 flex items-center justify-center text-agency-gold">M</span>
                                        {t('mission_title')}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {t('mission_desc')}
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="text-xl font-bold text-agency-navy mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-agency-navy/10 flex items-center justify-center text-agency-navy">V</span>
                                        {t('vision_title')}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {t('vision_desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
