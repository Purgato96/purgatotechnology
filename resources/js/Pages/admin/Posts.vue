<script setup>
import GuestAdmin from '@/Layouts/GuestAdmin.vue'; // Layout padrão
defineOptions({ layout: GuestAdmin }); // Define o layout para o componente

import { router } from '@inertiajs/vue3'; // Importa o router do Inertia.js
import { ref } from 'vue'; // Importa reatividade

// Recebe os posts como propriedade enviada pelo Laravel/Inertia
defineProps({
    posts: Array // posts deve ser enviado como uma lista (array)
});

// Função para excluir um post
const deletePost = (id) => {
    if (confirm('Tem certeza que deseja excluir este post?')) {
        router.delete(route('admin.posts.destroy', id), {
            onSuccess: () => {
                alert('Post excluído com sucesso!');
            },
            onError: () => {
                alert('Falha ao excluir o post.');
            }
        });
    }
};
</script>

<template>
    <Head>
        <title>Posts Cadastrados</title>
    </Head>

    <section>
        <h1 class="text-2xl font-bold mb-6">Listagem de Posts</h1>

        <!-- Valida se há posts na lista -->
        <div v-if="posts.length > 0">
            <ul class="divide-y divide-gray-200">
                <li v-for="post in posts" :key="post.id" class="py-4">
                    <div class="flex items-center justify-between">
                        <!-- Dados do post -->
                        <div>
                            <h2 class="text-lg font-semibold">#{{ post.id }} - {{ post.title }}</h2>
                            <p class="text-sm text-gray-600">{{ post.content }}</p>
                        </div>

                        <!-- Botões de ação -->
                        <div>
                            <button
                                class="rounded-md bg-sky-600 hover:bg-sky-900 text-white px-3 py-1 mr-2"
                                @click="router.visit(route('admin.posts.edit', post.id))">
                                Editar
                            </button>
                            <button
                                class="rounded-md bg-red-600 hover:bg-red-900 text-white px-3 py-1"
                                @click="deletePost(post.id)">
                                Excluir
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!-- Caso não tenha posts -->
        <div v-else>
            <p class="text-gray-500 text-center">Nenhum post encontrado!</p>
        </div>

        <!-- Botão para criar novo post -->
        <button
            class="rounded-md bg-green-600 hover:bg-green-800 text-white px-4 py-2 mt-6"
            @click="router.visit(route('admin.posts.create'))">
            Adicionar Novo Post
        </button>
    </section>
</template>
