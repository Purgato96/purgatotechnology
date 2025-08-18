<script setup>
import GuestAdmin from '@/Layouts/GuestAdmin.vue'
import { Head, router } from '@inertiajs/vue3'
import Pagination from '@/Components/Pagination.vue'

defineOptions({ layout: GuestAdmin })

const props = defineProps({
    posts: { type: Object, required: true },
})

const deletePost = (slug) => {
    if (!slug) return alert('Slug ausente.')
    if (confirm('Tem certeza que deseja excluir este post?')) {
        router.delete(route('admin.posts.destroy', slug), {
            onSuccess: () => alert('Post excluído com sucesso!'),
            onError: () => alert('Falha ao excluir o post.'),
            preserveScroll: true,
        })
    }
}

const editPost = (slug) => {
    if (!slug) return alert('Slug ausente.')
    router.visit(route('admin.posts.edit', slug))
}

const createPost = () => {
    router.visit(route('admin.posts.create'))
}
</script>

<template>
    <Head>
        <title>Posts Cadastrados</title>
    </Head>

    <section>
        <h1 class="text-2xl font-bold mb-6">Listagem de Posts</h1>

        <div v-if="posts?.data?.length">
            <ul class="divide-y divide-gray-200">
                <li v-for="post in posts.data" :key="post.id" class="py-4">
                    <div class="flex items-center justify-between gap-4">
                        <div class="min-w-0">
                            <h2 class="text-lg font-semibold truncate">#{{ post.id }} — {{ post.title }}</h2>
                            <p class="text-sm text-gray-600 line-clamp-2">{{ post.content }}</p>
                        </div>
                        <div class="shrink-0">
                            <button
                                class="rounded-md bg-sky-600 hover:bg-sky-900 text-white px-3 py-1 mr-2"
                                @click="editPost(post.slug)"
                            >
                                Editar
                            </button>
                            <button
                                class="rounded-md bg-red-600 hover:bg-red-900 text-white px-3 py-1"
                                @click="deletePost(post.slug)"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div v-else>
            <p class="text-gray-500 text-center">Nenhum post encontrado!</p>
        </div>

        <button
            class="rounded-md bg-green-600 hover:bg-green-800 text-white px-4 py-2 mt-6"
            @click="createPost"
        >
            Adicionar Novo Post
        </button>

        <Pagination v-if="posts?.links" :links="posts.links" />
    </section>
</template>
