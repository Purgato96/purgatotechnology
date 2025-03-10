<script setup>
import GuestAdmin from '@/Layouts/GuestAdmin.vue'; // Layout padrão
defineOptions({layout: GuestAdmin}); // Define o layout para o componente
import {ref} from 'vue'; // Reatividade
import {router} from '@inertiajs/vue3'; // Inertia Router para criação do post
import RichTextEditor from '@/Components/RichTextEditor.vue';

// Campos do formulário
const title = ref('');
const subtitle = ref('');
const content = ref('');
const category = ref('');
const author = ref(''); // Assume que o autor será passado como ID
const tags = ref('');
const image = ref(null); // Para upload de imagem
const slug = ref('');

// Recebe a lista de autores do back-end como uma prop
defineProps({
    authors: Array,
});


// Função para criar o post
const createPost = () => {
    // Monta os dados do formulário
    const payload = {
        title: title.value,
        subtitle: subtitle.value,
        content: content.value,
        category: category.value || 'uncategorized', // Valor padrão
        author_id: author.value,
        tags: tags.value,
        image: image.value, // Upload de arquivo
        slug: slug.value,
    };

    // Dispara o POST para o back-end
    router.post(route('admin.posts.store'), payload, {
        onSuccess: () => {
            alert('Post criado com sucesso!');
            // Opcional: Redireciona para a lista de posts
            router.visit(route('admin.posts.index'));
        },
        onError: (errors) => {
            console.error('Erro ao criar post:', errors);
            alert('Houve um erro ao criar o post.');
        },
    });
};
</script>

<template>
    <Head>
        <title>Criar Novo Post</title>
    </Head>

    <section>
        <h1 class="text-2xl font-bold mb-6">Criar Novo Post</h1>

        <form @submit.prevent="createPost">
            <!-- Título -->
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="title">Título</label>
                <input
                    type="text"
                    id="title"
                    v-model="title"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    required
                />
            </div>

            <!-- Subtítulo -->
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="subtitle">Subtítulo</label>
                <input
                    type="text"
                    id="subtitle"
                    v-model="subtitle"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                />
            </div>

            <!-- Conteúdo -->
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="category">Conteúdo</label>
                <RichTextEditor
                    v-model="content"
                    id="content"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                />
            </div>

            <!-- Categoria -->
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="category">Categoria</label>
                <input
                    type="text"
                    id="category"
                    v-model="category"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    placeholder="Exemplo: Tecnologia"
                />
            </div>

            <!-- Autor -->
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="author">Autor</label>
                <select
                    id="author"
                    v-model="author"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    required
                >
                    <option value="" disabled selected>Selecione um autor</option>
                    <option v-for="authorItem in authors" :key="authorItem.id" :value="authorItem.id">
                        {{ authorItem.name }}
                    </option>
                </select>
            </div>

            <!-- Tags -->
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="tags">Tags</label>
                <input
                    type="text"
                    id="tags"
                    v-model="tags"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    placeholder="Exemplo: novidade, tutorial, artigo"
                />
            </div>

            <!-- Imagem -->
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="image">Imagem</label>
                <input
                    type="file"
                    id="image"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    @change="event => image.value = event.target.files[0]"
                />
            </div>

            <!-- Slug -->
<!--
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700" for="slug">Slug</label>
                <input
                    type="text"
                    id="slug"
                    v-model="slug"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    placeholder="Exemplo: meu-post-tutorial"
                />
            </div>
-->

            <!-- Botão de Enviar -->
            <button
                class="rounded-md bg-blue-600 hover:bg-blue-900 text-white px-4 py-2"
                type="submit"
            >
                Criar Post
            </button>
        </form>
    </section>
</template>

<style scoped>
/* Estilo simples para organização */
</style>
