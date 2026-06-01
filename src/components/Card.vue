<template>
  <div class="card">
    <img :src="image" :alt="title" class="card-image" />

    <div class="card-body">
      <h2>{{ title }}</h2>

      <p>{{ description }}</p>

      <button @click="handleClick">
        Read More
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String
})

function handleClick() {
  alert(props.title)
}
</script>

<style scoped>
.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

button {
  padding: 10px 15px;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
}
</style>