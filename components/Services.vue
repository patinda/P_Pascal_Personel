<template>
    <!--==================== SERVICES ====================-->
    <section class="services section" id="services">
      <!-- Titre principal -->
      <h2 class="section__title">{{ $t('services.title') }}</h2>
      <span class="section__subtitle">{{ $t('services.subtitle') }}</span>
  
      <!-- Conteneur des services -->
      <div class="services__container container_portfolio grid">
        <!-- Service -->
        <div
          v-for="(service, index) in services"
          :key="index"
          class="services__content"
        >
          <div>
            <i :class="service.icon" class="services__icon"></i>
            <h3 class="services__title" v-html="service.title"></h3>
          </div>
          <span
            class="button button--flex button--small button--link services__button"
            data-bs-toggle="modal"
            data-bs-target="#serviceModal"
            @click="openModal(service)"
          >
            {{ $t('services.learnMore') }}
            <i class="uil uil-arrow-right button__icon"></i>
          </span>
        </div>
      </div>
  
      <!-- Bootstrap Modal -->
      <div
        class="modal fade"
        id="serviceModal"
        tabindex="-1"
        aria-labelledby="serviceModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="serviceModalLabel" v-html="currentServiceTitle"></h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ul>
                <li
                  v-for="(detail, idx) in currentServiceDetails"
                  :key="idx"
                  class="mb-2"
                >
                  <i class="uil uil-check-circle me-2 text-danger"></i>
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // Vue i18n
  const { t } = useI18n();
  
  // Gestion des modales
  const currentServiceTitle = ref('');
  const currentServiceDetails = ref([]);
  
  const openModal = (service) => {
    currentServiceTitle.value = service.title;
    currentServiceDetails.value = service.details;
  };
  
  // Données des services avec `computed` pour traductions dynamiques
  const services = computed(() => [
    {
      icon: 'uil uil-web-grid',
      title: t('services.uiux.title'),
      details: [
        t('services.uiux.detail1'),
        t('services.uiux.detail2'),
        t('services.uiux.detail3'),
        t('services.uiux.detail4'),
      ],
    },
    {
      icon: 'uil uil-arrow',
      title: t('services.frontend.title'),
      details: [
        t('services.frontend.detail1'),
        t('services.frontend.detail2'),
        t('services.frontend.detail3'),
        t('services.frontend.detail4'),
      ],
    },
    {
      icon: 'uil uil-pen',
      title: t('services.backend.title'),
      details: [
        t('services.backend.detail1'),
        t('services.backend.detail2'),
        t('services.backend.detail3'),
        t('services.backend.detail4'),
      ],
    },
  ]);
  </script>
  