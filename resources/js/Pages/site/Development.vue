<script setup>
import {CheckIcon} from '@heroicons/vue/20/solid'

const tiers = [
    {
        name: 'Landing Page (LP) | One Page',
        id: 'tier-hobby',
        href: 'https://wa.me/5519993492828?text=Olá%20quero%20saber%20mais%20sobre%20os%20planos%20da%20Purgato%20Technology',
        description: "Uma página única, direta e poderosa. Focada 100% em conversão: ideal para divulgar serviços, produtos, eventos ou campanhas específicas. Estruturada com copywriting estratégico, layout profissional e chamada para ação otimizada.",
        features: [
            'Página com design focado em conversão',
            'Hospedagem Cloud Premium',
            'Alterações de conteúdo sob demanda',
            'Manutenção e atualizações contínuas'
        ],
        featured: false,
    },
    {
        name: 'Site Institucional + Blog',
        id: 'tier-enterprise',
        href: 'https://wa.me/5519993492828?text=Olá%20quero%20saber%20mais%20sobre%20os%20planos%20da%20Purgato%20Technology',
        description: 'Tudo do plano Institucional, com o poder do conteúdo. Publique artigos, gere autoridade e conquiste o Google. Ideal para negócios que querem crescer de forma orgânica, educar o público e gerar novos leads.',
        features: [
            'Tudo do plano Institucional',
            'Blog integrado com layout otimizado',
            'Suporte personalizado',
            'Estratégia de conteúdo para SEO',
            'Otimização para buscas e para IA (ChatGPT, Gemini etc)',
            'Relatórios de desempenho e insights mensais',

        ],
        featured: true,
    },
    {
        name: 'Site Institucional',
        id: 'tier-hobby',
        href: 'https://wa.me/5519993492828?text=Olá%20quero%20saber%20mais%20sobre%20os%20planos%20da%20Purgato%20Technology',
        description: "Apresente sua empresa de forma profissional, com uma estrutura clara e confiável. Tenha uma presença sólida na internet, mostre seus serviços, equipe, missão e canais de contato.",
        features: [
            'Website completo e responsivo',
            'Hospedagem Cloud Premium',
            'Google Meu Negócio configurado',
            'Integração com Google Analytics e Search Console',
            'Alterações de conteúdo',
            'Manutenção e atualizações regulares'
        ],
        featured: false,
    },
]
import Guest from '@/Layouts/Guest.vue'

defineOptions({layout: Guest});
</script>

<template>
    <Head>
        <title>Desenvolvimento</title>
        <meta head-key="description" name="description"
              content="Desenvolvimento web personalizado com Laravel, Vue e Tailwind, focado em performance, SEO e experiência do usuário.">
        <meta head-key="keywords" name="keywords"
              content="desenvolvimento web, criação de sites, Laravel, Inertia, Vue, Tailwind CSS, websites modernos, performance, design responsivo, otimização, programação">
        <meta head-key="author" name="author" content="Matheus Purgato, Desenvolvedor Laravel e Especialista em SEO">
    </Head>
    <div class="relative isolate bg-white dark:bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
            <div
                class="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] dark:bg-linear-to-tr dark:from-[#ffffff] dark:to-[#3055fc] opacity-30"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
        </div>
        <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-base/7 font-semibold text-indigo-600 dark:text-sky-300">Desenvolvimento</h2>
            <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-sky-600 sm:text-6xl">
                Escolha o plano certo para você</p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 dark:text-sky-300 sm:text-xl/8">
            Escolha um plano acessível que inclua os melhores recursos para envolver seu público, fidelizar o cliente e
            impulsionar as vendas.</p>
        <div
            class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
            <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
                 :class="[tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 dark:bg-white sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10']">
                <h3 :id="tier.id"
                    :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold']">
                    {{ tier.name }}</h3>
                <p :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7']">{{
                        tier.description
                    }}</p>
                <ul role="list"
                    :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-8 space-y-3 text-sm/6 sm:mt-10']">
                    <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                        <CheckIcon :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none']"
                                   aria-hidden="true"/>
                        {{ feature }}
                    </li>
                </ul>
                <a :href="tier.href" :aria-describedby="tier.id"
                   :class="[tier.featured ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500' : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600', 'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10']">Quero
                    Esse</a>
            </div>
        </div>
    </div>
</template>
