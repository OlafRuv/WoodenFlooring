import { Award, Globe, Hammer, Brush, Warehouse } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  { icon: <Hammer className="w-8 h-8 text-accent" />, name: "Instalación" },
  { icon: <Warehouse className="w-8 h-8 text-accent" />, name: "Venta" },
  { icon: <Brush className="w-8 h-8 text-accent" />, name: "Mantenimiento" },
  { icon: <Award className="w-8 h-8 text-accent" />, name: "Pulido y Barnizado" },
];

export default function AboutSection() {
  return (
    <section id="conocenos" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
              Conócenos
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En Casa Venacev, llevamos más de 30 años transformando espacios con la calidez y elegancia de la madera. Nuestra pasión es crear ambientes únicos, combinando técnicas artesanales con materiales de la más alta calidad para interiores y exteriores.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestros valores son la honestidad, el compromiso y la excelencia en cada proyecto. Ofrecemos cobertura en toda la República Mexicana, llevando nuestra maestría a cada rincón del país.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.name} className="flex flex-col items-center justify-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0 mb-4">
                  {service.icon}
                </CardHeader>
                <CardTitle className="text-lg font-medium">{service.name}</CardTitle>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
