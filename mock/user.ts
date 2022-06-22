// test.ts

import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/info',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '请求成功',
                type: 'success',
                result: {
                    name: '测试数据',
                    age: 18,
                    avatar: 'avatar/1.jpg',
                },
            }
        },
    },
    {
        url: '/api/post',
        method: 'post',
        timeout: 2000,
        response: () => {
            return {
                code: 200,
                message: '登录成功',
                type: 'success',
                result: {
                    token: Random.string(10),
                },
            }
        },
    },
] as MockMethod[]
