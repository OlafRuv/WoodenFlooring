"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { loadGalleryData } from '@/lib/data-loader';

export default function GallerySection() {
  const galleryData = loadGalleryData();
  const [activeFilter, setActiveFilter] = useState('all');

  // Crear filtros dinámicamente desde las categorías
  const filters = [
    { label: 'Todos', value: 'all' },
    ...galleryData.categories.map(cat => ({
      label: cat.name,
      value: cat.id
    }))
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryData.images
    : galleryData.images.filter(img => img.category === activeFilter);

  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            {galleryData.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {galleryData.description}
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 my-8">
          {filters.map(filter => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <Card key={image.id} className="overflow-hidden group">
              <CardContent className="p-0 relative">
                <Image
                  src={image.image}
                  alt={image.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transform transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={image.description}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="capitalize text-xs">
                    {galleryData.categories.find(cat => cat.id === image.category)?.name || image.category}
                  </Badge>
                  <p className="text-white font-semibold mt-1 text-sm">{image.project}</p>
                  <p className="text-white text-xs mt-1">{image.area}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
