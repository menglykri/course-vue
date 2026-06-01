<template>
  <div class="flex flex-col md:flex-row gap-6 py-16 justify-center bg-gray-100">
    <div 
      v-for="(offer, index) in offers" 
      :key="index"
      class="flex items-center bg-[#222831] text-white rounded-lg p-6 w-full max-w-[500px] shadow-lg relative overflow-hidden h-[200px]"
    >
      <div class="flex-shrink-0 w-36 h-36 rounded-full border-4 border-red-500 overflow-hidden flex items-center justify-center">
        <img 
          :src="offer.image" 
          :alt="offer.title" 
          class="w-full h-full object-cover transform hover:scale-110 transition duration-300"
        />
      </div>

      <div class="ml-6 flex flex-col justify-center">
        <h3 class="italic text-2xl text-white mb-1 tracking-wide">
          {{ offer.title }}
        </h3>
        
        <div class="flex items-baseline mb-3 italic">
          <span class="text-4xl md:text-5xl font-bold tracking-tight">{{ offer.discount }}%</span>
          <span class="text-lg font-medium ml-1 italic text-gray-300">Off</span>
        </div>

        <button 
          @click="handleOrder(offer.id)"
          class="btn-primary text-white font-semibold py-2 px-5 rounded-full flex items-center justify-center gap-2 w-fit transition duration-200 shadow-md"
        >
          Order Now
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mock data simulating the image provided
const offers = ref([
  {
    id: 1,
    title: 'Tasty Thursdays',
    discount: 20,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop' // Placeholder Burger
  },
  {
    id: 2,
    title: 'Pizza Days',
    discount: 15,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop' // Placeholder Pizza
  }
])

const handleOrder = (id) => {
  console.log(`Order placed for item ID: ${id}`)
  // Add your redirection or cart logic here
}
</script>

<style scoped>
/* Importing a cursive font to perfectly match the 'Tasty Thursdays' style */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
</style>