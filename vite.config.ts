import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import parseEnv from './vite/util'
import setUpPlugin from './vite/plugins'

export default ({ command, mode }: ConfigEnv) => {
    // 获取是否在编译中
    const isBuild = command == 'build'
    const root = process.cwd()
    const env = parseEnv(loadEnv(mode, root))
    // console.log(parseEnv(env))
    // console.log(env)
    return {
        // plugins: [vue()],
        resolve: {
            // 定位 src 目录别名
            alias,
        },
        plugins: setUpPlugin(isBuild, env),
    }
}
