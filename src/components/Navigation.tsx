"use client";
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Button } from "@/components/ui/button"

export default function Navigation({ locale }: { locale: string }) {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-agency-navy/95 backdrop-blur-sm border-b border-white/10 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-agency-gold rounded-lg flex items-center justify-center text-agency-navy font-bold text-xl">
                                MG
                            </div>
                            <span className="font-serif font-bold text-xl text-white hidden sm:block tracking-wide">
                                Makadem Group
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {['home', 'projects', 'investors', 'governments', 'about'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'home' ? '/' : `/${item}`}
                                className="text-gray-300 hover:text-white hover:border-b-2 hover:border-agency-gold transition-all py-1 font-medium text-sm tracking-wide uppercase"
                            >
                                {t(item)}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-white/10 rounded-lg p-1 border border-white/5">
                            <button
                                onClick={() => switchLocale('en')}
                                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${locale === 'en' ? 'bg-agency-gold text-agency-navy shadow-sm' : 'text-gray-400 hover:text-white'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => switchLocale('ar')}
                                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${locale === 'ar' ? 'bg-agency-gold text-agency-navy shadow-sm' : 'text-gray-400 hover:text-white'}`}
                            >
                                AR
                            </button>
                        </div>
                        <Link href="/contact">
                            <Button className="bg-agency-gold hover:bg-white hover:text-agency-navy text-agency-navy font-bold transition-all duration-300">
                                {t('contact')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
