import { RouteRecordRaw } from 'vue-router'

// 路由
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue'),
    },
] as RouteRecordRaw[]

export default routes
