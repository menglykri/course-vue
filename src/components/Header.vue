
<script>
    import { RouterView } from 'vue-router';
</script>
<style lang="css">
    .bg-color {
        background-color: #0c0c0c;
    }
    .router-link-exact-active {
        color: red;
    }
</style>
<template lang="html">
    <div>
        <!-- Header navigation -->
        <div class="container mx-auto flex justify-between px-32 py-5 bg-color">
            <h1 class="italic text-5xl text-white">Fast</h1>

            <nav class="font text-base text-white flex items-center gap-8 uppercase font-medium">
                <router-link :to="{ name: 'Home' }">Home</router-link>
                <router-link :to="{ name: 'About' }">About</router-link>
                <router-link :to="{ name: 'Menu' }">Menu</router-link>
                <router-link :to="{ name: 'Books' }">Book Table</router-link>
            </nav>

            <div class="flex gap-4">
                <button class="btn-primary font px-5 py-1.5 rounded-full uppercase font-medium">Contact Us</button>
            </div>
        </div>
    </div>
</template>
