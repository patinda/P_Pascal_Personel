<template>
    <!--==================== HEADER ====================-->
    <header class="header" id="header">
      <nav class="nav_header container_portfolio">
        <!-- Logo -->
        <a href="#" class="nav__logo">Pascal .P.K</a>
  
        <!-- Menu -->
        <div class="nav__menu" :class="{ 'show-menu': showMenu }" id="nav-menu">
          <ul class="nav__list grid">
            <li v-for="item in menuItems" :key="item.id" class="nav__item">
              <a :href="item.href" class="nav__link" :class="{ 'active-link': item.active }">
                <i :class="item.icon" class="nav__icon"></i>{{ $t(item.text) }}
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close" @click="toggleMenu"></i>
        </div>
  
        <!-- Boutons (Langue, Thème, Menu Toggle) -->
        <div class="nav__btns">
          <!-- Switch de langue -->
          <div class="language-switch">
            <img
              src="https://flagcdn.com/w40/fr.png"
              alt="Français"
              v-if="currentLanguage === 'en'"
              @click="changeLanguage('fr')"
              class="language-flag"
            />
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="Anglais"
              v-if="currentLanguage === 'fr'"
              @click="changeLanguage('en')"
              class="language-flag"
            />
          </div>
  
          <!-- Thème (Light/Dark) -->
          <i
            style="margin: 10px; font-size: 20px; cursor: pointer;"
            class="uil"
            :class="isDark ? 'uil-sun' : 'uil-moon'"
            @click="toggleTheme"
            id="theme-button"
            ></i>

  
          <!-- Menu Toggle -->
          <div class="nav__toggle" style="margin: 10px; font-size: 20px;" @click="toggleMenu" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // Changement de langue
  const { locale } = useI18n();
  const currentLanguage = ref(locale.value);
  
  const changeLanguage = (lang) => {
    locale.value = lang;
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
  };
  
  // Gestion du thème
  const isDark = ref(false);
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.body.classList.toggle('dark-theme', isDark.value);
  };
  
  // Menu responsive
  const showMenu = ref(false);
  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };
  
  // Navigation items
  const menuItems = [
    { id: 1, href: '#home', text: 'header.home', icon: 'uil uil-estate', active: true },
    { id: 2, href: '#about', text: 'header.about', icon: 'uil uil-user' },
    { id: 3, href: '#skills', text: 'header.skills', icon: 'uil uil-file-alt' },
    { id: 4, href: '#services', text: 'header.services', icon: 'uil uil-briefcase' },
    { id: 5, href: '#portfolio', text: 'header.portfolio', icon: 'uil uil-scenery' },
    { id: 6, href: '#contact', text: 'header.contact', icon: 'uil uil-message' },
  ];
  
  // Initialisation
  onMounted(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    changeLanguage(savedLang);
  });
  </script>
  
  <style scoped>
  
  </style>
  