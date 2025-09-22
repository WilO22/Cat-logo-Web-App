// Importamos las funciones necesarias del SDK de Firebase
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tu configuración de la aplicación web de Firebase, leída desde nuestras variables de entorno seguras (.env)
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

// Inicializamos la app de Firebase
// Verificamos si ya existe una app inicializada para no crearla múltiples veces
// "¿Es verdad que el número de apps inicializadas es cero?"
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Exportamos los servicios que usaremos en el proyecto
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };