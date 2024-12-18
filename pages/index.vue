<template>
    <!-- Header -->
    <Header />
    <main class="main">
    <Home />
    <About/>
    <Skills />
    <Services />

    <Portfolio />
    <Contact />
  </main>
    <!-- Footer -->
    <Footer />
  
</template>

<script setup>
import Header from "~/components/Header.vue";
import Skills from "~/components/Skills.vue";
import Portfolio from "~/components/Portfolio.vue";
import Home from "~/components/Home.vue";
import About from "~/components/About.vue";
import Footer from "~/components/Footer.vue";
import Services from "~/components/Services.vue";
import Contact from "~/components/contact.vue";


</script>
