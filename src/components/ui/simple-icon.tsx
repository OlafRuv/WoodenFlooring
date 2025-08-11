"use client";

import { useEffect, useState } from 'react';

interface SimpleIconProps {
  icon: string;
  size?: number;
  className?: string;
  color?: string;
}

export function SimpleIcon({ icon, size = 64, className = "", color = "currentColor" }: SimpleIconProps) {
  const [svgContent, setSvgContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        setIsLoading(true);
        setError(false);
        
        // Importar dinámicamente el icono desde simple-icons
        const iconModule = await import(`simple-icons/icons/protonvpn.svg`);
        
        const iconData = iconModule.default;
        
        // Crear el SVG con el path del icono
        const svg = `
          <svg 
            viewBox="0 0 24 24" 
            width="${size}" 
            height="${size}" 
            fill="${color}"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="${iconData.path}"/>
          </svg>
        `;
        
        setSvgContent(svg);
      } catch (err) {
        console.error(`Error loading icon: ${icon}`, err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (icon) {
      loadIcon();
    }
  }, [icon, size, color]);

  if (isLoading) {
    return (
      <div 
        className={`animate-pulse bg-muted rounded ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  if (error) {
    return (
      <div 
        className={`bg-muted rounded flex items-center justify-center text-muted-foreground text-xs ${className}`}
        style={{ width: size, height: size }}
      >
        {icon}
      </div>
    );
  }

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{ width: size, height: size }}
    />
  );
} 