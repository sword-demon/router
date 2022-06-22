<script setup lang="ts">
import hdLink from "@/components/form/hd-link.vue";
import { reactive } from "vue";

const form = reactive<{ account: number | string; password: string }>({
    account: "",
    password: "",
});
</script>

<template>
    <div
        class="
            bg-slate-300
            h-screen
            flex
            justify-center
            items-start
            md:items-center
            p-5
            md:p-0
        "
    >
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
                md:translate-y-0
            "
        >
            <div class="p-6">
                <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
                <div class="mt-8">
                    <hdInput
                        v-model="form.account"
                        placeholder="请输入邮箱或者手机号"
                    />

                    <hdInput
                        v-model="form.password"
                        placeholder="请输入密码"
                        class="mt-5"
                    />
                </div>
                <button class="hd-button mt-5">登录</button>
                <div class="flex gap-2 justify-center mt-5">
                    <hdLink />
                    <a href="" class="text-xs text-gray-700">会员注册</a>
                    <a href="" class="text-xs text-gray-700">找回密码</a>
                </div>
            </div>
            <div class="hidden md:block">
                <img
                    src="/images/login.jpg"
                    class="h-96 w-full object-over"
                    alt="login"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hd-input {
    @apply border border-gray-200 placeholder:text-xs w-full
                            rounded-sm
                            py-1
                            px-2
                            outline-none
                            focus:ring-2
                            ring-offset-2 ring-violet-600
                            duration-300
                            focus:border-white
                            mt-5;
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
