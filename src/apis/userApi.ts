import { http } from '@/plugins/axios'

export interface User {
    name: string
    age: number
    avatar: string
}

export interface LoginInterface {
    token: string
}

class userApi {
    info() {
        return http.request<User>({
            url: `info`,
        })
    }

    login(data: any) {
        return http.request<LoginInterface>({
            url: `login`,
            method: 'post',
            data: data,
        })
    }
}

export default new userApi()
