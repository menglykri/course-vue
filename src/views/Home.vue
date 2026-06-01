<script>
    import FoodOfferCard from '../components/FoodOfferCard.vue';
    import Menu from './Menu.vue';
    export default {
        components: {
            FoodOfferCard,
            Menu
        }
    }
</script>

<template lang="html">
    <div>
        <!-- Header content -->
        <div class="container mx-auto px-32 py-24 header">
            <h1 class="italic text-6xl text-white font-bold mb-5">Delicious Food, Delivered To You</h1>
            <p class="text-lg text-white mb-10">
                Choose your favorite meal from our broad selection of available meals and enjoy<br> a delicious lunch or dinner at home.
                We also deliver your order directly to your doorstep,<br> so you can enjoy your meal without any hassle.
            </p>
            <button class="btn-primary font px-5 py-2.5 rounded-full uppercase font-medium">Order Now</button>
        </div>
        <FoodOfferCard />
        <Menu />
    </div>
</template>

<style lang="css">
    .header{
        background-image: url('../assets/image.png');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100vh;
    }
</style>