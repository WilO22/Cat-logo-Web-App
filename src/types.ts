// src/types.ts

import type { UserCredential } from "firebase/auth";

// Este es nuestro contrato.
// Le dice a TypeScript que cualquier clase que sea un "IAuthService"
// DEBE tener estas funciones obligatoriamente.
export interface IAuthService {
  signInWithEmail(email: string, password: string): Promise<UserCredential | null>;
  signInWithGoogle(): Promise<UserCredential | null>;
  signOut(): Promise<void>;
}