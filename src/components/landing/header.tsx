"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import React from 'react';
import { loadCompanyData } from '@/lib/data-loader';

const Logo = () => {
  const companyData = loadCompanyData();
  
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-accent flex-shrink-0"
      >
        <rect x="4" y="8" width="24" height="16" rx="2" className="fill-accent/20 stroke-accent" />
        <path d="M8 12h16" className="stroke-accent/60" />
        <path d="M8 16h16" className="stroke-accent/60" />
        <path d="M8 20h16" className="stroke-accent/60" />
        <path d="M12 6l4-2 4 2" className="stroke-accent" />
        <path d="M16 4v4" className="stroke-accent" />
        <path d="M14 6h4" className="stroke-accent" />
      </svg> */}
      <img src="/logo.png" alt="Logo Casa Venacev" className="h-11 w-11 flex-shrink-0" />
      <div className="min-w-0">
        <span className="font-bold text-lg font-headline text-foreground block truncate">{companyData.company.name}</span>
        <p className="text-xs text-muted-foreground -mt-1 block truncate">{companyData.company.tagline}</p>
      </div>
    </Link>
  );
};

const navLinks = [
  { name: "Conócenos", href: "#conocenos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
  { name: "Proceso", href: "#proceso" },
  { name: "Testimonios", href: "#testimonios" },
];

export default function Header() {
  const companyData = loadCompanyData();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 max-w-full">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap" prefetch={false}>
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
        <div className="md:hidden flex-shrink-0">
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
