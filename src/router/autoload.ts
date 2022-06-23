import { RouteLocationRaw, RouteRecordRaw } from 'vue-router'
import util from '@/utils'

// 自动注册路由
const layouts = import.meta.globEager('../layouts/*.vue')
// console.log(layouts)

// 获取子路由 遍历所有的子目录
const views = import.meta.globEager('../views/**/*.vue')

// 获取布局路由
function getRoutes() {
    const layoutRoutes = [] as RouteRecordRaw[]
    // 遍历 layouts 目录下的文件
    Object.entries(layouts).forEach(([file, module]) => {
        const route = getRouteByModule(file, module)
        route.children = getChildrenRoutes(route)
        layoutRoutes.push(route)
    })
    // console.log(layoutRoutes)

    return layoutRoutes
}

// 获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    // console.log(layoutRoute)
    const routes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            // console.log(file)
            const route = getRouteByModule(file, module)

            routes.push(route)
        }
    })
    return routes
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
    // 三种得到 admin member 的方式 路由名称
    // console.log(file.split('/').pop()?.split('.')[0])
    // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name)
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
    const route = {
        path: `/${name}`,
        name: name.replace('/', '.'),
        component: module.default,
    } as RouteRecordRaw

    // 如果有自定义路由就取自定义路由
    return Object.assign(route, module.default?.route)
}
// console.log(typeof env.VITE_ROUTER_AUTOLOAD)
// 路由自动注册根据配置文件来进行是否自动注册
// console.log(getRoutes())
const routes = util.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : ([] as RouteRecordRaw[])
// console.log(util.env.VITE_ROUTER_AUTOLOAD)
export default routes
