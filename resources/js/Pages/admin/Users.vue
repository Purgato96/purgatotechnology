<script setup>
import GuestAdmin from '@/Layouts/GuestAdmin.vue'
defineOptions({ layout: GuestAdmin });
import { router } from '@inertiajs/vue3';

defineProps({
    users: Array
});

const deleteUser = (id) => {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
        router.delete(route('admin.users.destroy', id));
    }
};
</script>

<template>
    <Head>
        <title>Usuários Cadastrados</title>
    </Head>

    <h1>Listagem de Usuários</h1>
    <ul>
        <li v-for="user in users" :key="user.id">
            <div>
                #{{ user.id }} {{ user.name }} - {{ user.email }}
                <!-- Botões para edição e exclusão -->
                <button class="rounded-md bg-sky-600 hover:bg-sky-900 text-white px-2 py-1 ml-2"
                        @click="router.visit(route('admin.users.edit', user.id))">
                    Editar
                </button>
                <button class="rounded-md bg-red-600 hover:bg-red-900 text-white px-2 py-1 ml-2"
                        @click="deleteUser(user.id)">
                    Excluir
                </button>
            </div>
        </li>
    </ul>

    <!-- Botão para criar novo usuário -->
    <button class="rounded-md bg-sky-600 hover:bg-sky-900 text-white px-4 py-2 mt-4"
            @click="router.visit(route('admin.users.create'))">
        Adicionar Usuário
    </button>
</template>

<style scoped>

</style>
