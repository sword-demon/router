// 插件管理

import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import ViteEnv from '../../types/viteEnv'
import { setUpMockPlugin } from './mock'

export default function setUpPlugin(isBuild: boolean, env: ViteEnv) {
    const plugins: Plugin[] = [vue()]
    // 启动 mock 插件
    plugins.push(setUpMockPlugin(isBuild))
    return plugins
}
