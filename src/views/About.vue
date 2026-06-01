<template lang="html">
    <div class="background_color container mx-auto px-40 py-20">
        <div class="grid grid-cols-2 gap-10 mb-20">
            <div class="image-about"></div>
            <div class="text-white py-32">
                <h2 class="italic text-4xl font-bold mb-5">About Us</h2>
                <p class="text-lg mb-5">
                    At Fast Food, we are passionate about delivering delicious meals right to your doorstep. 
                    Our mission is to provide a convenient and enjoyable dining experience for our customers. 
                    We believe that good food should be accessible to everyone, and that's why we offer a wide variety of menu options to cater to different tastes and preferences.
                    Whether you're craving a juicy burger, a fresh salad, or a comforting bowl of pasta, we've got you covered. 
                </p>
                <button class="btn-primary font px-5 py-1.5 rounded-full uppercase font-medium">Read More</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="css">
    .background_color {
        background-color: #222831;
    }
    .image-about {
        background-image: url('../assets/about-img.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 150px;
        width: 100%;
        height: 600px;
    }
</style>