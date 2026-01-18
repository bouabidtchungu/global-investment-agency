import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Header */}
            <section className="bg-agency-navy py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">{t('title')}</h1>
                    <p className="text-agency-gold text-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">{t('subtitle')}</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Information */}
                    <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-700 rtl:slide-in-from-right-8">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-agency-navy mb-6">Get in Touch</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t('desc')}
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-agency-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-agency-navy" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-agency-navy mb-1">{t('info.address')}</h3>
                                    <p className="text-gray-600">{t('info.address_val')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-agency-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-agency-navy" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-agency-navy mb-1">{t('info.email')}</h3>
                                    <p className="text-gray-600">{t('info.email_val')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-agency-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-agency-navy" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-agency-navy mb-1">{t('info.phone')}</h3>
                                    <p className="text-gray-600">{t('info.phone_val')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 animate-in fade-in slide-in-from-right-8 duration-700 rtl:slide-in-from-left-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-agency-navy uppercase tracking-wider">{t('form.name')}</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-agency-gold focus:ring-1 focus:ring-agency-gold outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-agency-navy uppercase tracking-wider">{t('form.email')}</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-agency-gold focus:ring-1 focus:ring-agency-gold outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-agency-navy uppercase tracking-wider">{t('form.subject')}</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-agency-gold focus:ring-1 focus:ring-agency-gold outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-agency-navy uppercase tracking-wider">{t('form.message')}</label>
                                <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-agency-gold focus:ring-1 focus:ring-agency-gold outline-none transition-all resize-none" />
                            </div>

                            <Button className="w-full py-6 bg-agency-gold hover:bg-agency-navy text-agency-navy hover:text-white font-bold text-lg transition-all duration-300">
                                {t('form.submit')}
                                <Send className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
