// Carga las definiciones de tipo base de Astro para poder extenderlas con las nuestras.
/// <reference types="astro/client" />

// Define la "forma" o contrato de nuestras variables de entorno del archivo .env.
// Astro utiliza esta interfaz para entender las variables que le proporcionamos.
interface ImportMetaEnv {
  // Declara la variable como una cadena de texto (`string`) de solo lectura (`readonly`).
  readonly PUBLIC_FIREBASE_API_KEY: string;

  // Las siguientes líneas siguen el mismo patrón para el resto de las variables.
  readonly PUBLIC_FIREBASE_AUTH_DOMAIN: string;
  readonly PUBLIC_FIREBASE_PROJECT_ID: string;
  readonly PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  readonly PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly PUBLIC_FIREBASE_APP_ID: string;
}

// Extiende la interfaz global `ImportMeta` que representa al objeto `import.meta`.
interface ImportMeta {
  // Añade la propiedad `env` al objeto `import.meta` y la "tipa" con nuestra interfaz.
  // Esta es la línea que conecta todo y activa el autocompletado en `import.meta.env`.
  readonly env: ImportMetaEnv;
}