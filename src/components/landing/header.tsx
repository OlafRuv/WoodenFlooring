"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import React from 'react';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" prefetch={false}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-accent"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
    <div>
      <span className="font-bold text-lg font-headline text-foreground">Casa Venacev</span>
      <p className="text-xs text-muted-foreground -mt-1">Profesionales en Madera</p>
    </div>
  </Link>
);

const navLinks = [
  { name: "Conócenos", href: "#conocenos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
  { name: "Proceso", href: "#proceso" },
  { name: "Testimonios", href: "#testimonios" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
              {link.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="#contacto">
              <Phone className="mr-2 h-4 w-4" />
              Contacto Rápido
            </Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <Logo />
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                       <Link href={link.href} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                   <Button asChild className="mt-8">
                    <Link href="#contacto">
                      <Phone className="mr-2 h-4 w-4" />
                      Contacto Rápido
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
