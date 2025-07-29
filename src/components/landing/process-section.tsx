import { Phone, Ruler, Sparkles, Truck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const processSteps = [
  {
    icon: <Phone className="w-8 h-8 text-primary" />,
    title: "1. Consulta y Diseño",
    description: "Contactas a nuestros especialistas para una asesoría gratuita. Juntos, elegimos los materiales y el diseño perfecto para tu espacio y presupuesto.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-primary" />,
    title: "2. Medición y Planificación",
    description: "Nuestro equipo técnico visita tu espacio para tomar medidas precisas y planificar la instalación, asegurando un uso eficiente de los materiales y tiempos.",
  },
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "3. Preparación e Instalación",
    description: "Preparamos la superficie y nuestros maestros artesanos comienzan la instalación con precisión y cuidado, siguiendo los más altos estándares de calidad.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "4. Acabados y Entrega",
    description: "Aplicamos los tratamientos y acabados finales para proteger y realzar la belleza de la madera. Realizamos una limpieza final y te entregamos tu nuevo espacio.",
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Un camino claro y profesional para garantizar resultados excepcionales en cada proyecto.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="grid gap-12 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'}`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-card hidden md:block" />
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-lg">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
