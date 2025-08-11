import servicesData from '@/data/services.json';
import projectsData from '@/data/projects.json';
import testimonialsData from '@/data/testimonials.json';
import companyData from '@/data/company.json';
import processData from '@/data/process.json';
import galleryData from '@/data/gallery.json';
import heroData from '@/data/hero.json';
import aboutData from '@/data/about.json';
import differentiatorsData from '@/data/differentiators.json';
import contactData from '@/data/contact.json';

import type {
  ServicesData,
  ProjectsData,
  TestimonialsData,
  CompanyData,
  ProcessData,
  GalleryData,
  HeroData,
  AboutData,
  DifferentiatorsData,
  ContactData
} from '@/types/data';

// Función para cargar todos los datos
export function loadAllData() {
  return {
    services: servicesData as ServicesData,
    projects: projectsData as ProjectsData,
    testimonials: testimonialsData as TestimonialsData,
    company: companyData as CompanyData,
    process: processData as ProcessData,
    gallery: galleryData as GalleryData,
    hero: heroData as HeroData,
    about: aboutData as AboutData,
    differentiators: differentiatorsData as DifferentiatorsData,
    contact: contactData as ContactData
  };
}

// Funciones individuales para cargar datos específicos
export function loadServicesData(): ServicesData {
  return servicesData as ServicesData;
}

export function loadProjectsData(): ProjectsData {
  return projectsData as ProjectsData;
}

export function loadTestimonialsData(): TestimonialsData {
  return testimonialsData as TestimonialsData;
}

export function loadCompanyData(): CompanyData {
  return companyData as CompanyData;
}

export function loadProcessData(): ProcessData {
  return processData as ProcessData;
}

export function loadGalleryData(): GalleryData {
  return galleryData as GalleryData;
}

export function loadHeroData(): HeroData {
  return heroData as HeroData;
}

export function loadAboutData(): AboutData {
  return aboutData as AboutData;
}

export function loadDifferentiatorsData(): DifferentiatorsData {
  return differentiatorsData as DifferentiatorsData;
}

export function loadContactData(): ContactData {
  return contactData as ContactData;
}

// Función para obtener un servicio específico por ID
export function getServiceById(id: string) {
  const services = loadServicesData();
  return services.services.find(service => service.id === id);
}

// Función para obtener un proyecto específico por ID
export function getProjectById(id: string) {
  const projects = loadProjectsData();
  return projects.projects.find(project => project.id === id);
}

// Función para obtener testimonios destacados
export function getHighlightedTestimonials() {
  const testimonials = loadTestimonialsData();
  return testimonials.testimonials.filter(testimonial => testimonial.highlight);
}

// Función para obtener proyectos destacados
export function getHighlightedProjects() {
  const projects = loadProjectsData();
  return projects.projects.filter(project => project.highlight);
}

// Función para obtener servicios destacados
export function getHighlightedServices() {
  const services = loadServicesData();
  return services.services.filter(service => service.highlight);
}

// Función para obtener imágenes de galería por categoría
export function getGalleryImagesByCategory(categoryId: string) {
  const gallery = loadGalleryData();
  return gallery.images.filter(image => image.category === categoryId);
}

// Función para obtener estadísticas de la empresa
export function getCompanyStats() {
  const company = loadCompanyData();
  return {
    experience: company.company.experience,
    projects: company.company.projects,
    clients: company.company.clients,
    founded: company.company.founded
  };
}

// Función para obtener información de contacto
export function getContactInfo() {
  const company = loadCompanyData();
  return company.contact;
}

// Función para validar que todos los datos estén cargados correctamente
export function validateDataIntegrity() {
  try {
    const allData = loadAllData();
    const requiredKeys = [
      'services', 'projects', 'testimonials', 'company', 
      'process', 'gallery', 'hero', 'about', 'differentiators', 'contact'
    ];
    
    const missingKeys = requiredKeys.filter(key => !allData[key as keyof typeof allData]);
    
    if (missingKeys.length > 0) {
      console.warn('Faltan datos:', missingKeys);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error validando datos:', error);
    return false;
  }
} 