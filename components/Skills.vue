<template>
    <!--==================== SKILLS ====================-->
    <section id="skills" class="skills section text-center">
      <div class="container">
        <!-- Titre principal -->
        <h2 class="section__title mb-3">{{ $t('skills.title') }}</h2>
        <span class="section__subtitle d-block mb-5">{{ $t('skills.subtitle') }}</span>
  
        <div class="row g-4">
          <!-- Frameworks et CMS -->
          <div class="col-12 col-md-6">
            <div class="skills__content p-4 border rounded shadow-sm h-100">
              <h3 class="skills__title mb-3">{{ $t('skills.frameworks.title') }}</h3>
              <div class="row row-cols-2 g-3">
                <div v-for="item in frameworks" :key="item.name" class="col d-flex align-items-center">
                  <i :class="item.icon" class="skills__icon me-2 fs-4"></i>&nbsp;<h5 class="skills__name mb-0" v-html="item.name"></h5>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Bases de Données -->
          <div class="col-12 col-md-6">
            <div class="skills__content p-4 border rounded shadow-sm h-100">
              <h3 class="skills__title mb-3">{{ $t('skills.databases.title') }}</h3>
              <div class="row row-cols-2 g-3">
                <div v-for="item in databases" :key="item.name" class="col d-flex align-items-center">
                  <i :class="item.icon" class="skills__icon me-2 fs-4"></i>&nbsp;<h5 class="skills__name mb-0" v-html="item.name"></h5>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Outils de Développement -->
          <div class="col-12 col-md-6">
            <div class="skills__content p-4 border rounded shadow-sm h-100">
              <h3 class="skills__title mb-3">{{ $t('skills.tools.title') }}</h3>
              <div class="row row-cols-2 g-3">
                <div v-for="item in tools" :key="item.name" class="col d-flex align-items-center">
                  <i :class="item.icon" class="skills__icon me-2 fs-4"></i>&nbsp;<h5 class="skills__name mb-0" v-html="item.name"></h5>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Méthodologies & Webdesign -->
          <div class="col-12 col-md-6">
            <div class="skills__content p-4 border rounded shadow-sm h-100">
              <h3 class="skills__title mb-3">{{ $t('skills.methods.title') }}</h3>
              <div class="row row-cols-2 g-3">
                <div v-for="item in methods" :key="item.name" class="col d-flex align-items-center">
                  <i :class="item.icon" class="skills__icon me-2 fs-4"></i>&nbsp;<h5 class="skills__name mb-0" v-html="item.name"></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Frameworks et CMS
  const frameworks = [
    { name: 'Laravel', icon: 'uil uil-layers' },
    { name: 'Vue.js / Nuxt.js', icon: 'uil uil-vuejs' },
    { name: 'React.js / Next.js ', icon: 'uil uil-react' },
    { name: 'WordPress', icon: 'uil uil-wordpress' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    { name: 'Flutter', icon: 'devicon-flutter-plain' },
    { name: 'Django', icon: 'devicon-django-plain' },
  ];
  
  // Bases de Données
  const databases = [
    { name: 'SQL Server', icon: 'uil uil-database' },
    { name: 'MySQL', icon: 'uil uil-database' },
    { name: 'PostgreSQL', icon: 'uil uil-database-alt' },
  ];
  
  // Outils de Développement
  const tools = [
    { name: 'Git', icon: 'uil uil-github-alt' },
    { name: 'VS Code', icon: 'uil uil-visual-studio' },
    { name: 'Android Studio ', icon: 'uil uil-android' },
    { name: 'Figma', icon: 'devicon-figma-plain' },
    { name: 'Trello / Jira', icon: 'devicon-jira-plain' },
  ];
  
  // Méthodologies et Webdesign
  const methods = [
    { name: 'Agile (Scrum / Kanban)', icon: 'uil uil-sitemap' },
    { name: 'Adobe XD', icon: 'uil uil-adobe' },
    { name: 'Photoshop', icon: 'uil uil-pen' },
    { name: 'Illustrator', icon: 'uil uil-illustration' },
  ];
  </script>
  
  <style scoped lang="scss">
  .skills__icon {
    color: #dc3545; // Rouge pour les icônes
  }
  
  .skills__content {
    transition: all 0.3s ease-in-out;
  
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }
  }
  </style>
  