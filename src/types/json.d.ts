// Declaraciones de tipos para archivos JSON
declare module "*.json" {
  const value: any;
  export default value;
}

// Declaraciones específicas para nuestros archivos de datos
declare module "@/data/*.json" {
  const value: any;
  export default value;
} 