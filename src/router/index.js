import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'Home'
    },
    {
        path: '/quran',
        component: () => import('../views/Surah.vue'),
        name: 'Surah'
    },
    {
        path: '/quran/:id',
        component: () => import('../views/DetailSurah.vue'),
        name: 'DetailSurah',
        props: true,
    },
    {
        path: '/waktu_sholat',
        component: () => import('../views/WaktuSholat.vue'),
        name: 'WaktuSholat'
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router