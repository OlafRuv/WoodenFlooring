import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  CheckCircle, 
  Home, 
  Palette, 
  Brush, 
  Hammer,
  TreePine,
  Layers,
  Sparkles,
  Square,
  ArrowRight,
  Star,
  Droplets,
  Sun,
  Mountain,
  ArrowUpDown,
  Trophy
} from "lucide-react";

const services = {
  floors: {
    title: "Pisos de Madera",
    items: [
      { name: "Madera Sólida", icon: TreePine, description: "Madera natural de alta durabilidad" },
      { name: "Ingeniería", icon: Layers, description: "Estructura multicapa estabilizada" },
      { name: "Laminados", icon: Square, description: "Acabado perfecto y resistente" }
    ]
  },
  designs: {
    title: "Diseños y Patrones",
    items: [
      { name: "Parquet al Cuadro", icon: Square, description: "Patrón clásico y elegante" },
      { name: "Alineado", icon: ArrowRight, description: "Instalación lineal tradicional" },
      { name: "Canterbury", icon: Star, description: "Diseño sofisticado y moderno" },
      { name: "Flecha (Pluma)", icon: ArrowRight, description: "Patrón dinámico y atractivo" }
    ]
  },
  finishes: {
    title: "Tratamientos y Acabados",
    items: [
      { name: "Pulido y Barnizado", icon: Sparkles, description: "Acabado brillante y protector" },
      { name: "Impregnación con Tinta", icon: Droplets, description: "Coloración profunda y uniforme" },
      { name: "Aceitado y Cera", icon: Sun, description: "Acabado natural y cálido" },
      { name: "Acabados Mate, Semi-mate y Brillante", icon: Brush, description: "Variedad de texturas" }
    ]
  },
  colors: {
    title: "Paleta de Colores",
    items: [
      { name: "Cloudgray", icon: Palette, description: "Gris nublado elegante y moderno" },
      { name: "Oak", icon: Palette, description: "Tono natural de roble clásico" },
      { name: "Caramel", icon: Palette, description: "Cálido tono caramelo acogedor" },
      { name: "Rust", icon: Palette, description: "Óxido rústico con carácter" },
      { name: "Walnut", icon: Palette, description: "Nogal rico y sofisticado" },
      { name: "Moka", icon: Palette, description: "Café moka profundo y elegante" },
      { name: "Greyfog", icon: Palette, description: "Niebla gris sutil y refinada" },
      { name: "Nordic", icon: Palette, description: "Estilo nórdico limpio y minimalista" }
    ]
  },
  special: {
    title: "Aplicaciones Especiales",
    items: [
      { name: "Muros (Lambrín)", icon: Home, description: "Revestimiento vertical elegante" },
      { name: "Techos (Plafón)", icon: Mountain, description: "Cubierta superior de madera" },
      { name: "Terrazas (Decks)", icon: Sun, description: "Espacios exteriores duraderos" },
      { name: "Cabañas", icon: TreePine, description: "Construcción completa en madera" },
      { name: "Escaleras", icon: ArrowUpDown, description: "Escalones y pasamanos" },
      { name: "Canchas Deportivas", icon: Trophy, description: "Pisos para deportes" }
    ]
  },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            Catálogo de Servicios
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ofrecemos una solución integral para tus necesidades de pisos y recubrimientos de madera.
          </p>
        </div>
        <Tabs defaultValue="floors" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 h-auto">
            <TabsTrigger value="floors">Pisos</TabsTrigger>
            <TabsTrigger value="designs">Diseños</TabsTrigger>
            <TabsTrigger value="finishes">Acabados</TabsTrigger>
            <TabsTrigger value="colors">Colores</TabsTrigger>
            <TabsTrigger value="special">Aplicaciones</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="floors">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {services.floors.items.map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <item.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="designs">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {services.designs.items.map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <item.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="finishes">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {services.finishes.items.map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <item.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="colors">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {services.colors.items.map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <item.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
            <TabsContent value="special">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {services.special.items.map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <item.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
