import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Menu from '../views/Menu.vue';
import Books from '../views/Books.vue';

    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        },
        {
            path: '/books',
            name: 'Books',
            component: Books
        }
    ]

    const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
    })

    export default router