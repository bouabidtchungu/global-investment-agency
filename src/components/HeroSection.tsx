import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('HomePage');

    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-agency-navy">
            {/* Background Image / Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-global-network.png"
                    alt="Global Infrastructure"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-agency-navy/90 via-agency-navy/70 to-transparent mix-blend-multiply" />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-20">
                <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
                    <div className="inline-block px-4 py-2 border border-agency-gold/30 rounded-full bg-agency-navy/50 backdrop-blur-sm mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="text-agency-gold font-medium tracking-wide text-xs md:text-sm uppercase">Global Financing Partners</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                        {t('title')}
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 md:border-l-2 md:border-agency-gold md:pl-6">
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 justify-center md:justify-start">
                        <Link href="/projects" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto h-12 md:h-14 px-8 bg-agency-gold hover:bg-agency-gold/90 text-white text-base md:text-lg font-semibold rounded-none transition-all duration-300 border border-agency-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                {t('cta')}
                            </Button>
                        </Link>
                        <Link href="/about" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-8 border-white/20 hover:bg-white/10 text-white text-base md:text-lg font-light rounded-none backdrop-blur-sm transition-all duration-300">
                                Explore Our Vision
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/50">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
