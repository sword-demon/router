<script setup lang="ts">
import hdLink from "@/components/form/hd-link.vue";
import { reactive } from "vue";
import v from "@/plugins/validate";
import userApi from "@/apis/userApi";
import store from "@/utils/store";

const { Form, Field, ErrorMessage } = v;

const onSubmit = async (values: any) => {
    const {
        result: { token },
    } = await userApi.login(values);
    console.log(token);
    // 本地存储token
    // localStorage.setItem("token", token);
    store.set("token", {
        expire: 100,
        token,
    });
};

// 定义需要验证的内容
const schema = v.yup.object({
    account: v.yup.string().email().required().label("账号"),
    password: v.yup.string().required().min(3).label("密码"),
});

const form = reactive<{ account: number | string; password: string }>({
    account: "",
    password: "",
});
</script>

<template>
    <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
        <div
            class="
                w-[720px]
                bg-white
                md:grid
                grid-cols-2
                rounded-md
                shadow-md
                overflow-hidden
                translate-y-32
                md:translate-y-0;
            "
        >
            <div class="p-6 flex flex-col justify-between">
                <div>
                    <h2 class="text-center text-gray-700 text-lg mt-3">
                        会员登录
                    </h2>
                    <div class="mt-8">
                        <Field
                            name="account"
                            class="hd-input"
                            :validate-on-input="true"
                            label="账号"
                            placeholder="请输入账号"
                        />
                        <div v-if="errors.account" class="hd-error">
                            请输入账号
                        </div>
                        <ErrorMessage
                            v-else
                            name="account"
                            as="div"
                            class="hd-error"
                        />
                        <Field
                            name="password"
                            class="hd-input mt-3"
                            :validate-on-input="true"
                            label="密码"
                            placeholder="请输入密码"
                        />
                        <ErrorMessage
                            name="password"
                            as="div"
                            class="hd-error"
                        />
                    </div>
                    <button class="hd-button mt-5">登录</button>
                    <div class="flex justify-center mt-3">
                        <i
                            class="
                                fab
                                fa-weixin
                                bg-green-600
                                text-white
                                rounded-full
                                p-1
                                cursor-pointer
                            "
                        ></i>
                    </div>
                </div>
                <div class="flex gap-2 justify-center mt-5">
                    <hdLink />
                    <a href="" class="text-xs text-gray-700">会员注册</a>
                    <a href="" class="text-xs text-gray-700">找回密码</a>
                </div>
            </div>
            <div class="hidden md:block relative">
                <img
                    src="/images/login.jpg"
                    class="absolute w-full h-full object-over"
                    alt="login"
                />
            </div>
        </div>
    </Form>
</template>

<style lang="scss">
form {
    @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
.hd-button {
    @apply bg-violet-700
                        text-white
                        w-full
                        py-2
                        rounded-md
                        hover:bg-violet-500
                        duration-300;
}
</style>
