import _ from 'lodash'
import ViteEnv from '../types/viteEnv'

// 解析env环境变量
export default function parseEnv(env: Record<string, any>): ViteEnv {
    // console.log(env)
    const envs: any = _.cloneDeep(env)
    Object.entries(env).forEach(([key, value]) => {
        // 将字符串转换为布尔类型
        if (value == 'true' || value == 'false') {
            envs[key] = value == 'true' ? true : false
        }
        // 将字符串数值转换为数字
        else if (/^\d+$/.test(value)) {
            envs[key] = Number(value)
        } else if (value == 'null') {
            envs[key] = null
        } else if (value == 'undefined') {
            envs[key] = undefined
        }
    })
    // 4507条数据
    return envs
}

// type RR<T extends keyof any, B> = {
// 	[P int T]: B
// }
