import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home.vue')
    },
    {
        path: '/home2',
        name: 'home3',
        component:()=>import('../views/home/home3.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/admin/admin.vue')
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import('@/views/about-us/aboutUs.vue')
    },
    {
        path: '/common-links',
        name: 'common-links',
        component: () => import('@/views/common-links/Common-Links.vue')    
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;