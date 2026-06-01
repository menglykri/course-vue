<template>
  <footer class="bg-[#222831] text-white pt-16 pb-8 px-5 font-sans">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start flex-wrap gap-10">
      
      <div class="flex-1 min-w-[250px] w-full text-center">
        <h3 class="italic text-3xl mb-5 font-bold text-white">Contact Us</h3>
        <div class="space-y-4 text-[0.95rem] text-[#dbdbdb]">
          <p class="flex items-center justify-center gap-2.5">
            <i class="fas fa-map-marker-alt"></i> Location
          </p>
          <p class="flex items-center justify-center gap-2.5">
            <i class="fas fa-phone-alt"></i> Call +01 1234567890
          </p>
          <p class="flex items-center justify-center gap-2.5">
            <i class="fas fa-envelope"></i> demo@gmail.com
          </p>
        </div>
      </div>

      <div class="flex-1 min-w-[250px] w-full text-center">
        <h2 class="italic text-5xl mb-4 font-bold text-white">Feane</h2>
        <p class="text-[0.95rem] leading-relaxed text-[#dbdbdb] mb-6 max-w-md mx-auto">
          Necessary, making this the first true generator on the Internet. 
          It uses a dictionary of over 200 Latin words, combined with
        </p>
        <div class="flex justify-center gap-3">
          <a href="#" aria-label="Facebook" class="w-9 height-9 bg-white text-[#222831] rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:bg-red-500 hover:text-white p-2.5">
            <i class="pi pi-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter" class="w-9 height-9 bg-white text-[#222831] rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:bg-red-500 hover:text-white p-2.5">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="w-9 height-9 bg-white text-[#222831] rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:bg-red-500 hover:text-white p-2.5">
            <i class="pi pi-linkedin"></i>
          </a>
          <a href="#" aria-label="Instagram" class="w-9 height-9 bg-white text-[#222831] rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:bg-red-500 hover:text-white p-2.5">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="#" aria-label="Pinterest" class="w-9 height-9 bg-white text-[#222831] rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:bg-red-500 hover:text-white p-2.5">
            <i class="pi pi-pinterest"></i>
          </a>
        </div>
      </div>

      <div class="flex-1 min-w-[250px] w-full text-center">
        <h3 class="italic text-3xl mb-5 font-bold text-white">Opening Hours</h3>
        <div class="space-y-4 text-[0.95rem] text-[#dbdbdb]">
          <p>Everyday</p>
          <p>10.00 Am -10.00 Pm</p>
        </div>
      </div>

    </div>

    <div class="border-t border-white/10 mt-12 pt-6 text-center text-sm text-[#dbdbdb] leading-loose">
      <p>&copy; {{ currentYear }} All Rights Reserved By Free Html Templates</p>
      <p>&copy; Distributed By ThemeWagon</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>