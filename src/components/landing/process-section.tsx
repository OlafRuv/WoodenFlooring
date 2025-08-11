import { Phone, Ruler, Sparkles, Truck, MessageCircle, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { loadProcessData } from '@/lib/data-loader';

// Mapeo de iconos por nombre
const iconMap = {
  'message-circle': MessageCircle,
  ruler: Ruler,
  calendar: Calendar,
  hammer: Truck, // Usamos Truck como sustituto para hammer
  'check-circle': CheckCircle,
  phone: Phone,
  sparkles: Sparkles,
};

export default function ProcessSection() {
  const processData = loadProcessData();

  return (
    <section id="proceso" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            {processData.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {processData.description}
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="grid gap-12 md:grid-cols-2">
            {processData.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Phone;
              return (
                <div key={step.id} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'}`}>
                  <div className="flex-shrink-0 bg-primary/10 p-4 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary border-2 border-card" />
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{step.step}. {step.title}</h3>
                    <p className="text-muted-foreground mt-2">{step.description}</p>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <strong>Duración:</strong> {step.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
