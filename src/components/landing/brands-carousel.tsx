"use client";

import React, { useEffect, useRef } from "react";
import { loadBrandsData } from '@/lib/data-loader';
import { ExternalLink } from 'lucide-react';
import "./marquee.css";

export default function BrandsCarousel() {
  const brandsData = loadBrandsData();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const track = trackRef.current;

    if (!marquee || !track) return;

    const ensureLoopWidth = () => {
      const originalItems = Array.from(track.children).filter(
        (el) => !el.hasAttribute("aria-hidden")
      );

      // Eliminar clones previos
      Array.from(track.querySelectorAll("[aria-hidden='true']")).forEach((n) =>
        n.remove()
      );

      let containerW = marquee.clientWidth;
      let trackW = track.scrollWidth;

      while (trackW < containerW * 2) {
        originalItems.forEach((node) => {
          const clone = node.cloneNode(true) as HTMLElement;
          clone.setAttribute("aria-hidden", "true");
          track.appendChild(clone);
        });
        trackW = track.scrollWidth;
        if (track.childElementCount > 200) break; // seguridad
      }

      // Reiniciar animación
      track.style.animation = "none";
      track.offsetHeight; // reflow
      track.style.animation = "";
    };

    ensureLoopWidth();
    window.addEventListener("resize", ensureLoopWidth);
    return () => window.removeEventListener("resize", ensureLoopWidth);
  }, []);

  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent mb-4">
            {brandsData.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
            {brandsData.description}
          </p>
        </div>

        <div className="marquee" ref={marqueeRef}>
          <div className="marquee__track" ref={trackRef}>
            {brandsData.brands.map((brand) => (
              <div key={brand.id} className="marquee__item relative group">
                {/* Badge de destacado */}
                
                {/* Icono SVG de la marca */}
                <div className="marquee__icon">
                <img height="200" width="200" src={`https://cdn.simpleicons.org/${brand.icon}/gray`} />
                </div>

                {/* Nombre de la marca */}
                {/* <div className="marquee__name">
                  {brand.name}
                </div> */}

                {/* Enlace externo */}
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        {/* <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Todas nuestras marcas cumplen con los más altos estándares de calidad y sostenibilidad
          </p>
        </div> */}
      </div>
    </section>
  );
} 