export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "fr", name: "Français", file: "fr.json" },
    ],
    defaultLocale: "en",
    langDir: "locales", 
    strategy: "prefix_except_default",
  },
  css: [
    'assets/css/swiper-bundle.min.css',
    'assets/css/styles.css',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://unicons.iconscout.com/release/v4.0.0/css/line.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css',
        },
        
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        },
        {
          src: '/js/main.js',
        },
      ],
    },
  },
});
