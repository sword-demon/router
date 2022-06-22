import _ from 'lodash'

class Helper {
    public env = {} as ImportMetaEnv
    constructor() {
        this.env = this.getEnvs()
    }

    private getEnvs(): ImportMetaEnv {
        const envs: any = _.cloneDeep(import.meta.env)
        Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
            // 将字符串转换为布尔类型
            if (value == 'true' || value == 'false') {
                envs[key] = value == 'true' ? true : false
            }
            // 将字符串数值转换为数字
            else if (/^\d+$/.test(value)) {
                envs[key] = Number(value)
                // Number boolean
            } else if (value == 'null') envs[key] = null
            else if (value == 'undefined') envs[key] = undefined
        })
        return envs
    }
}

const helper = new Helper()
const env = helper.env
export default helper

export { env }
