// 配置文件类型声明

interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

interface ViteEnv {
    VITE_SOME_KEY: number
    VITE_ROUTER_AUTOLOAD: boolean
    VITE_API_URL: string
}

export default ViteEnv
