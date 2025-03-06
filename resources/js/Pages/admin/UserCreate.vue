<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import GuestAdmin from '@/Layouts/GuestAdmin.vue';


defineOptions({ layout: GuestAdmin }); // Define o layout do componente

// Variáveis reativas para o formulário (nome, email, senha)
const name = ref('');
const email = ref('');
const password = ref('');

// Função para salvar o usuário
function saveUser() {
    // Monta o payload a ser enviado para o back-end
    const payload = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    // Exibe no console para debug
    console.log('Enviando dados:', payload);

    // Dispara a requisição POST para criar o usuário
    router.post(route('admin.users.store'), payload, {
        onSuccess: () => {
            alert('Usuário criado com sucesso!');
            // Redireciona o usuário, se necessário (exemplo: lista de usuários)
            router.visit(route('admin.users.index'));
        },
        onError: (errors) => {
            console.error('Erro ao criar usuário:', errors);
        },
    });
}
</script>

<template>
    <Head>
        <title>Criar Usuário</title>
    </Head>
    <form @submit.prevent="saveUser">
        <!-- Nome -->
        <div>
            <label class="block text-sm font-medium text-gray-700" for="name">Nome</label>
            <input
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                id="name"
                name="name"
                type="text"
                v-model="name"
                required
            />
        </div>

        <!-- E-mail -->
        <div>
            <label class="block text-sm font-medium text-gray-700" for="email">E-mail</label>
            <input
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                id="email"
                name="email"
                type="email"
                v-model="email"
                required
            />
        </div>

        <!-- Senha -->
        <div>
            <label class="block text-sm font-medium text-gray-700" for="password">Senha</label>
            <input
                class="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                id="password"
                name="password"
                type="password"
                v-model="password"
                required
            />
        </div>

        <!-- Botão de Enviar -->
        <button
            class="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            type="submit"
        >
            Criar Usuário
        </button>
    </form>
</template>
