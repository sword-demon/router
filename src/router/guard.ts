// 路由守卫拦截

import store, { IData } from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
    // 构造函数传入router对象
    constructor(private router: Router) {}
    public run() {
        // console.log(this.router)
        this.router.beforeEach((to, from, next) => {
            // 获取token
            let token = store.get('token')
            console.log(token)
            // 认为没有token就是没有登录的状态
            // console.log(to.meta)
            // 需要对登录的路由进行验证
            if (this.isLogin(to, token) === false) {
                return { name: 'login' }
            }
        })
    }

    private isLogin(route: RouteLocationNormalized, token: any) {
        // true : 验证通过
        return Boolean(!route.meta.auth || (route.meta.auth && token?.token))
    }
}
export default (router: Router) => {
    new Guard(router).run()
}
