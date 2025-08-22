<!-- resources/js/Pages/site/PostShow.vue (ou o caminho da sua página de post) -->
<script setup lang="ts">
import Guest from '@/Layouts/Guest.vue'
defineOptions({ layout: Guest })

import { onMounted, computed } from 'vue'
import { Head, usePage } from '@inertiajs/vue3'
import AdSlot from '@/Components/AdSlot.vue'
import { useConsent } from '@/Composables/useConsent'
import CookieSettingsButton from '@/Components/CookieSettingsButton.vue'

// Props vindas do controller
const props = defineProps<{
    post: {
        title: string
        author?: string
        created_at?: string
        category?: string
        image?: string
        subtitle?: string
        content?: string
        tags?: string
    }
}>()

const page = usePage()
const { initConsent } = useConsent()

// Compartilhado via Inertia::share no AppServiceProvider
const adsense = computed(() => page.props.adsense as { enabled: boolean; clientId?: string })

onMounted(() => {
    // Carrega CMP e só carrega AdSense após consentimento
    if (adsense.value?.enabled && adsense.value?.clientId) {
        initConsent(adsense.value.clientId)
    }
})
</script>

<template>
    <Head>
        <title>{{ post.title }}</title>
        <meta head-key="description" name="description" :content="post.title">
        <meta head-key="author" name="author" :content="post.author">
        <meta head-key="keywords" name="keywords" :content="post.tags">
    </Head>

    <div class="max-w-4xl mx-auto my-12 px-4">
        <!-- Anúncio no topo do post -->
        <AdSlot
            v-if="adsense?.enabled"
            :client-id="adsense.clientId"
            slot="8820137566"
        format="auto"
        :full-width="true"
        style="display:block; min-height:280px; margin-bottom:1.5rem;"
        :enabled="adsense.enabled"
        />

        <article class="bg-white rounded-lg shadow-md p-6">
            <header class="space-y-3">
                <img
                    v-if="post.image"
                    :src="`/storage/${post.image}`"
                    alt="Imagem do post"
                    class="rounded-lg w-full object-cover"
                    loading="lazy"
                />
                <h1 class="text-3xl font-bold text-gray-900">{{ post.title }}</h1>
                <div class="mt-2 text-sm text-gray-600 flex flex-wrap gap-x-2 gap-y-1">
                    <span v-if="post.author"><strong>Por:</strong> {{ post.author }}</span>
                    <span v-if="post.created_at">• <strong>Publicado em:</strong> {{ post.created_at }}</span>
                    <span v-if="post.category">• <strong>Categoria:</strong> {{ post.category }}</span>
                </div>
            </header>

            <!-- Subtítulo -->
            <div v-if="post.subtitle" class="mt-4 font-semibold text-md text-gray-700 prose prose-slate max-w-none"
                 v-html="post.subtitle"></div>

            <!-- Anúncio no meio do conteúdo -->
            <AdSlot
                v-if="adsense?.enabled"
                :client-id="adsense.clientId"
                slot="6002402535"
            format="auto"
            :full-width="true"
            style="display:block; min-height:280px; margin:1.5rem 0;"
            :enabled="adsense.enabled"
            />

            <!-- Conteúdo -->
            <div class="mt-6 prose prose-slate max-w-none text-gray-800"
                 v-html="post.content"></div>

            <footer class="mt-8 text-sm text-gray-500 flex items-center justify-between flex-wrap gap-3">
                <div>
                    <strong>Tags:</strong> {{ post.tags }}
                </div>
            </footer>
        </article>

        <!-- Anúncio no fim do post -->
        <AdSlot
            v-if="adsense?.enabled"
            :client-id="adsense.clientId"
            slot="4201417467"
        format="auto"
        :full-width="true"
        style="display:block; min-height:280px; margin-top:1.5rem;"
        :enabled="adsense.enabled"
        />
    </div>
</template>

<style scoped>
/* Evita sublinhado feio nos links da prose */
.prose :where(a):not(:where(.not-prose, .not-prose *)) {
    text-decoration: none;
}
</style>
