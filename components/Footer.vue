<template>
    <!--==================== FOOTER ====================-->
    <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container_portfolio grid">
          <!-- Titre et Sous-titre -->
          <div>
            <h1 class="footer__title">{{ $t('footer.title') }}</h1>
            <span class="footer__subtitle">{{ $t('footer.subtitle') }}</span>
          </div>
  
          <!-- Liens de navigation -->
          <ul class="footer__links">
            <li>
              <a href="#services" class="footer__link">{{ $t('footer.services') }}</a>
            </li>
            <li>
              <a href="#portfolio" class="footer__link">{{ $t('footer.portfolio') }}</a>
            </li>
            <li>
              <a href="#contact" class="footer__link">{{ $t('footer.contact') }}</a>
            </li>
          </ul>
  
          <!-- Réseaux sociaux -->
          <!-- <div class="footer__socials">
            <a href="http://facebook.com" target="_blank" class="footer__social">
              <i class="uil uil-facebook"></i>
            </a>
            <a href="http://instagram.com" target="_blank" class="footer__social">
              <i class="uil uil-instagram"></i>
            </a>
            <a href="http://twitter.com" target="_blank" class="footer__social">
              <i class="uil uil-twitter-alt"></i>
            </a>
          </div> -->
        </div>
  
        <!-- Copyright -->
        <p class="footer__copy">
          &#169; {{ currentYear }} {{ $t('footer.copyright') }}
        </p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Année dynamique
  const currentYear = ref(new Date().getFullYear());
  </script>
  
  