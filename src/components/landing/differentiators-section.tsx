import { Award, Users, FileText, Star, Shield, Zap, Leaf } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { loadDifferentiatorsData } from '@/lib/data-loader';

// Mapeo de iconos por nombre
const iconMap = {
  award: Award,
  star: Star,
  users: Users,
  shield: Shield,
  zap: Zap,
  leaf: Leaf,
  'file-text': FileText,
};

export default function DifferentiatorsSection() {
  const differentiatorsData = loadDifferentiatorsData();

  return (
    <section id="diferenciadores" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            {differentiatorsData.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {differentiatorsData.description}
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {differentiatorsData.differentiators.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Award;
            return (
              <Card key={item.id} className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center p-0">
                  <IconComponent className="w-10 h-10 mb-4 text-accent" />
                  <CardTitle className="mb-2 text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
