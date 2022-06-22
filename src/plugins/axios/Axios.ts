import axios, { AxiosRequestConfig } from 'axios'

export default class Axios {
    private instance

    // 传递axios的一些配置
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)

        // 调用拦截器
        this.interceptors()
    }

    public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return new Promise(async (resolve, reject) => {
            try {
                // this.instance.request<ResponseResult<T>>
                const response = await this.instance.request<D>(config)
                // 减少层级返回 直接返回到data
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    private interceptors() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    // 请求拦截器
    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            config => {
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )
    }

    // 响应拦截器
    private interceptorsResponse() {
        this.instance.interceptors.response.use(
            response => {
                return response
            },
            error => {
                return Promise.reject(error)
            }
        )
    }
}
