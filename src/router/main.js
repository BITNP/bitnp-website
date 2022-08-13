import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/admin/admin.vue')
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import('@/views/about-us/AboutUsView.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;