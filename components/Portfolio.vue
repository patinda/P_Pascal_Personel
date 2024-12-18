<template>
    <!--==================== PORTFOLIO ====================-->
    <section class="portfolio section text-center" id="portfolio">
      <div class="container">
        <h2 class="section__title mb-3">{{ $t('portfolio.title') }}</h2>
        <span class="section__subtitle d-block mb-5">{{ $t('portfolio.subtitle') }}</span>
  
        <!-- Bootstrap Carousel -->
        <div id="portfolioCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(project, index) in portfolioProjects"
              :key="index"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <div class="portfolio__content text-center">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="portfolio__img img-fluid rounded mb-3"
                />
                <h3 class="portfolio__title mb-2">{{ project.title }}</h3>
                <p class="portfolio__description mb-4">{{ project.description }}</p>
  
                <!-- Bouton dynamique -->
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="btn btn-danger text-white px-4 py-2"
                >
                  {{ $t('portfolio.viewSite') }}
                </a>
                <button
                  v-else
                  class="btn btn-danger text-white px-4 py-2"
                  @click="openVideoModal(project.video)"
                >
                  {{ $t('portfolio.viewDemo') }}
                </button>
              </div>
            </div>
          </div>
  
          <!-- Navigation -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" style="background-color: red;"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#portfolioCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" style="background-color: red;"></span>
          </button>
        </div>
  
        <!-- MODAL POUR LA VIDÉO -->
        <div v-if="isVideoModalOpen" class="modal show d-block" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" @click="closeVideoModal"></button>
              </div>
              <div class="modal-body">
                <video controls autoplay class="w-100">
                  <source :src="videoUrl" type="video/mp4" />
                  {{ $t('portfolio.videoNotSupported') }}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Données dynamiques des projets avec traduction dans computed
const portfolioProjects = computed(() => [
  {
    image: 'https://res.cloudinary.com/dkztnapze/image/upload/v1734478809/portfolio/3_tgcpy9.png',
    title: t('portfolio.project1.title'),
    description: t('portfolio.project1.description'),
    video: 'https://res.cloudinary.com/dkztnapze/video/upload/v1734476663/portfolio/4_oxodvi.mp4',
  },
  {
    image: 'https://res.cloudinary.com/dkztnapze/image/upload/v1734478811/portfolio/5_scsali.png',
    title: t('portfolio.project2.title'),
    description: t('portfolio.project2.description'),
    video: 'https://res.cloudinary.com/dkztnapze/video/upload/v1734476644/portfolio/3_aec9yi.mp4',
  },
  {
    image: 'https://res.cloudinary.com/dkztnapze/image/upload/v1734478810/portfolio/4_jawi2x.png',
    title: t('portfolio.project3.title'),
    description: t('portfolio.project3.description'),
    video: 'https://res.cloudinary.com/dkztnapze/video/upload/v1734476716/portfolio/1_knsrq2.mp4',
  },
  {
    image: 'https://res.cloudinary.com/dkztnapze/image/upload/v1734478816/portfolio/2_zemsga.png',
    title: t('portfolio.project4.title'),
    description: t('portfolio.project4.description'),
    video: 'https://res.cloudinary.com/dkztnapze/video/upload/v1734476716/portfolio/1_knsrq2.mp4',
  },
  {
    image: 'https://res.cloudinary.com/dkztnapze/image/upload/v1734478812/portfolio/1_vbzdxu.png',
    title: t('portfolio.project5.title'),
    description: t('portfolio.project5.description'),
    link: 'https://forgelogistics.africa/',
  },
]);

// Modal vidéo
const isVideoModalOpen = ref(false);
const videoUrl = ref('');

const openVideoModal = (url) => {
  videoUrl.value = url;
  isVideoModalOpen.value = true;
};

const closeVideoModal = () => {
  videoUrl.value = '';
  isVideoModalOpen.value = false;
};
</script>

  
  <style scoped>
  .portfolio__img {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-size: 50%;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
  </style>
  