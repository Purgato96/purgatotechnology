<script setup>
import Guest from '@/Layouts/Guest.vue';

defineOptions({layout: Guest});
import {usePage, Head} from '@inertiajs/vue3'; // Importa recursos do Inertia.js
import Pagination from "@/Components/Pagination.vue";

defineProps({
    posts: Object // `posts` agora é um objeto de paginação
});


// Função para navegar entre páginas
const goToPage = (url) => {
    if (url) {
        window.location.href = url; // Redireciona para a URL da página
    }
}
</script>

<template>
    <Head>
        <title>Nosso Blog</title>
        <meta head-key="description" name="description"
              content="Descubra nossas dicas de tecnologia no blog da Purgato Technology. Fique por dentro!">
    </Head>

    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h1 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Nosso Blog</h1>
                <p class="mt-2 text-lg/8 text-gray-600">Fique por dentro das últimas notícias da Purgato Technology.</p>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts.data" :key="post.id"
                         class="flex max-w-xl flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time :datetime="post.datetime" class="text-gray-500">{{ post.created_at }}</time>
                        <a :href="post.category.href"
                           class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
                                post.category
                            }}</a>
                    </div>
                    <img v-if="post.image" :src="post.image" :alt="post.title" class="rounded-md shadow-md" />
                    <div class="group relative">
                        <h2 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                            <a :href="`/blog/${post.id}`">
                                <span class="absolute inset-0"/>
                                {{ post.title }}
                            </a>
                        </h2>
                        <h3 class="mt-5 font-semibold line-clamp-3 text-md/4 text-gray-700">{{ post.subtitle }}</h3>
                        <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ post.content }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <div class="text-sm/6">
                            <p class="font-semibold text-gray-900">
                                <a :href="post.author.href">
                                    <span class="absolute inset-0"/>
                                    {{ post.author || 'Anônimo' }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ post.author_position || 'Escritor' }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    <div class="mb-6">
        <!-- Paginação -->
        <Pagination v-if="posts.links" :links="posts.links"/>
    </div>


</template>

<style scoped>
/* Você pode adicionar estilos adicionais ou confiar no Tailwind CSS */
</style>
