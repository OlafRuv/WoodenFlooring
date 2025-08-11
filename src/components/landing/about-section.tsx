import { Award, Globe, Hammer, Brush, Warehouse, Clock, CheckCircle, Users, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { loadAboutData } from '@/lib/data-loader';

export default function AboutSection() {
  const aboutData = loadAboutData();

  const services = [
    { icon: <Hammer className="w-8 h-8 text-accent" />, name: "Instalación" },
    { icon: <Warehouse className="w-8 h-8 text-accent" />, name: "Venta" },
    { icon: <Brush className="w-8 h-8 text-accent" />, name: "Mantenimiento" },
    { icon: <Award className="w-8 h-8 text-accent" />, name: "Pulido y Barnizado" },
  ];

  const stats = [
    { icon: <Clock className="w-6 h-6 text-accent" />, label: "Años de Experiencia", value: "30+" },
    { icon: <CheckCircle className="w-6 h-6 text-accent" />, label: "Proyectos Completados", value: "1000+" },
    { icon: <Users className="w-6 h-6 text-accent" />, label: "Clientes Satisfechos", value: "500+" },
    { icon: <MapPin className="w-6 h-6 text-accent" />, label: "Área de Cobertura", value: "6 Estados" },
  ];

  return (
    <section id="conocenos" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
              {aboutData.title}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {aboutData.description}
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
        
        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-accent mb-1">{stat.value}</CardTitle>
              <CardDescription className="text-sm">{stat.label}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
