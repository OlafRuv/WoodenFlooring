import { Award, Users, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const differentiators = [
  {
    icon: <Award className="w-10 h-10 mb-4 text-accent" />,
    title: "Garantía de Calidad",
    description: "Cada instalación está respaldada por nuestra garantía de satisfacción, asegurando un acabado perfecto y duradero.",
  },
  {
    icon: <Users className="w-10 h-10 mb-4 text-accent" />,
    title: "Línea Directa con Especialistas",
    description: "Habla directamente con nuestros maestros instaladores, no con intermediarios. Recibe asesoría experta desde el primer contacto.",
  },
  {
    icon: <FileText className="w-10 h-10 mb-4 text-accent" />,
    title: "Materiales Certificados",
    description: "Trabajamos solo con maderas de origen sostenible y certificado. Proveemos fichas técnicas de todos nuestros materiales.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section id="diferenciadores" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            Lo Que Nos Hace Únicos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprometidos con la excelencia, la transparencia y la calidad que perdura.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {differentiators.map((item) => (
            <Card key={item.title} className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center p-0">
                {item.icon}
                <CardTitle className="mb-2 text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
