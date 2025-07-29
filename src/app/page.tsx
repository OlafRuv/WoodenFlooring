import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import AboutSection from '@/components/landing/about-section';
import ServicesSection from '@/components/landing/services-section';
import GallerySection from '@/components/landing/gallery-section';
import ProcessSection from '@/components/landing/process-section';
import DifferentiatorsSection from '@/components/landing/differentiators-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import ContactSection from '@/components/landing/contact-section';
import Footer from '@/components/landing/footer';
import FloatingCTA from '@/components/landing/floating-cta';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ProcessSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
