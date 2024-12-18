export default defineNuxtPlugin(() => {
    if (import.meta.client) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
      script.defer = true; // Charge après le DOM
      document.head.appendChild(script);
    }
  });
  