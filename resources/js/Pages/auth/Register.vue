<script setup>
import Guest from '@/Layouts/Guest.vue'
defineOptions({ layout: Guest });
</script>

<template>
    <Head>
        <title>Login</title>
    </Head>

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-gray-800">Login</h2>
            <form @submit.prevent="submit">
                <div class="mt-4">
                    <label class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="form.email" type="email" class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
                </div>
                <div class="mt-4">
                    <label class="block text-sm font-medium text-gray-700">Senha</label>
                    <input v-model="form.password" type="password" class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
                </div>
                <div v-if="errors.length" class="mt-3 text-red-500">
                    <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
                </div>
                <button type="submit" class="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    Registrar
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
