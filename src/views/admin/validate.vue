<script setup lang="ts">
import V from "@/plugins/validate";

// defineRule("email", email);
// defineRule("required", required);

// 配置多语言环境
// configure({
// generateMessage: localize("zh_CN", zh_CN),
// });

const { handleSubmit, errors } = V.useForm({
    initialValues: {
        username: "向军",
        password: "",
    },
    validationSchema: {
        username: V.yup.string().email().required().label("账号"),
        password: {
            required: true,
        },
    },
});

const { value: usernameValue } = V.useField(
    "username",
    {},
    { label: "用户名" }
);
const { value: passwordValue } = V.useField("password", {}, { label: "密码" });

// 必须经过handleSubimt处理才能提交
const onSubmit = handleSubmit((values) => {
    // values 表单项
    console.log(values);
    alert("验证通过");
});
</script>

<template>
    <form @submit="onSubmit">
        <section>
            <input type="text" v-model="usernameValue" />
            <p class="error" v-if="errors.username">{{ errors.username }}</p>
        </section>
        <section>
            <input type="text" v-model="passwordValue" />
            <p class="error" v-if="errors.password">{{ errors.password }}</p>
        </section>

        <button>提交</button>
    </form>
</template>

<style lang="scss" scoped>
div {
    @apply w-screen h-screen bg-gray-500;
    input {
        @apply border p-2 rounded-md border-violet-500 outline-none;
    }
    button {
        @apply border bg-gray-600 px-4 rounded-md text-white;
    }
    .error {
        @apply bg-red-600 border border-gray-800 p-2 text-white;
    }
}
</style>
