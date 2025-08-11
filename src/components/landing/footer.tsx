"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { loadCompanyData } from '@/lib/data-loader';

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
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
    <span className="font-semibold text-lg font-headline text-foreground">Casa Venacev</span>
  </Link>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  const companyData = loadCompanyData();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const navLinks = [
    { name: "Conócenos", href: "#conocenos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="w-full bg-background text-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6 grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="text-muted-foreground text-sm">{companyData.company.description}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Navegación</h4>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Contacto</h4>
          <div className="text-sm text-muted-foreground">
            <p>Bruno Ventura Acevedo</p>
            <p>Salvador Ventura Rangel</p>
            <p className="mt-2">
              <a href={`tel:${companyData.contact.phone}`} className="hover:text-primary">Tel: {companyData.contact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${companyData.contact.email}`} className="hover:text-primary">{companyData.contact.email}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} {companyData.company.name}. Todos los derechos reservados.</p>
          <Link href="/aviso-de-privacidad" className="hover:text-primary mt-2 md:mt-0" prefetch={false}>
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
