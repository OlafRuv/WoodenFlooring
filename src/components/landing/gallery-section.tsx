"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { loadGalleryData, getProjectById } from '@/lib/data-loader';
import { ProjectModal } from '@/components/ui/project-modal';
import { Project } from '@/types/data';
import { Expand, ExternalLink } from 'lucide-react';

export default function GallerySection() {
  const galleryData = loadGalleryData();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleImageClick = (image: any) => {
    if (image.projectId) {
      const project = getProjectById(image.projectId);
      if (project) {
        setSelectedProject(project);
        setIsModalOpen(true);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-card">
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
            <Card key={image.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0 relative" onClick={() => handleImageClick(image)}>
                <Image
                  src={image.image}
                  alt={image.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transform transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.description}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Indicador de que se puede expandir */}
                {image.projectId && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      <Expand className="w-3 h-3 mr-1" />
                      Ver Proyecto
                    </Badge>
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="capitalize text-xs">
                    {galleryData.categories.find(cat => cat.id === image.category)?.name || image.category}
                  </Badge>
                  <p className="text-white font-semibold mt-1 text-sm">{image.area}</p>
                  
                  {/* Mostrar materiales si no hay projectId */}
                  {!image.projectId && (
                    <div className="mt-2">
                      <p className="text-white text-xs opacity-90">
                        {image.materials.slice(0, 2).join(', ')}
                        {image.materials.length > 2 && '...'}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal para mostrar detalles del proyecto */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
