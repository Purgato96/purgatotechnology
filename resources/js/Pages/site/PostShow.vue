<script setup>
import Guest from '@/Layouts/Guest.vue';
defineOptions({ layout: Guest });
import { defineProps } from 'vue';

const props = defineProps({
    post: Object, // O post será recebido diretamente do controlador
});
</script>

<template>
    <Head>
        <title>{{ post.title }}</title>
        <meta head-key="description" name="description" :content="`${post.title}`">
        <meta head-key="author" name="author" :content="post.author">
        <meta head-key="keywords" name="keywords" :content="`${post.tags}`">
        </Head>

    <div class="max-w-4xl mx-auto my-12 px-4">
        <article class="bg-white rounded-lg shadow-md p-6">
            <header>
                <img v-if="post.image" :src="`/storage/${post.image}`" alt="Imagem do post" class="rounded-lg">
                <h1 class="text-3xl font-bold text-gray-900">{{ post.title }}</h1>
                <div class="mt-2 text-sm text-gray-600">
                    <span><strong>Por:</strong> {{ post.author }}</span> |
                    <span><strong>Publicado em:</strong> {{ post.created_at }}</span>
                    <span v-if="post.category">| <strong>Categoria:</strong> {{ post.category }}</span>
                </div>
            </header>
            <div class="mt-2 font-semibold text-md text-gray-700">
                <p v-html="post.subtitle"></p>
            </div>
            <div class="mt-6 prose max-w-none text-gray-800">
                <p v-html="post.content"></p>
            </div>

            <footer class="mt-8 text-sm text-gray-500">
                <strong>Tags:</strong> {{ post.tags }}
            </footer>
        </article>
    </div>
</template>
