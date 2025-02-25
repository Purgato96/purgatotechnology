<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    posts: Array
});
</script>

<template>
    <Head>
        <title>Blog</title>
        <meta head-key="description" name="description"
              content="Seja bem vindo a página blog do site Purgato Technology!">
        <meta head-key="keywords" name="keywords"
              content="laravel, inertia, Vue, Tailwindcss, Hospedagem, Performance, Cloud, Blog">
        <meta head-key="author" name="author" content="Matheus Purgato | Laravel Developer">


    </Head>
    <!-- Schema.org -->
    <SeoSchema :schema="JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Blog da Purgato Technology',
    'url': 'https://purgatotechnology.com.br/blog',
    'description': 'Dicas, novidades e conteúdos sobre desenvolvimento web, SEO e hospedagem de alta performance.'
    })"
    />

    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Nosso blog</h2>
                <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts.data" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time :datetime="post.datetime" class="text-gray-500">{{ post.created_at }}</time>
                        <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category }}</a>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                            <a :href="post.href">
                                <span class="absolute inset-0" />
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ post.content }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <div class="text-sm/6">
                            <p class="font-semibold text-gray-900">
                                <a :href="post.author.href">
                                    <span class="absolute inset-0" />
                                    {{ post.author }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ post.author.position }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

    <!-- Lista de Posts -->
    <ul>
        <li v-for="post in posts.data" :key="post.id" class="p-2 border-b">
            <h2 class="font-semibold">{{ post.title }}</h2>
            <p>{{ post.content }}</p>
        </li>
    </ul>

    <!-- Paginação -->
    <div class="flex gap-2 mt-4">
        <button
            v-for="link in posts.links"
            :key="link.label"
            @click="goToPage(link.url)"
            v-html="link.label"
            class="px-4 py-2 border rounded"
            :class="{
          'bg-gray-300': link.active,
          'cursor-not-allowed text-gray-500': !link.url
        }"
            :disabled="!link.url"
        ></button>
    </div>
</template>
