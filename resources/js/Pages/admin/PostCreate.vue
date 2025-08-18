<script setup>
import GuestAdmin from '@/Layouts/GuestAdmin.vue'
defineOptions({ layout: GuestAdmin })

import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import RichTextEditor from '@/Components/RichTextEditor.vue'

// Campos do formulário
const title = ref('')
const subtitle = ref('')
const content = ref('')
const category = ref('')
const author = ref('') // id
const tags = ref('')
const image = ref(null) // file
const slug = ref('')

// Recebe a lista de autores do back-end como uma prop
defineProps({
    authors: Array,
})

// Cria post
const createPost = () => {
    const payload = {
        title: title.value,
        subtitle: subtitle.value,
        content: content.value,
        category: category.value || 'uncategorized',
        author_id: author.value,
        tags: tags.value,
        image: image.value,
        slug: slug.value,
    }

    router.post(route('admin.posts.store'), payload, {
        onSuccess: () => {
            alert('Post criado com sucesso!')
            router.visit(route('admin.posts')) // ✅ nome correto
        },
        onError: (errors) => {
            console.error('Erro ao criar post:', errors)
            alert('Houve um erro ao criar o post.')
        },
    })
}

const onFileChange = (e) => {
    image.value = e.target.files[0]
}
</script>

<template>
    <Head>
        <title>Criar Novo Post</title>
    </Head>

    <section class="max-w-3xl mx-auto">
        <h1 class="text-2xl font-bold mb-6">Criar Post</h1>

        <form @submit.prevent="createPost" class="space-y-4">
            <!-- Título -->
            <div>
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
            <div>
                <label class="block text-sm font-medium text-gray-700" for="subtitle">Subtítulo</label>
                <input
                    type="text"
                    id="subtitle"
                    v-model="subtitle"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                />
            </div>

            <!-- Conteúdo -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="content">Conteúdo</label>
                <RichTextEditor
                    v-model="content"
                    id="content"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                />
            </div>

            <!-- Categoria -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="category">Categoria</label>
                <input
                    type="text"
                    id="category"
                    v-model="category"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                />
            </div>

            <!-- Autor -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="author">Autor</label>
                <select
                    id="author"
                    v-model="author"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                >
                    <option value="" disabled selected>Selecione um autor</option>
                    <option v-for="authorItem in authors" :key="authorItem.id" :value="authorItem.id">
                        {{ authorItem.name }}
                    </option>
                </select>
            </div>

            <!-- Tags -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="tags">Tags</label>
                <input
                    type="text"
                    id="tags"
                    v-model="tags"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                />
            </div>

            <!-- Slug -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="slug">Slug</label>
                <input
                    type="text"
                    id="slug"
                    v-model="slug"
                    placeholder="opcional — se vazio, será gerado do título"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                />
            </div>

            <!-- Imagem -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="image">Imagem</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    @change="onFileChange"
                    class="w-full"
                />
            </div>

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
