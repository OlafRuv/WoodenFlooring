declare module 'simple-icons/icons/*' {
  interface SimpleIcon {
    title: string;
    slug: string;
    hex: string;
    source: string;
    path: string;
    guidelines?: string;
    license?: {
      type: string;
      url?: string;
    };
  }
  
  const icon: SimpleIcon;
  export default icon;
}

declare module 'simple-icons' {
  export interface SimpleIcon {
    title: string;
    slug: string;
    hex: string;
    source: string;
    path: string;
    guidelines?: string;
    license?: {
      type: string;
      url?: string;
    };
  }
} 