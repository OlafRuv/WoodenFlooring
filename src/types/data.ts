// Tipos para Servicios
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  price: string;
  duration: string;
  highlight: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface ServicesData {
  title: string;
  subtitle: string;
  description: string;
  categories: ServiceCategory[];
}

// Tipos para Proyectos
export interface Project {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  image: string;
  icon: string;
  area: string;
  duration: string;
  materials: string[];
  features: string[];
  highlight: boolean;
  completed: string;
}

export interface ProjectsData {
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
}

// Tipos para Testimonios
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  content: string;
  image: string;
  project: string;
  date: string;
  highlight: boolean;
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  description: string;
  testimonials: Testimonial[];
}

// Tipos para Información de la Empresa
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  experience: string;
  projects: string;
  clients: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
}

export interface SocialMedia {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
}

export interface CompanyData {
  company: CompanyInfo;
  contact: ContactInfo;
  social: SocialMedia;
  services: {
    main: string[];
    specialties: string[];
  };
  certifications: string[];
  coverage: string[];
}

// Tipos para el Proceso de Trabajo
export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
  activities: string[];
  deliverables: string[];
}

export interface ProcessData {
  title: string;
  subtitle: string;
  description: string;
  steps: ProcessStep[];
}

// Tipos para Galería
export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  thumbnail: string;
  projectId?: string; // Opcional - solo si está vinculado a un proyecto
  materials: string[];
  area: string;
  highlight: boolean;
}

export interface GalleryData {
  title: string;
  subtitle: string;
  description: string;
  categories: GalleryCategory[];
  images: GalleryImage[];
}

// Tipos para Iconos (para mapear nombres de iconos a componentes)
export type IconName = 
  | 'hammer'
  | 'package'
  | 'brush'
  | 'lightbulb'
  | 'home'
  | 'building'
  | 'utensils'
  | 'apartment'
  | 'message-circle'
  | 'ruler'
  | 'calendar'
  | 'check-circle'
  | 'factory'
  | 'refresh-cw';

// Tipos para el Hero Section
export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary: {
    text: string;
    link: string;
  };
}

// Tipos para la Sección Acerca de
export interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  showStatsInsteadOfFeatures: boolean;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
}

// Tipos para Diferenciadores
export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface DifferentiatorsData {
  title: string;
  subtitle: string;
  description: string;
  differentiators: Differentiator[];
}

// Tipos para Contacto
export interface ContactData {
  title: string;
  subtitle: string;
  description: string;
  form: {
    title: string;
    description: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
  info: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
} 

// Tipos para Marcas
export interface Brand {
  id: string;
  name: string;
  icon: string;
  website: string;
  category: string;
  highlight: boolean;
}

export interface BrandsData {
  title: string;
  subtitle: string;
  description: string;
  brands: Brand[];
} 