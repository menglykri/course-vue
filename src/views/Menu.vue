<style>
    .slide-top {
        -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
</style>
<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      
      <header class="text-center mb-10">
        <h2 class="text-4xl font-serif italic text-gray-900 font-semibold">
          Our Menu
        </h2>
      </header>

      <nav class="flex justify-center space-x-2 md:space-x-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ease-in-out',
            activeCategory === category
              ? 'bg-[#1e222b] text-white'
              : 'text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </nav>

      <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
        <article
          v-for="item in filteredMenu"
          :key="item.id"
          class="bg-[#1e222b] rounded-2xl overflow-hidden shadow-lg group flex flex-col justify-between"
          data-aos="zoom-in-up"
          :data-aos-delay="index * 100"
        >
          <div class="bg-[#f1f2f3] p-4 flex justify-center items-center relative rounded-bl-4xl">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-40 h-40 object-contain transform group-hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow-xl"
            />
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold text-white mb-2">
                {{ item.name }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {{ item.description }}
              </p>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-white font-medium text-lg">
                ${{ item.price }}
              </span>
              <button
                @click="addToCart(item)"
                class="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1e222b] focus:ring-[#ffbe33]"
                aria-label="Add to cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5.672-1.5 1.5-1.5 1.5.671 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm6.25-13h-14.33l-.745-3h-2.675v2h1.329l2.746 11h12.181v-2h-10.43l-.499-2h11.454l1.973-8z"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      </main>

    </div>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    // Categories matching the top navigation bar
    const categories = ref(['All', 'Burger', 'Pizza', 'Pasta', 'Fries'])
    const activeCategory = ref('All')

    // Helper function to resolve dynamic local asset paths in Vite
    const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href
    }
    // Mock Data mimicking the image layout
    const menuItems = ref([
    {
        id: 1,
        name: 'Delicious Pizza',
        category: 'Pizza',
        price: 20,
        description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: getImageUrl('f3.png')
    },
    {
        id: 2,
        name: 'Delicious Burger',
        category: 'Burger',
        price: 15,
        description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: getImageUrl('f2.png')
    },
    {
        id: 3,
        name: 'Pasta with Tomato Sauce',
        category: 'Pasta',
        price: 17,
        description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: getImageUrl('f4.png')
    },
    {
        id: 4,
        name: 'French Fries',
        category: 'Fries',
        price: 10,
        description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        image: getImageUrl('f5.png')
    }
    ])

    // Filter logic based on selected category tab
    const filteredMenu = computed(() => {
    if (activeCategory.value === 'All') {
        return menuItems.value
    }
    return menuItems.value.filter(item => item.category === activeCategory.value)
    })

    // Add to cart placeholder method
    const addToCart = (item) => {
    console.log(`Added ${item.name} to cart!`)
    }
</script>