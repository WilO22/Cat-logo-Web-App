// src/scripts/auth-guard.ts

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase/config';

// onAuthStateChanged es un "oyente" de Firebase que se activa
// inmediatamente al cargar la página. Nos dice si hay un usuario
// con sesión activa o no.
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Si NO hay usuario (user es null), significa que no ha iniciado sesión.
    // Lo redirigimos inmediatamente a la página de login.
    window.location.href = '/login';
  }
});