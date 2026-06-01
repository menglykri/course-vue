<template>
  <div class="max-w-6xl mx-auto p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-6 bg-white rounded-lg shadow-sm">
      
      <div>
        <h2 class="text-3xl font-serif italic mb-6 text-gray-800">Book A Table</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <input 
              v-model="form.name"
              type="text" 
              placeholder="Your Name" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <input 
              v-model="form.phone"
              type="tel" 
              placeholder="Phone Number" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <input 
              v-model="form.email"
              type="email" 
              placeholder="Your Email" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <select 
              v-model="form.guests"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-gray-600"
            >
              <option value="" disabled selected>How many persons?</option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5+">5+ Persons</option>
            </select>
          </div>

          <div>
            <input 
              v-model="form.date"
              type="date" 
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-gray-500"
            />
          </div>

          <div class="pt-2">
            <button 
              type="submit" 
              class="px-12 py-3 bg-[#ffbe33] hover:bg-[#e6a81e] text-white font-medium rounded-full tracking-wide uppercase text-sm shadow-sm transition-colors duration-200"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

      <div class="w-full h-[380px] bg-gray-100 rounded overflow-hidden relative border border-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175393132804!2d-73.99648282424458!3d40.74844447138908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
          class="w-full h-full border-0 grayscale opacity-90 contrast-125"
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive form state
const form = ref({
  name: '',
  phone: '',
  email: '',
  guests: '',
  date: ''
})

// Handle form submission
const handleSubmit = () => {
  console.log('Booking Data Submitted:', { ...form.value })
  alert(`Thank you, ${form.value.name}! Your booking request has been submitted.`)
  
  // Reset form after submission
  form.value = {
    name: '',
    phone: '',
    email: '',
    guests: '',
    date: ''
  }
}
</script>