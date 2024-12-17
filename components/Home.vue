<template>
    <!--==================== HOME ====================-->
    <section class="home section" id="home">
      <div class="home__container container_portfolio grid">
        <div class="home__content grid">
          <!-- Réseaux sociaux -->
          <div class="home__social">
            <a href="http://linkedin.com/" target="_blank" class="home__social-icon">
              <i class="uil uil-linkedin-alt"></i>
            </a>
            <a href="http://dribble.com" target="_blank" class="home__social-icon">
              <i class="uil uil-dribbble"></i>
            </a>
            <a href="http://github.com" target="_blank" class="home__social-icon">
              <i class="uil uil-github-alt"></i>
            </a>
          </div>
  
          <!-- Image de profil -->
          <div class="home__img">
            <img src="assets/img/perfil.png" alt="Profile Picture" class="home__circle-img" />
          </div>
  
          <!-- Contenu de présentation -->
          <div class="home__data">
            <h1 class="home__title">{{ $t('home.title') }}</h1>
            <h3 class="home__subtitle">{{ $t('home.subtitle') }}</h3>
            <p class="home__description">
              {{ $t('home.description') }}
            </p>
            <a href="#contact" class="button button-flex">
              {{ $t('home.contact') }} <i class="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>
  
        <!-- Bouton Scroll -->
        <div class="home__scroll">
          <a href="#about" class="home__scroll-button button--flex">
            <i class="uil uil-mouse-alt-2 home__scroll-mouse"></i>
            <span class="home__scroll-name">{{ $t('home.scroll') }}</span>
            <i class="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  