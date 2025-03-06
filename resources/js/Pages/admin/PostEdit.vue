<script setup>
import GuestAdmin from '@/Layouts/GuestAdmin.vue'; // Layout padrão
defineOptions({ layout: GuestAdmin }); // Define o layout para o componente
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

// Recebendo a prop `post` e `authors`, que serão passadas pela resposta da rota.
defineProps({
    post: Object,
    authors: Array,
});

// Inicializando o formulário com os dados do post.
const form = useForm({
    title: post.title || "",
    subtitle: post.subtitle || "",
    content: post.content || "",
    category: post.category || "",
    author: post.author || "", // ID do autor
    tags: post.tags || "",
    image: null, // Imagem tratada separadamente com File API.
});

const errors = ref({});

// Função para tratar alteração de imagem.
const onFileChange = (event) => {
    form.image = event.target.files[0];
};

// Função para atualizar o post.
const updatePost = () => {
    form.post(route("admin.posts.update", post.id), {
        onError: (errorBag) => {
            errors.value = errorBag;
        },
    });
};
</script>

<template>
    <Head>
        <title>Editando Posts</title>
    </Head>

    <div class="max-w-4xl mx-auto bg-white shadow-md rounded p-6">
        <h1 class="text-2xl font-bold mb-6">Editar Post</h1>

        <!-- Formulário de edição -->
        <form @submit.prevent="updatePost">
            <!-- Título -->
            <div class="mb-4">
                <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
                <input
                    id="title"
                    type="text"
                    v-model="form.title"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.title }"
                />
                <p v-if="errors.title" class="text-red-500 text-sm mt-1">{{ errors.title }}</p>
            </div>

            <!-- Subtítulo -->
            <div class="mb-4">
                <label for="subtitle" class="block text-sm font-medium text-gray-700">Subtítulo</label>
                <input
                    id="subtitle"
                    type="text"
                    v-model="form.subtitle"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.subtitle }"
                />
                <p v-if="errors.subtitle" class="text-red-500 text-sm mt-1">{{ errors.subtitle }}</p>
            </div>

            <!-- Conteúdo -->
            <div class="mb-4">
                <label for="content" class="block text-sm font-medium text-gray-700">Conteúdo</label>
                <textarea
                    id="content"
                    v-model="form.content"
                    rows="5"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.content }"
                ></textarea>
                <p v-if="errors.content" class="text-red-500 text-sm mt-1">{{ errors.content }}</p>
            </div>

            <!-- Categoria -->
            <div class="mb-4">
                <label for="category" class="block text-sm font-medium text-gray-700">Categoria</label>
                <input
                    id="category"
                    type="text"
                    v-model="form.category"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.category }"
                />
                <p v-if="errors.category" class="text-red-500 text-sm mt-1">{{ errors.category }}</p>
            </div>

            <!-- Autor -->
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="author">Autor</label>
                <select
                    id="author"
                    v-model="form.author"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                >
                    <option value="" selected disabled>Selecione um autor</option>
                    <option v-for="authorOption in authors" :key="authorOption.id" :value="authorOption.id">
                        {{ authorOption.name }}
                    </option>
                </select>
                <p v-if="errors.author" class="text-red-500 text-sm mt-1">{{ errors.author }}</p>
            </div>

            <!-- Botões -->
            <div class="flex items-center justify-between mt-6">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Atualizar Post
                </button>
                <inertia-link
                    :href="route('admin.posts.index')"
                    class="text-gray-600 hover:underline"
                >
                    Cancelar
                </inertia-link>
            </div>
        </form>
    </div>
</template>
