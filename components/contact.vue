<template>
    <!--==================== CONTACT ME ====================-->
    <section id="contact" class="contact section">
      <div class="container text-center">
        <!-- Titre principal -->
        <h2 class="section__title mb-3">{{ $t('contact.title') }}</h2>
        <span class="section__subtitle d-block mb-5">{{ $t('contact.subtitle') }}</span>
  
        <!-- Informations de Contact -->
        <div class="row gy-4 justify-content-center">
          <!-- Phone Information -->
          <div class="col-12 col-md-4">
            <div class="contact__information p-4 border rounded shadow-sm h-100 d-flex flex-column">
              <i class="uil uil-phone-alt contact__icon mb-3 fs-2"></i>
              <h3 class="contact__title mb-2">{{ $t('contact.phone') }}</h3>
              <span class="contact__subtitle text-truncate">
                +226 77990754 <br />
                +226 79190439
              </span>
            </div>
          </div>
  
          <!-- Email Information -->
          <div class="col-12 col-md-4">
            <div class="contact__information p-4 border rounded shadow-sm h-100 d-flex flex-column">
              <i class="uil uil-envelope contact__icon mb-3 fs-2"></i>
              <h3 class="contact__title mb-2">{{ $t('contact.email') }}</h3>
              <span class="contact__subtitle text-truncate">
                Lwpspatinda2@gmail.com
              </span>
            </div>
          </div>
  
          <!-- Location Information -->
          <div class="col-12 col-md-4">
            <div class="contact__information p-4 border rounded shadow-sm h-100 d-flex flex-column">
              <i class="uil uil-map-marker contact__icon mb-3 fs-2"></i>
              <h3 class="contact__title mb-2">{{ $t('contact.location') }}</h3>
              <span class="contact__subtitle text-truncate">
                Ouagadougou, Burkina Faso
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  // Vue i18n
  const { t } = useI18n();
  </script>
  
  <style scoped lang="scss">
  .contact__icon {
    font-size: 2rem; /* Taille des icônes */
  }
  
  .contact__information {
    height: 100%; /* Garantit que toutes les cartes ont la même hauteur */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    overflow: hidden; /* Empêche le contenu de déborder */
  
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  }
  
  .contact__title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .contact__subtitle {
    font-size: 1rem;
    white-space: nowrap; /* Empêche les textes longs de s'étaler */
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  </style>
  