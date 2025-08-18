<script setup>
import GuestAdmin from '@/Layouts/GuestAdmin.vue'
defineOptions({ layout: GuestAdmin })

import { ref } from 'vue'
import { useForm } from '@inertiajs/vue3'
import RichTextEditor from '@/Components/RichTextEditor.vue'

const props = defineProps({
    post: { type: Object, required: true },
    authors: { type: Array, required: true },
})

const errors = ref({})

const form = useForm({
    title: props.post?.title || '',
    subtitle: props.post?.subtitle || '',
    content: props.post?.content || '',
    category: props.post?.category || '',
    author_id: props.post?.author_id || '',
    tags: props.post?.tags || '',
    image: null, // arquivo
    slug: props.post?.slug || '',
})

const onFileChange = (event) => {
    form.image = event.target.files[0]
}

const updatePost = () => {
    form.put(route('admin.posts.update', props.post.slug), {
        onError: (bag) => (errors.value = bag),
    })
}
</script>

<template>
    <Head>
        <title>Editando Posts</title>
    </Head>

    <div class="max-w-3xl mx-auto">
        <h1 class="text-2xl font-bold mb-6">Editar Post</h1>

        <form @submit.prevent="updatePost" class="space-y-4">
            <!-- Título -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="title">Título</label>
                <input
                    type="text"
                    id="title"
                    v-model="form.title"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.title }"
                    required
                />
                <p v-if="errors.title" class="text-red-500 text-sm mt-1">{{ errors.title }}</p>
            </div>

            <!-- Slug -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="slug">Slug</label>
                <input
                    type="text"
                    id="slug"
                    v-model="form.slug"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.slug }"
                />
                <p v-if="errors.slug" class="text-red-500 text-sm mt-1">{{ errors.slug }}</p>
            </div>

            <!-- Subtítulo -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="subtitle">Subtítulo</label>
                <input
                    type="text"
                    id="subtitle"
                    v-model="form.subtitle"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.subtitle }"
                />
                <p v-if="errors.subtitle" class="text-red-500 text-sm mt-1">{{ errors.subtitle }}</p>
            </div>

            <!-- Conteúdo -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="content">Conteúdo</label>
                <RichTextEditor
                    v-model="form.content"
                    id="content"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                />
                <p v-if="errors.content" class="text-red-500 text-sm mt-1">{{ errors.content }}</p>
            </div>

            <!-- Categoria -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="category">Categoria</label>
                <input
                    type="text"
                    id="category"
                    v-model="form.category"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                    :class="{ 'border-red-500': errors.category }"
                />
                <p v-if="errors.category" class="text-red-500 text-sm mt-1">{{ errors.category }}</p>
            </div>

            <!-- Autor -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="author">Autor</label>
                <select
                    id="author"
                    v-model="form.author_id"
                    class="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-400"
                >
                    <option value="" disabled>Selecione um autor</option>
                    <option v-for="author in authors" :key="author.id" :value="author.id">
                        {{ author.name }}
                    </option>
                </select>
                <p v-if="errors.author_id" class="text-red-500 text-sm mt-1">{{ errors.author_id }}</p>
            </div>

            <!-- Tags -->
            <div>
                <label class="block text-sm font-medium text-gray-700" for="tags">Tags</label>
                <input
                    type="text"
                    id="tags"
                    v-model="form.tags"
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

            <div class="flex items-center justify-between mt-6">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                    Atualizar Post
                </button>

                <a :href="route('admin.posts')" class="text-gray-600 hover:underline">
                    Cancelar
                </a>
            </div>
        </form>
    </div>
</template>
