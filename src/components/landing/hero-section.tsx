import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { loadHeroData } from '@/lib/data-loader';

export default function HeroSection() {
  const heroData = loadHeroData();

  return (
    <section id="inicio" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={heroData.backgroundImage}
        alt="Elegante piso de madera en una sala de estar"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="wood floor living room"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20 z-10" />
      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center text-white max-w-full">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-shadow px-2">
            {heroData.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 px-2">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
            <Button size="lg" asChild className="transition-transform duration-300 hover:scale-105">
              <Link href={heroData.ctaPrimary.link}>
                {heroData.ctaPrimary.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="transition-transform duration-300 hover:scale-105">
              <Link href={heroData.ctaSecondary.link}>
                {heroData.ctaSecondary.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
