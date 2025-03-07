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
                <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the
                    blog</h2>
                <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
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
                        <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                            <a :href="`/blog/${post.id}`">
                                <span class="absolute inset-0"/>
                                {{ post.title }}
                            </a>
                        </h3>
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


    <!-- Seção de Cabeçalho -->
    <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl font-bold text-gray-800 text-center">Blog</h1>
            <p class="text-center text-gray-600 mt-4">
                Explore nossas últimas novidades, guias e dicas de tecnologia.
            </p>
        </div>
    </section>
    <!-- Listagem de Posts -->
    <section class="py-12">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article
                    v-for="post in posts.data"
                    :key="post.id"
                    class="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden"
                >
                    <div class="p-4">
                        <!-- Título do Post -->
                        <h2 class="text-lg font-bold text-gray-800">
                            <a :href="`/blog/${post.id}`" class="hover:underline">
                                {{ post.title }}
                            </a>
                        </h2>

                        <!-- Informações adicionais do Post -->
                        <p class="text-sm text-gray-600 mt-2">
                            <span>Por: {{ post.author || 'Anônimo' }}</span> |
                            <time :datetime="post.created_at">{{ post.created_at }}</time>
                            |
                            <span>Categoria: {{ post.category || 'Sem Categoria' }}</span>

                        </p>

                        <!-- Resumo do conteúdo -->
                        <p class="text-gray-700 mt-4">
                            {{ post.content }}
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </section>

</template>

<style scoped>
/* Você pode adicionar estilos adicionais ou confiar no Tailwind CSS */
</style>
