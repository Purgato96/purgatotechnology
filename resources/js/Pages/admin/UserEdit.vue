<script setup>
import { ref, toRefs } from 'vue';
import { router } from '@inertiajs/vue3';
import GuestAdmin from '@/Layouts/GuestAdmin.vue'
defineOptions({ layout: GuestAdmin });

// Recebendo parâmetros caso seja edição
const props = defineProps({
    user: {
        type: Object,
        default: () => ({ id: null, name: '', email: '', password: '' }),
    },
});

// Converte user para reatividade correta
const { name, email } = toRefs(props.user);
const password = ref('');

// Função para salvar (nova criação ou edição)
function saveUser() {
    const payload = { name: name.value, email: email.value };

    // Inclui a senha apenas na criação
    if (password.value) payload.password = password.value;

    if (props.user.id) {
        // Atualiza o usuário existente
        router.put(route(`admin.users.update`, props.user.id), payload);
    } else {
        // Cria um novo usuário
        router.post(route('admin.users.create'), payload);
    }
}
</script>

<template>
    <Head>
        <title>Editando Usuário</title>
    </Head>
    <form @submit.prevent="saveUser">
        <div>
            <label class="block text-sm font-medium text-gray-700" for="name">Nome</label>
            <input class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" id="name" v-model="name" type="text" required />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
            <input class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" id="email" v-model="email" type="email" required />
        </div>

        <div v-if="!props.user.id">
            <label class="block text-sm font-medium text-gray-700" for="password">Senha</label>
            <input class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" id="password" v-model="password" type="password" required />
        </div>

        <button class="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700" type="submit">{{ props.user.id ? 'Atualizar' : 'Criar' }}</button>
    </form>
</template>
