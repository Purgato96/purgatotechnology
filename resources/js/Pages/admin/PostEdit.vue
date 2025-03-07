<script setup>
import GuestAdmin from '@/Layouts/GuestAdmin.vue'; // Layout padrão
defineOptions({layout: GuestAdmin}); // Define o layout para o componente
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";

// Recebendo a prop `post` e `authors`, que serão passadas pela resposta da rota.
const props = defineProps({
    post: Object,
    authors: Array,
});

// Agora você pode acessar props.post corretamente // Inicializando o formulário com os dados do post.
const form = useForm({
    title: props.post?.title || "",
    subtitle: props.post?.subtitle || "",
    content: props.post?.content || "",
    category: props.post?.category || "",
    author_id: props.post?.author || "",
    tags: props.post?.tags || "",
    image: null,  // Imagem tratada separadamente com File API.
});


const errors = ref({});

// Função para tratar alteração de imagem.
const onFileChange = (event) => {
    form.image = event.target.files[0];
};

// Função para atualizar o post.
const updatePost = () => {
    form.put(route("admin.posts.update", props.post.id), {
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
                    v-model="form.author_id"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                >
                    <option value="" selected disabled>Selecione um autor</option>
                    <option v-for="author in authors" :key="author.id" :value="author.id">
                        {{ author.name }}
                    </option>
                </select>
                <p v-if="errors.author" class="text-red-500 text-sm mt-1">{{ errors.author }}</p>
            </div>
            <!-- Tag -->
            <div class="mb-4">
                <label for="tags" class="block text-sm font-medium text-gray-700">Tag</label>
                <input
                    id="tags"
                    type="text"
                    v-model="form.tags"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.tags }"
                />
                <p v-if="errors.tags" class="text-red-500 text-sm mt-1">{{ errors.tags }}</p>
            </div>
            <!-- Image -->
            <div class="mb-4">
                <label for="image" class="block text-sm font-medium text-gray-700">Imagem</label>
                <input
                    id="image"
                    type="file"
                    v-on="form.image"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    @change="event => image.value = event.target.files[0]"
                    :class="{ 'border-red-500': errors.image }"
                />
                <p v-if="errors.image" class="text-red-500 text-sm mt-1">{{ errors.image }}</p>
            </div>

            <!-- Botões -->
            <div class="flex items-center justify-between mt-6">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Atualizar Post
                </button>
                <inertia-link
                    :href="route('admin.posts.update', props.post.id)"
                    class="text-gray-600 hover:underline"
                >
                    Cancelar
                </inertia-link>
            </div>
        </form>
    </div>
</template>

<!--<template>
    <Head>
        <title>Editando Post</title>
    </Head>

    <div v-if="props.post">
        <h1 class="text-2xl font-bold mb-6">Editar Post</h1>
        <pre>{{ props.post }}</pre>
    </div>

    <div v-else>
        <p class="text-red-500">Erro: Post não encontrado!</p>
    </div>
</template>-->
