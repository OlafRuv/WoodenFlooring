import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = {
  floors: { title: "Pisos de Madera", items: ["Madera Sólida", "Ingeniería", "Laminados"] },
  designs: { title: "Diseños y Patrones", items: ["Parquet al Cuadro", "Alineado", "Canterbury", "Flecha (Pluma)"] },
  finishes: { title: "Tratamientos y Acabados", items: ["Pulido y Barnizado", "Impregnación con Tinta", "Aceitado y Cera", "Acabados Mate, Semi-mate y Brillante"] },
  special: { title: "Aplicaciones Especiales", items: ["Muros (Lambrín)", "Techos (Plafón)", "Terrazas (Decks)", "Cabañas", "Escaleras", "Canchas Deportivas"] },
};

const ServiceList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-primary" />
        <span className="text-muted-foreground">{item}</span>
      </li>
    ))}
  </ul>
);

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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="floors">Pisos</TabsTrigger>
            <TabsTrigger value="designs">Diseños</TabsTrigger>
            <TabsTrigger value="finishes">Acabados</TabsTrigger>
            <TabsTrigger value="special">Aplicaciones</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="floors">
              <Card>
                <CardHeader>
                  <CardTitle>{services.floors.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ServiceList items={services.floors.items} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="designs">
              <Card>
                <CardHeader>
                  <CardTitle>{services.designs.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ServiceList items={services.designs.items} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="finishes">
              <Card>
                <CardHeader>
                  <CardTitle>{services.finishes.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ServiceList items={services.finishes.items} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="special">
              <Card>
                <CardHeader>
                  <CardTitle>{services.special.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ServiceList items={services.special.items} />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
