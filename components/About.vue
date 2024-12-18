<template>
    <!--==================== ABOUT ====================-->
    <section class="about section" id="about">
      <!-- Titre de section -->
      <h2 class="section__title">{{ $t('about.title') }}</h2>
      <span class="section__subtitle">{{ $t('about.subtitle') }}</span>
  
      <!-- Contenu principal -->
      <div class="about__container container_portfolio grid">
        <!-- Image -->
        <img
          src="https://res.cloudinary.com/dkztnapze/image/upload/v1734476104/portfolio/about_pla1tm.jpg"
          alt="Patinda Pascal KABORE"
          class="about__img"
        />
  
        <!-- Texte et bouton -->
        <div class="about__data">
          <p class="about__description">{{ $t('about.description') }}</p>
  
          <div class="about__buttons">
            <a
            :href="cvLink"
      target="_blank"
      
      class="button button--flex"
            >
              {{ $t('about.download') }}
              <i class="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Lien vers le CV
  const cvLink = 'https://drive.google.com/file/d/1frmUdYfrK2TNAjtGlxb2tLEWvg1elkhu/view?usp=sharing';
  </script>
  