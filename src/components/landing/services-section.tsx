import { loadServicesData } from '@/lib/data-loader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Clock, DollarSign, Star, Hammer, Package, Brush, Lightbulb, Square, ArrowRight, Sparkles, Sun } from 'lucide-react';

// Mapeo de iconos por nombre
const iconMap = {
  hammer: Hammer,
  package: Package,
  brush: Brush,
  lightbulb: Lightbulb,
  square: Square,
  'arrow-right': ArrowRight,
  sparkles: Sparkles,
  sun: Sun,
};

export default function ServicesSection() {
  const servicesData = loadServicesData();

  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            {servicesData.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {servicesData.description}
          </p>
        </div>
        
        <Tabs defaultValue={servicesData.categories[0]?.id || "pisos"} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            {servicesData.categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="mt-8">
            {servicesData.categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {category.services.map((service) => {
                      const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Hammer;
                      return (
                        <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300 relative">
                            {service.highlight && (
                              <div className="absolute top-4 right-4 z-10">
                                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                                  <Star className="w-3 h-3 mr-1" />
                                  Destacado
                                </Badge>
                              </div>
                            )}
                            
                            <CardHeader className="pb-4">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                              </div>
                              <CardDescription className="text-sm">
                                {service.description}
                              </CardDescription>
                            </CardHeader>
                            
                            <CardContent className="space-y-4">
                              <div className="space-y-2">
                                <h4 className="font-semibold text-sm text-muted-foreground">Características:</h4>
                                <ul className="space-y-1">
                                  {service.features.slice(0, 3).map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="flex items-center justify-between pt-4 border-t">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <DollarSign className="w-4 h-4" />
                                  {service.price}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  {service.duration}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
