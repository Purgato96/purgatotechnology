<!--
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    posts: Array
});
</script>

<template>
<Head>
        <title>Blog</title>
        <meta head-key="description" name="description" content="Seja bem vindo a página home do site Purgato Technology!">
        <meta head-key="keywords" name="keywords" content="laravel, inertia, Vue, Tailwindcss, Hospedagem, Performance, Cloud, Blog">
        <meta head-key="author" name="author" content="Matheus Purgato | Laravel Developer">
    </Head>

    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="prop.post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
              <a :href="post.category" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
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
                  <a :href="post.author">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ post.author.position }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>-->
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

        <!-- Schema.org -->
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Blog",
                "name": "Blog da Purgato Technology",
                "url": "https://purgatotechnology.com.br/blog",
                "description": "Dicas, novidades e conteúdos sobre desenvolvimento web, SEO e hospedagem de alta performance."
            }
        </script>

    </Head>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Últimas
                    Postagens</h2>
                <p class="mt-2 text-lg/8 text-gray-600">Fique por dentro de tudo o que está acontecendo no mundo da
                    tecnologia</p>
            </div>
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts" :key="post.id"
                         class="flex max-w-xl flex-col items-start justify-between">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time :datetime="post.created_at" class="text-gray-500">
                            {{ new Date(post.created_at).toLocaleDateString() }}
                        </time>
                        <span
                            class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                            {{ post.category?.title || 'Sem categoria' }}
                        </span>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                            <a :href="'/blog/' + post.id">
                                <span class="absolute inset-0"/>
                                {{ post.title }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ post.description }}</p>
                    </div>
                    <div class="relative mt-8 flex items-center gap-x-4">
                        <div class="text-sm/6">
                            <p class="font-semibold text-gray-900">
                                <a href="#">
                                    <span class="absolute inset-0"/>
                                    {{ post.author?.name || 'Autor Desconhecido' }}
                                </a>
                            </p>
                            <p class="text-gray-600">{{ post.author?.position || 'Redator' }}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
