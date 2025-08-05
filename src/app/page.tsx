'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale, useRouter } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const nextLocale = locale === 'en' ? 'es' : 'en';

  return (
    <main className="relative flex flex-col items-center justify-center">
      {/* Video Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
            {t('heroTitle')}
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6" data-aos="fade-up" data-aos-delay="200">
            {t('heroSubtitle')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
          >
            {t('contactButton')}
          </motion.button>
          <Link
            href={pathname}
            locale={nextLocale}
            className="absolute top-8 right-8 bg-white text-blue-900 px-3 py-1 rounded text-sm"
          >
            {t('languageToggle')}
          </Link>
        </div>
      </section>

      {/* Sample Animated Section */}
      <section className="max-w-4xl mx-auto p-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4" data-aos="fade-up">
            Professional Legal Services
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            We specialize in corporate, family, and criminal law, offering experienced guidance tailored to your needs.
          </p>
        </motion.div>
      </section>
    </main>
  );
}