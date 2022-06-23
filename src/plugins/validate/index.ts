import rules from '@vee-validate/rules'
import * as veeValidate from 'vee-validate'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json')
import yup from './yup'

// 配置多语言【得放规则验证前面】
veeValidate.configure({
    // 全局在input输入行为发生的时候验证
    // validateOnInput: true
    generateMessage: localize('zh_CN'),
})

// 支持所有规则
Object.keys(rules).forEach(key => {
    // console.table(key)
    veeValidate.defineRule(key, rules[key])
})

const modules = { yup, ...veeValidate }

export default modules
