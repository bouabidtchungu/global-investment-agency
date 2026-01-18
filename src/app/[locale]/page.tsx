import HeroSection from '@/components/HeroSection';
import SectorBentoGrid from '@/components/SectorBentoGrid';
import ProjectShowcase from '@/components/ProjectShowcase';
import MetricsSection from '@/components/MetricsSection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <MetricsSection />

      <SectorBentoGrid />

      <section className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-agency-navy mb-8">
            {t('quote')}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed">
            {t('quote_description')}
          </p>
        </div>
      </section>

      <ProjectShowcase />
    </div>
  );
}

