import { Button } from "@/components/ui/button";
import { loadCompanyData } from '@/lib/data-loader';

const WhatsAppIcon = () => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    <path d="M14.05 4.95A9 9 0 0 1 22.1 13.05"></path>
    <path d="M14.05 8.95A5 5 0 0 1 18.1 13.05"></path>
  </svg>
);

export default function FloatingCTA() {
  const companyData = loadCompanyData();
  
  // Crear el mensaje de WhatsApp
  const whatsappMessage = encodeURIComponent("Hola, quisiera solicitar una asesoría gratuita.");
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp.replace('+', '')}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full shadow-lg h-14 w-14 md:h-16 md:w-16 p-0 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-transform duration-300 hover:scale-110"
      >
        <WhatsAppIcon />
      </Button>
    </a>
  );
}
