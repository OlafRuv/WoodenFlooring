"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Ruler, Star, X } from 'lucide-react';
import { Project } from '@/types/data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Imagen del proyecto */}
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.highlight && (
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Destacado
                </Badge>
              </div>
            )}
          </div>

          {/* Información básica */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{project.category}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Ruler className="w-4 h-4" />
              <span>{project.area}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          {/* Materiales */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Materiales Utilizados</h3>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((material, index) => (
                <Badge key={index} variant="outline">
                  {material}
                </Badge>
              ))}
            </div>
          </div>

          {/* Características */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Características del Proyecto</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Fecha de finalización */}
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Completado:</strong> {new Date(project.completed).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 