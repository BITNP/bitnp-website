import {createRouter,createWebHashHistory} from 'vue-router'

const routes =[
    {path:'/',name:'home',component:()=>{import('/src/views/home/home.vue')}},
    {path: '/admin',name:'admin' ,component:()=>import('/src/views/admin/admin.vue')}
];

const router = createRouter({
   history:createWebHashHistory(),
    routes
});

export default router;