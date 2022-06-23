import { createApp } from 'vue'

import App from './App.vue'
import { setUpPlugins } from './plugins'
import '@/styles/global.scss'

import router, { setUpRouter } from './router'

async function bootstrap() {
    const app = createApp(App)
    // 设置路由
    setUpRouter(app)
    // 设置插件
    setUpPlugins(app)
    // 等到路由设置完了在加载页面
    await router.isReady()
    app.mount('#app')
}

// 引导初始化
bootstrap()
