/**
 * 自定义本地存储加超时时间工具
 */

import { date } from 'yup'

interface IData {
    expire: number
    [key: string]: any
}

export default {
    set(key: string, data: IData) {
        // 如果你设置了过期时间
        if (data.expire) {
            data.expire = new Date().getTime() + data.expire
        }
        localStorage.setItem(key, JSON.stringify(data))
    },
    get(key: string): IData | null {
        const item = localStorage.getItem(key)
        if (item) {
            // 转换成对象
            const data = JSON.parse(item)
            const expire = data?.expire

            // 如果小于当前时间
            if (expire < new Date().getTime()) {
                // 删掉数据
                localStorage.removeItem(key)
                return null
            } else {
                return data
            }
        }
        return null
    },
}
