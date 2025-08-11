"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

export default function ContactSection() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Crear el contenido del email
    const subject = encodeURIComponent("Consulta desde Casa Venacev - " + values.name)
    const body = encodeURIComponent(`
Hola,

He completado el formulario de contacto en el sitio web de Casa Venacev.

Mis datos:
- Nombre: ${values.name}
- Email: ${values.email}
- Teléfono: ${values.phone || 'No proporcionado'}

Mi mensaje:
${values.message}

Saludos cordiales,
${values.name}
    `)
    
    // Crear el enlace mailto
    const mailtoLink = `mailto:contacto@casavenacev.com?subject=${subject}&body=${body}`
    
    // Abrir el cliente de email
    window.open(mailtoLink, '_blank')
    
    // Mostrar confirmación
    toast({
      title: "Formulario Completado",
      description: "Se abrirá tu cliente de email. Por favor, envía el mensaje para completar el contacto.",
    })
    
    // Limpiar el formulario
    form.reset()
  }

  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-[#E9DDCC]">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent">
            Contacta a un Especialista
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            ¿Listo para iniciar tu proyecto? Nuestro equipo de asesores está aquí para ayudarte. Contáctanos para una asesoría gratuita y personalizada.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <User className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bruno Ventura Acevedo</h3>
                <a href="tel:+5215555555555" className="text-muted-foreground hover:text-accent flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 55 5555 5555
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="bg-primary/20 p-3 rounded-full">
                <User className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Salvador Ventura Rangel</h3>
                <a href="tel:+5215555555556" className="text-muted-foreground hover:text-accent flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 55 5555 5556
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md">
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="tu@correo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu número de teléfono" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cuéntanos sobre tu proyecto..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" size="lg">Enviar Mensaje</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
