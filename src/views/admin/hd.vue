<script setup lang="ts">
// import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import { ref } from "vue";
// import { required, min, max, confirmed, email } from "@vee-validate/rules";
// import { localize } from "@vee-validate/i18n";
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
// import { defineRules } from "@/plugins/validate";
import V from "@/plugins/validate";

const { Form, Field } = V;

// defineRules();

const account = ref("");

// 自定义邮箱验证规则
// const emailRule = (value) => {
//     return /@/.test(value) ? true : "邮箱格式错误";
// };

// defineRule("email", email);
// defineRule("required", required);

// 配置多语言环境
// configure({
// generateMessage: localize("zh_CN", zh_CN),
// });

const onSubmit = (values) => {
    // values 表单项
    console.log(values);
    alert("验证通过");
};
</script>

<template>
    <Form @submit="onSubmit">
        <Field
            name="account"
            label="账号"
            :rules="{ email: true, required: true }"
            :validate-on-input="true"
            #default="{ field, errorMessage }"
        >
            <input type="text" v-bind="field" v-model="account" />
            <hr />
            <p>{{ errorMessage }}</p>
        </Field>
        <hr />
        <button>提交表单</button>
    </Form>
</template>

<style lang="scss" scoped>
div {
    @apply flex w-screen h-screen justify-center items-center bg-gray-500;
    input {
        @apply border p-2 rounded-md border-violet-500 outline-none;
    }
    button {
        @apply border bg-gray-600 px-4 rounded-md text-white;
    }
}
</style>
