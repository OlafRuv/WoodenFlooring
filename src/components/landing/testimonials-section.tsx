import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "El equipo de Casa Venacev superó nuestras expectativas. La instalación fue impecable y el resultado final transformó nuestra casa. ¡Totalmente recomendados!",
    author: "Familia Pérez",
    location: "CDMX",
  },
  {
    quote: "Profesionalismo de principio a fin. Nos asesoraron en la elección del mejor deck para nuestra terraza y el trabajo fue rápido y de una calidad excepcional.",
    author: "Ana G.",
    location: "Guadalajara",
  },
  {
    quote: "Contratamos el servicio de pulido y barnizado y nuestro piso de 10 años parece nuevo. Un trabajo artesanal y muy cuidadoso. ¡Gracias!",
    author: "Carlos Ramírez",
    location: "Monterrey",
  },
  {
    quote: "La atención al detalle es increíble. Se nota la experiencia y la pasión que tienen por la madera. Estamos encantados con nuestras nuevas escaleras.",
    author: "Laura Torres",
    location: "Puebla",
  },
];

const StarRating = ({ rating = 5 }: { rating?: number }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Star key={i} className="w-5 h-5 fill-current" />);
  }
  
  return (
    <div className="flex gap-1 text-yellow-400">
      {stars}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            Opiniones de Clientes Satisfechos
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            La confianza de nuestros clientes es nuestro mayor orgullo.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between h-full p-6 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 space-y-4">
                      <StarRating />
                      <blockquote className="text-muted-foreground italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
