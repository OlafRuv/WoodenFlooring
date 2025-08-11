"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  { id: 1, category: 'interior', location: 'CDMX', image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg', hint: 'wood floor interior' },
  { id: 2, category: 'exterior', location: 'Guadalajara', image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg', hint: 'wood deck terrace' },
  { id: 3, category: 'escaleras', location: 'Monterrey', image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg', hint: 'wooden stairs home' },
  { id: 4, category: 'interior', location: 'Puebla', image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg', hint: 'parquet floor bedroom' },
  { id: 5, category: 'decks', location: 'Cancún', image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg', hint: 'poolside wood deck' },
  { id: 6, category: 'interior', location: 'Querétaro', image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg', hint: 'laminate floor office' },
  { id: 7, category: 'escaleras', location: 'CDMX', image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg', hint: 'modern wood stairs' },
  { id: 8, category: 'decks', location: 'Valle de Bravo', image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg', hint: 'rustic wood cabin' },
];

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Interiores', value: 'interior' },
  { label: 'Exteriores', value: 'exterior' },
  { label: 'Escaleras', value: 'escaleras' },
  { label: 'Decks', value: 'decks' },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            Galería de Proyectos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explora algunos de nuestros trabajos y encuentra inspiración para tu próximo proyecto.
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
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden group">
              <CardContent className="p-0 relative">
                <Image
                  src={project.image}
                  alt={`Proyecto de ${project.category} en ${project.location}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transform transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="capitalize text-xs">{project.category}</Badge>
                  <p className="text-white font-semibold mt-1">{project.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
