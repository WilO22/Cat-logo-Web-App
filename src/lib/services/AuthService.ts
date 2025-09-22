// src/lib/services/AuthService.ts

import { type UserCredential, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '../firebase/client';
import type { IAuthService } from '../../types';

export class AuthService implements IAuthService {

  constructor() {}

  async signInWithEmail(email: string, password: string): Promise<UserCredential | null> {
    try {
      // Usamos la función del SDK de Firebase para iniciar sesión.
      // Le pasamos la configuración de 'auth', el email y la contraseña.
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario autenticado:', userCredential.user.email);
      return userCredential;
    } catch (error) {
      // Si Firebase nos devuelve un error (ej: contraseña incorrecta), lo capturamos.
      console.error("Error al iniciar sesión con email:", error);
      // Devolvemos null para indicar que el inicio de sesión falló.
      return null;
    }
  }

  async signInWithGoogle(): Promise<UserCredential | null> {
    // Creamos un "proveedor" de autenticación de Google.
    const provider = new GoogleAuthProvider();
    try {
      // Usamos otra función del SDK que abre una ventana emergente (popup) para el login de Google.
      const result = await signInWithPopup(auth, provider);
      console.log('Usuario autenticado con Google:', result.user.email);
      return result;
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      return null;
    }
  }

  async signOut(): Promise<void> {
    try {
      // La función signOut del SDK se encarga de cerrar la sesión del usuario.
      await signOut(auth);
      console.log('Sesión cerrada exitosamente.');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }
}