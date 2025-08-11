import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { loadTestimonialsData } from '@/lib/data-loader';

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
  const testimonialsData = loadTestimonialsData();

  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            {testimonialsData.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {testimonialsData.description}
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
            {testimonialsData.testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between h-full p-6 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 space-y-4">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="text-muted-foreground italic">
                        "{testimonial.content}"
                      </blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
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
