<script setup>
  import { ref } from 'vue';
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue';
  import 'primeicons/primeicons.css';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
