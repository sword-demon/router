// 插件入口管理文件

import { App } from 'vue'
import { setUpTailWindCss } from './tailwindcss'
import _ from 'lodash'

export function setUpPlugins(app: App) {
    autoRegisterComponent(app)
    setUpTailWindCss()
}

// 自动注册全局组件
function autoRegisterComponent(app: App) {
    const components = import.meta.globEager('../components/form/*.vue')
    console.log(components)
    Object.keys(components).forEach(key => {
        // 得到组件名称
        const name = key.split('/').pop()?.split('.').shift() as string
        // console.table(_.camelCase(name))
        // 注册
        // 现在是组件名称 xx-xxx 好使
        // 现在让驼峰方式也好使
        app.component(_.camelCase(name), components[key].default)
    })
}
