// src/scripts/auth-controller.ts

import { AuthService } from '../lib/services/AuthService';

// Creamos una "instancia" de nuestro servicio. Es como crear un objeto funcional
// a partir de nuestro plano de construcción (la clase).
const authService = new AuthService();

// Buscamos el formulario en el HTML usando el 'id' que le dimos.
const form = document.querySelector<HTMLFormElement>('#login-form');

// Nos aseguramos de que el formulario exista antes de continuar.
if (form) {
  // Añadimos un "oyente de eventos". Le decimos al navegador:
  // "Cuando este formulario intente enviarse ('submit'), ejecuta esta función".
  form.addEventListener('submit', async (event) => {
    // 1. Prevenimos el comportamiento por defecto del navegador (que es recargar la página).
    event.preventDefault();

    // 2. Creamos un objeto FormData para obtener fácilmente los valores del formulario.
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // 3. ¡Usamos nuestro servicio! Llamamos a la función para iniciar sesión.
    const userCredential = await authService.signInWithEmail(email, password);

    // 4. Verificamos el resultado.
    if (userCredential) {
      // Si el inicio de sesión fue exitoso, redirigimos al panel de admin.
      alert('¡Inicio de sesión exitoso!');
      window.location.href = '/admin';
    } else {
      // Si falló (porque authService devolvió null), mostramos una alerta.
      alert('Error: Correo o contraseña incorrectos.');
    }
  });
}